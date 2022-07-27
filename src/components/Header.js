import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import "../components/css/Header.css"
import { Box,  ButtonGroup,Modal } from '@mui/material';

import MessageModal from './UI/MessageModal';

function Header({ setBlurBackground }) {
  const [open, setOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setBlurBackground(true)
  };
  const handleClose = () => {
    setOpen(false);
    setBlurBackground(false)
  };

  const redirectToProfile =()=> window.location.href="/id"

  const redirectToHome = () => {
    window.location.href = "/";
  };

  const redirectToMyMessage = () => (window.location.href = "/myMessage");

  const redirectToExplore = () => (window.location.href = "/explore");

  
  const createNewPost =() =>{
  
        setOpenModal(prevState => !prevState)
  }
  return (
    <>
      <div className="header">
        <span className="instagram-title">Instagram</span>
        <div className="header-search-bar">
          <form>
            <IconButton
              className="search-icon"
              type="submit"
              aria-label="search"
            >
              <SearchIcon style={{ fill: "grey" }} />
            </IconButton>
            <TextField
              id="search-bar"
              className="text"
              variant="outlined"
              placeholder="     Search..."
              size="small"
            ></TextField>
          </form>
        </div>
        <div className="icon-list">
          <HomeIcon className="homeIcon" onClick={redirectToHome} />
          <SendOutlinedIcon
            className="myMessage"
            onClick={redirectToMyMessage}
          />
          <AddBoxOutlinedIcon onClick={createNewPost} />

          <ExploreOutlinedIcon
            className="explore"
            onClick={redirectToExplore}
          />
          <FavoriteBorderOutlinedIcon />
          <Avatar onClick={handleOpen} />
        </div>
        <Modal
          className="header-modal"
          hideBackdrop
          open={open}
          onClose={handleClose}
          
        >
          <Box className="header-modal-box" sx={{ width: 200 }}>
            
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              <p onClick={redirectToProfile}>Profile</p>
              <p>Saved</p>
              <p>Setting</p>
              <p>Change account</p>
              <div className="modal-logout"></div>
              <div onClick={handleClose}>Log Out</div>
            </ButtonGroup>
          </Box>
        </Modal>
        {openModal && (
          <MessageModal title="Create New Post" message="Drop your pitcure and videos to here" onConfirm={createNewPost} />
        )}
      </div>
    </>
  );
}

export default Header