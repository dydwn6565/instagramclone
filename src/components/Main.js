import React, { useState } from 'react'
import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
import "./css/Main.css"
import MainPageModal from './UI/MainPageModal';


function Main({ setBlurBackground }) {
  const [mainPageModal, setMainPageModal] = useState(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  //   setBlurBackground(true)
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   setBlurBackground(false)
  // };

  const mainPageHandler = () =>{
    setMainPageModal(prevState => !prevState);
  }
  
  return (
    <div className="main">
      <div className="main-title-container">
        <div className="main-title">
          <Avatar className="main-avatar" />
          <span>Hyeoneee</span>
          <MoreHorizOutlinedIcon
            onClick={mainPageHandler}
            className="main-horiz-oulined-icon"
          />
        </div>
      </div>
      {/* <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="main-modal">
          <Button onClick={handleClose}>Close Child Modal</Button>

          <Button>Report</Button>
          <hr />
          <Button>Un Follow</Button>
          <hr />
          <Button>Move to the Board</Button>
          <hr />
          <Button>Link to.. </Button>
          <hr />
          <Button>Duplicate Link</Button>
          <hr />
          <Button>Scoop up</Button>
          <hr />
          <Button onClick={handleClose}>Cancle</Button>
          <hr />
        </Box>
      </Modal> */}

      {mainPageModal && <MainPageModal mainPageHandler={mainPageHandler} />}
      <div className="main-image-container">
        <img
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg"
          alt="mong"
          className="main-image"
        />
      </div>
      <div className="main-page-icons-container">
        <div className="main-page-icons">
          <FavoriteBorderOutlinedIcon />
          <ChatBubbleOutlineSharpIcon />
          <SendSharpIcon />
          <BookmarkBorderIcon className="main-page-bookmark-icon" />
        </div>
      </div>
      <div className="main-page-comment">
        <SentimentSatisfiedAltIcon />
        comments
      </div>
    </div>
  );
}

export default Main