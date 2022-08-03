import { Avatar } from '@mui/material';
import React from 'react'
import "./ExtendedMainModal.css"
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
function ExtendedMainModal({ extendComment }) {
  return (
    <div>
      <div className="extended-main-modal-backdrop" onClick={extendComment} />
      <div>
        <div className="extended-main-modal-main">
          <div className="extended-main-modal-img">
            <img
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg"
              alt="mong"
            />
          </div>

          <div className="extended-main-modal-info">
            <div className="extended-main-modal-title">
              <Avatar></Avatar>
              <div>Hyeoneee</div>
              <div className="extended-main-modal-title">
                <BsDot />
                Following
              </div>
              <MoreHorizOutlinedIcon className="extended-main-modal-dotdotdot-icon" />
            </div>
            <div className="hr"></div>
            <div>
              <div className="extended-main-modal-info-content">
                <Avatar></Avatar>
                <div>
                  <span>Hyeonee</span>
                  <span>
                    the0v #HondaCelebrationOfLight: #Japan jp #EnglishBay
                    #Fireworks #July2022 #Summer #GoodTimes #Vancouver #BC
                    #Canada Ca
                  </span>
                </div>
              </div>
            </div>
            <div className="extended-main-modal-info-content-container">
              <div className="extended-main-modal-info-content">
                <Avatar></Avatar>
                <span>anabeatrix.x</span>
                <span>It was amazinggg</span>
              </div>
              <AiOutlineHeart className="extended-main-modal-info-heart-icon" />
            </div>
            <div className="extended-main-modal-info-bottom">
              <div className="hr"></div>
              <div className="main-page-icons-container">
                <div className="main-page-icons">
                  <FavoriteBorderOutlinedIcon className="main-page-icons" />
                  <ChatBubbleOutlineSharpIcon className="main-page-icons" />
                  <SendSharpIcon className="main-page-icons" />
                  <BookmarkBorderIcon className="extended-main-modal-book-icon" />
                </div>
              </div>
              <div className="extended-main-modal-info-content-comment">
                <strong> fami_beauty_fami</strong> and{" "}
                <strong>many people</strong> like this posts
              </div>
              <div className="extended-main-modal-info-content-comment date">
                July 25
              </div>
              <div className="hr"></div>
              <div className="extended-main-modal-info-comment">
                <SentimentSatisfiedAltIcon />
                <div> comments</div>
                <span className="post-bt">post</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedMainModal