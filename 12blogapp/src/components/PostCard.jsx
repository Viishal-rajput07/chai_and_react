import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


function PostCard({ $id, title, image, description }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="card card-compact bg-base-100  w-96 shadow-xl">
        <figure
          className='h-96'
          >
          <img 
            src={service.getFilePreview(image)} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{parse(description)}</p>
          <div className="card-actions justify-end">
            <Link to={`/post/${$id}`} className="btn btn-primary">Visit Post</Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard

