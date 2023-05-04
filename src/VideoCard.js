import { Avatar } from '@mui/material'
import React from 'react'

function VideoCard({title,channelName,channelImage,videoImage,timestamp,views}) {
  return (
    <div className='flex flex-col gap-3 bg-white w-[350px] rounded-lg
    shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
    hover:scale-110 cursor-pointer duration-200 ease-in-out
    h-[300px]
    '>
        <img src={videoImage} alt='' className='rounded-t-lg object-contain h-[200px] bg-black'/>
        <div className='flex gap-3 px-2 pb-2'>
            
            <Avatar src={channelImage} alt='' className='object-contain'/>
            
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl line-clamp-1'>{title}</h1>
                <p className='text-gray-500 '>{channelName.length>20?channelName.slice(0,20)+"...":channelName}</p>
                <p className='text-gray-500 '>{views} • {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard