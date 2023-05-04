import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import YoutubeLogoSVG from './assets/YouTube-Logo.wine.svg';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';

import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';


function Header() {

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='flex justify-between items-center pl-5 pr-5 pb-5 sticky top-0 bg-white z-50'>
      <div className='flex items-center '>
        <MenuSharpIcon />
        <Link to={"/"}>
        <img src={YoutubeLogoSVG} alt='Youtube Logo' width={"120px"} className='object-contain' />
        </Link>
      </div>
      <div className='flex items-center w-[40%]  border-2 border-gray-300 rounded-full '>
        <input type='text' className='flex-1  outline-none rounded-full pl-4' placeholder='Search...' value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className=' bg-[#fafafa] rounded-r-full flex-2 !h-10 !w-10 p-2 hover:bg-red-600 hover:text-white duration-200 ease-in-out 
        cursor-pointer'/>
        </Link>
      </div>
      <div className='flex items-center gap-2 '>
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsNoneSharpIcon />
        <Avatar
          alt='Jennie Kim'
          src='https://juksun.com/wp-content/uploads/2022/02/Jennie-Kim.jpg'
        />
      </div>
    </div>
  )
}

export default Header