import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
        {/*Sidebar logo */}
        <TwitterIcon className='sidebar__TwitterIcon'/>

        {/*Sidebar option */}
        <SidebarOption active text='Home' Icon={HomeIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='Explore' Icon={SearchIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='Notifications' Icon={NotificationsNoneIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='Messages' Icon={MailOutlineIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='List' Icon={SubjectIcon}/>
        {/*Sidebar option */}
        <SidebarOption text='Profile' Icon={PersonOutlineIcon}/>
        {/* Tweet Button */}
        <SidebarOption text='More' Icon={MoreHorizIcon}/>
        <Button variant='outlined' className="sidebarTweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
