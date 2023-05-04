
import SidebarRow from './SidebarRow'

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';


function SideBar() {
    
  return (
    <div className='flex-[0.2]'>
        
        <SidebarRow selected Icon={HomeSharpIcon} text="Home" />
        <SidebarRow Icon={WhatshotSharpIcon} text="Trending"/>
        <SidebarRow Icon={SubscriptionsSharpIcon} text="Subscription" />
        <hr className='h-[1px] border-0 bg-gray-400 my-0.5 mx-5'/>
        <SidebarRow Icon={VideoLibrarySharpIcon} text="Library" />
        <SidebarRow Icon={HistorySharpIcon} text="History" />
        <SidebarRow Icon={OndemandVideoSharpIcon} text="Your Videos" />
        <SidebarRow Icon={WatchLaterSharpIcon} text="Watch Later" />
        <SidebarRow Icon={ThumbUpAltSharpIcon} text="Liked Videos" />
        <SidebarRow Icon={KeyboardArrowDownSharpIcon} text="Show more" />
        <hr className='h-[1px] border-0 bg-gray-400 my-0.5 mx-5'/> 
    </div>
  )
}

export default SideBar