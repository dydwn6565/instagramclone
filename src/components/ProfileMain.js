import { Box, Button } from '@mui/material';
import React from 'react'
import "./css/ProfileMain.css"
function ProfileMain() {


    const redirectToBoard =() => window.history.href ="id"
    const redirectToSaved = () => (window.history.href = "id/saved");
    const redirectToTaged = () => (window.history.href = "id/taged");
  return (
    <>
      <div className="profile-main">
        <Box className="profile-multiple-buttons">
          <div>
            <Button onClick={redirectToBoard}>Board</Button>
            <Button onClick={redirectToSaved}>Saved</Button>
            <Button onClick={redirectToTaged}>Taged</Button>
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