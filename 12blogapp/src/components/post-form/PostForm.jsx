import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from '..'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            description: post?.description || "",
            status: post?.status || "active",
        },
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        try {
            let fileId;
            if (data.image?.[0]) {
                console.log('Uploading file:', data.image[0]);
                const file = await service.uploadFile(data.image[0]);
                fileId = file.$id;
                console.log('File uploaded with ID:', fileId);
            }

            if (post) {
                if (fileId) {
                    await service.deleteFile(post.image);
                }

                const updatedData = {
                    ...data,
                    image: fileId ? fileId : post.image, // Use the new fileId or existing image
                };
                console.log('Updating post with data:', updatedData);
                const dbPost = await service.updatePost(post.$id, updatedData);

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!fileId) {
                    throw new Error('Image is required for new posts');
                }

                data.image = fileId;
                const newData = { ...data, userid: userData.$id };
                console.log('Creating post with data:', newData);
                const dbPost = await service.createPost(newData);

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        })

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />
                <RTE label='content :' name="description" control={control} defaultValue={getValues('description')} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.image)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}
