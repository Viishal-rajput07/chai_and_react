import React from 'react'

function Loader() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <span className="loading loading-infinity loading-lg"></span>
    </div>
  )
}

export default Loader