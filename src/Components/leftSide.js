import "./leftSide.css";
import React from 'react'
import ProfileImg from '../assets/Profile.jpg';
import HomeIcon from '@mui/icons-material/Home';
import instagramlogo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
const LeftSide = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart"></div>
      <img className="logoimg" src={instagramlogo} alt="Instagram" />
      <div className="navlinkPart">
        <div className="navLink">
          <HomeIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></HomeIcon>
          <div className="navName">Home</div>
        </div>
        <div className="navLink">
          <SearchIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></SearchIcon>
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <ExploreIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></ExploreIcon>
          <div className="navName">Explore</div>
        </div>
        <div className="navLink">
          <MusicVideoIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></MusicVideoIcon>
          <div className="navName">Reels</div>
        </div>
        <div className="navLink">
          <MessageIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></MessageIcon>
          <div className="navName"> Messages</div>
        </div>
        <div className="navLink">
          <FavoriteBorderIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></FavoriteBorderIcon>
          <div className="navName"> Notification</div>
        </div>
        <div className="navLink">
          <AddBoxIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></AddBoxIcon>
          <div className="navName"> Create</div>
        </div>
        <div className="navLink">
          <img className="ProfileImg" src={ProfileImg} alt='Profile Image' />
          <div className="navName"> Profile</div>
        </div>

        <div className="belowPart">
          <div className="navLink">
            <GestureIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></GestureIcon>
            <div className="navName"> Threads</div>
          </div>
          <div className="navLink">
            <MenuIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}></MenuIcon>
            <div className="navName"> More</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LeftSide
