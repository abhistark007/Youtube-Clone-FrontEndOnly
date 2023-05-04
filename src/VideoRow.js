
import React from 'react'

function VideoRow({ image, title, channelName, subsCount, viewCount, timeStamp, desc }) {
    return (
        <div className='flex  rounded-lg gap-5 cursor-pointer'>
            <img src={image} alt={`${title}`} className='object-contain flex-[0.3] w-[200px] h-[200px] bg-black rounded-lg' />
            <div className='flex flex-col flex-[0.7] gap-2'>
                <h1 className='font-bold'>{title}</h1>
                <p>{channelName + " • " + subsCount + " subscriber • " + viewCount + " views • " + timeStamp}</p>
                <p className='line-clamp-2'>{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow