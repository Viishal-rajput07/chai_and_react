import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container, PostCard, Loader } from '../components'

function AllPosts() {

    const[loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
        .finally(()=> setLoading(false))
    }, [])
    
  return !loading ? (
    <div className='w-full py-8'>
        <Container >
            <div className='flex flex-wrap '>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>

                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  ) : <Loader />
}

export default AllPosts