import React, { useState } from 'react'
import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import "./css/Main.css"
import MainPageModal from './UI/MainPageModal';
import ExtendedMainModal from './UI/ExtendedMainModal';
import { ConstructionOutlined } from '@mui/icons-material';


function Main({ setBlurBackground }) {
  const [mainPageModal, setMainPageModal] = useState(false);

  const [extendCommentModal,setExtendCommentModal] = useState(false);

  const mainPageHandler = () =>{
    setMainPageModal(prevState => !prevState);
  }
  
  const extendComment =() =>{
    
    setExtendCommentModal(prevState =>!prevState);
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
          <FavoriteBorderOutlinedIcon className="main-page-icons" />
          <ChatBubbleOutlineSharpIcon className="main-page-icons" />
          <SendSharpIcon className="main-page-icons" />
          <BookmarkBorderIcon className="main-page-bookmark-icon" />
        </div>
      </div>
      <div className="main-page-info">
        <div>lovely_min08 likes </div>
        <div>
          the0v #HondaCelebrationOfLight: #Japan jp #EnglishBay #Fireworks
          #July2022 #Summer #GoodTimes #Vancouver #BC #Canada Ca
        </div>
        <div onClick={extendComment}>See comments</div>
      </div>
      <hr />
      <div className="main-page-comment">
        <SentimentSatisfiedAltIcon />
        <span> comments</span>
        <div className="comment-button">Post</div>
      </div>
      {extendCommentModal && (
        <ExtendedMainModal extendComment={extendComment} />
      )}
    </div>
  );
}

export default Main