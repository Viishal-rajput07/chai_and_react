import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


function PostCard({ $id, title, image, description }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure
          className='h-96'
          >
          <img 
            src={service.getFilePreview(image)} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className='w-64'>{parse(description.slice(0, 60))}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary hover:bg-blue-700">Visit Post</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard

