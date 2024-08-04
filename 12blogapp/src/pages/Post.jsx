import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import service from '../appwrite/config'
import {Button, Container, Loader} from '../components'
import parse from 'html-react-parser'
import  {useSelector} from 'react-redux'

function Post() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState(null)
    const {slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(()=> {
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post) setPost(post)
                else navigate('/')
            })
            .finally(()=> setLoading(false))
        }
        else navigate('/')
    }, [slug, navigate])

    const deletePost = () =>{
        service.deletePost(post.$id).then((status) =>{
            if(status){
                service.deleteFile(post.image);
                navigate('/')
            }
        })
    }
  return  post && !loading ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center  mb-4 relative  rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.image)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="fixed right-6 top-20">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-5xl font-bold">{post.title}</h1>
                </div>
                <div className="text-lg">
                    {parse(post.description)}
                </div>
            </Container>
        </div>
    ) : <Loader />


}

export default Post