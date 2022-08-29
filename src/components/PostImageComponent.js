import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import ExtendedMainModal from "./UI/ExtendedMainModal";
import "./css/PostImageComponent.css";
function PostImageComponent({ images, content, id,postid }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [extendCommentModal, setExtendCommentModal] = useState(false);
  const [comment, setComment] = useState("");
  const [mainPageModal, setMainPageModal] = useState(false);
  const lastIndex = images.length - 1;

  const moveToNextpage = () => {
    setImageIndex((prev) => prev + 1);
  };
  const moveToPrevpage = () => {
    setImageIndex((prev) => prev - 1);
  };

  const extendComment = () => {
    setExtendCommentModal((prevState) => !prevState);
  };
  const commentHandler = (e) => {
    setComment(e);
  };

  const mainPageHandler = () => {
    setMainPageModal((prevState) => !prevState);
  };

  const addComment =() =>{
    console.log(comment);
    try {
      fetch("http://localhost:8080/add/postcomment", {
        method: "POST",
        body: JSON.stringify({ comment: comment, userid: 3, postid: postid }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div key={id} className="main">
        <div className="main-title-container">
          <div className="main-title">
            <Avatar className="main-avatar" />
            <span>Hyeoneee</span>
            <MoreHorizOutlinedIcon
              onClick={mainPageHandler}
              className="main-horiz-oulined-icon"
            />
            {mainPageModal && (
              <mainPageModal mainPageHandler={mainPageHandler} />
            )}
          </div>
        </div>
        <div>
          <div className="main-image-and-icons">
            <img
              src={"data:image/png;base64," + images[imageIndex]}
              alt="mong"
              className="main-image"
            />
          </div>
          <div className="image-dot-container">
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              onClick={moveToPrevpage}
            />
            {images &&
              images.map((image, index) => (
                <BsDot
                  key={image}
                  className={
                    index === imageIndex
                      ? "main-image-dot-icon blue"
                      : "main-image-dot-icon white"
                  }
                />
              ))}
            <IoIosArrowDroprightCircle
              className={
                imageIndex === lastIndex
                  ? "inactive-main-image-right-icon"
                  : "main-page-image-right-icon"
              }
              // style={{ marginTop: `${images[imageIndex].offsetHeight * 0.5}px` }}
              onClick={moveToNextpage}
            />
          </div>
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
          <div>{content}</div>
          <div onClick={extendComment}>See comments</div>
        </div>
        <hr />
        <div className="main-page-comment">
          <SentimentSatisfiedAltIcon />
          {/* <span> comments</span> */}
          <input
            type="text"
            placeholder="commnets"
            className="main-page-comment"
            onChange={(e) => commentHandler(e.target.value)}
          />
          {comment ==="" ?  <div className={ "comment-button-inactive"}  disabled>Post</div> :
          <div className={"comment-button-active"} onClick={addComment}>Post</div>
          }
          
          
        </div>
        {extendCommentModal && (
          <ExtendedMainModal extendComment={extendComment} />
        )}
      </div>
    </>
  );
}

export default PostImageComponent;
