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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function Main() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    
    <div className="main">
      <div className="main-title-container">
        <div className="main-title">
          <Avatar className="main-avatar" />
          <span>Hyeoneee</span>
          <MoreHorizOutlinedIcon
            onClick={handleOpen}
            className="main-horiz-oulined-icon"
          />
        </div>
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button>Report</Button>
            <Button>Un Follow</Button>
            <Button>Move to the Board</Button>
            <Button>Link to.. </Button>
            <Button>Duplicate Link</Button>
            <Button>Scoop up</Button>
            <Button onClick={handleClose}>Cancle</Button>
          </ButtonGroup>
        </Box>
      </Modal>
      <div className="main-image-container">
        <img
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg"
          alt="mong"
          className="main-image"
        />
      </div>
      <FavoriteBorderOutlinedIcon />
      <ChatBubbleOutlineSharpIcon />
      <SendSharpIcon />
      <BookmarkBorderIcon />
      <div>
        <SentimentSatisfiedAltIcon />
        comments
      </div>
    </div>
  );
}

export default Main