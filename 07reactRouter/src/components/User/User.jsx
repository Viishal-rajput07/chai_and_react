import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl text-white bg-orange-500 p-4 rounded-full'>
           User: {userid}
    </div>
  )
}

export default User