import React from 'react'
import  "./Header.css";
import searchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import  SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import  SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";
import  AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import  NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import  ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import StoredfrontOutlinedIcon from "@material-ui/icons/StoredfrontOutlined";

function Header() {
    return (
    <div className="header">       
            <div className="header_left">
            <img src="/images/Facebook_Logo.png" alt=""/>
            
            <div className="header_input">
            <searchIcon />
            <input type="Text" />
            </div>
            </div>
            
 <div className="header_center"> 
      <div className="header_option">
     <HomeIcon fontsize ="large" />
   </div>
   <div className="header_option">
     <FlagIcon fontsize ="large" />
   </div>
   <div className="header_option">
     <SubscriptionsOutlinedIcon fontsize ="large" />
   </div>
   
   <div className="header_option">
     <SupervisedUserCircleIcon fontsize ="large" />
   </div>
 </div>
 
 <div className="header_right">
 <div className="header_info">
 <Avatar />
 <h4>poori</h4>
 </div> 
 <IconButton>
 <AddIcon />
 </IconButton>
 <IconButton>
 <ForumIcon />
 </IconButton>
 <IconButton>
 <NotificationsActiveIcon />
 </IconButton>
 
 <IconButton>
 <ExpandMoreIcon />
 </IconButton>
 </div>
 </div>

    )
}

export default Header;
