
import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import VideoLibraryIcon  from "@material-ui/icons/VideoLibrary";
import  LocalHospitalIcon  from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import  PeopleIcon  from "@material-ui/icons/People";
import  ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
    return (
        <div className="Sidebar">
            <SidebarRow src= '' title = "poori" />
            <SidebarRow Icon={LocalHospitalIcon} title ="COVID_19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title ="pages"/>
            <SidebarRow Icon={PeopleIcon} title ="Friends"/>
            <SidebarRow Icon={ChatIcon} title ="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title ="Market Place"/>
            <SidebarRow Icon={VideoLibraryIcon} title ="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title ="Marketplace"/>
        </div>
    )
}

export default Sidebar;
