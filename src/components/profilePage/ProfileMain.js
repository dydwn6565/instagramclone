import { Box, div } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../profilePage/ProfileMain.css"
function ProfileMain() {

  const [clickedButton,setClickedButton]= useState("board")

    
  return (
    <>
      <div className="profile-middle-line"></div>
      <div className="profile-main">
        <Box className="profile-multiple-buttons">
          <div>
            <div className={clickedButton ==="board" ? "profile-btn-border-top":"" } onClick={(e)=>setClickedButton("board")}>
              <Link to="/id" className="link-text-no-decoration">
                Board
              </Link>
            </div>
            <div className={clickedButton ==="saved" ? "profile-btn-border-top":""} onClick={(e)=>setClickedButton("saved")}>
              <Link to="/id/saved" className="link-text-no-decoration">
                Saved
              </Link>
            </div>
            <div className={clickedButton ==="taged" ? "profile-btn-border-top":""} onClick={(e)=>setClickedButton("taged")}>
              <Link to="/id/taged" className="link-text-no-decoration">
                Taged
              </Link>
            </div>
          </div>
        </Box>
        <img
          alt="pitcure"
          src="https://media.istockphoto.com/photos/headshot-portraits-of-diverse-smiling-people-picture-id949582374?k=20&m=949582374&s=612x612&w=0&h=_sc6AeJzB4mR_4eyK9Lo4uLBkSRrh9SB7fx_8grUj3E="
        ></img>
      </div>
    </>
  );
}

export default ProfileMain