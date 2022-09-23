import React,{useState} from 'react';
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import SideBar from "./SideBar";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavBarProps{
    selectedCategoryNav:string;
    setSelectedCategoryNav:React.Dispatch<React.SetStateAction<string>>
}
const Navbar = (props:NavBarProps) => {
    const [openSideBar,setOpenSideBar]=useState(false);
  
  return (<Stack
        direction="row"
        alignItems="center"
        sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        padding:"5px",
        background:'#ffffff',
        zIndex:1
        }}
        className='navbar-container'
    >
    <div className="logo-with-menuicon">
        <span style={{cursor:"pointer"}}>
           {
           openSideBar ? <>
                <MenuIcon />
                <SideBar 
                    categorySelected={props.selectedCategoryNav} 
                    changeSelectedCategory={(value)=>props.setSelectedCategoryNav(value)} 
                    openStatus={openSideBar} 
                    toggleSideBar={(value)=>setOpenSideBar(value)} 
                />
            </>:<span onClick={()=>{setOpenSideBar(true)}}>
                    <MenuIcon />
                </span>}
        </span>
        <Link to="/" className="logo-with-text">
            <BedroomBabyIcon sx={{ color: "red", fontSize: "20px" }} />
            <h1 
              style={{fontSize:"20px",letterSpacing:'-1px'}}>
                PlayTube
            </h1>
        </Link>
    </div>
    <SearchBar />
    <div className="feature-bar">
        {/* <Link to="/notifications" style={{ display: "flex", alignItems: "center" }}>
            <NotificationsNoneIcon sx={{ color: "black", fontSize: "25px",padding:"10px" }} />
        </Link>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <VideoCallIcon sx={{ color: "black", fontSize: "25px" ,padding:"10px"}} />
        </Link>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon sx={{ color: "black", fontSize: "25px",padding:"10px" }} />
        </Link> */}
    </div>
    
  </Stack>)
}

export default Navbar;
