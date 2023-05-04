import { Avatar } from '@mui/material'
import React from 'react'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

function ChannelRow({channelName,subsCount,videosCount,desc}) {
  return (
    <div className='flex w-[500px] gap-4 bg-white py-4 px-4 rounded-lg
    shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
    cursor-pointer hover:scale-110 duration-200 ease-in-out
    '>
        <Avatar 
        src='https://s.yimg.com/ny/api/res/1.2/esnZvWClK3w4k6st3dr.fA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/cinema.com.my/86d54a87a129b4768b348d887ae2c8de'
        alt='Don LEE'
        className='!w-[200px] !h-[200px]' 
        />
        <div className='flex flex-col text-gray-700'>
            <div className='flex'>
                <h1 className='font-bold'>{channelName}</h1>
                <CheckCircleOutlineSharpIcon className='text-blue-500'/>
            </div>
            <p className='text-gray-950'>{subsCount +" subscribers • "+videosCount+" videos"}</p>
            <p className='line-clamp-4 '>{desc}</p>

        </div>
    </div>
  )
}

export default ChannelRow