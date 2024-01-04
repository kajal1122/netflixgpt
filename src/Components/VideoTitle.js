import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{original_title}</h1>
        <p className='text-sm m-2 p-2 w-1/4 text-white'>{overview}</p>
        <div>
            <button className='rounded-md bg-white hover:bg-white-900 text-black font-bold py-2 px-4 mx-2 text-md hover:bg-opacity-50'>▶️ Play </button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mx-2 text-xl'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;