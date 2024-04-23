import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className='aspect-video w-full absolute  text-white bg-gradient-to-r from-slate-950'>
        <h1 className=' text-2xl mt-16 md:mt-52 md:text-5xl md:mx-32 mx-8 font-bold '>{title}</h1>
        <p className=' hidden md:inline-block my-16 mx-32 text-xl w-1/2 h-auto font-mono'>{overview}</p>
        
    </div>
  )
}

export default VideoTitle