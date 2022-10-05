import React from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import LargeCard from "./LargeCard";
import { Avatar } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
function MessageModalLastPage({moveToPrevPage,uploadImage,currentPage,movePrevImage,imageArray,moveNextImage,contentsHandler}) {
  return (
    <div>
      <LargeCard>
        <header className="image-preview-page-two-head">
          <BiArrowBack
            className="image-priview-back-arrow"
            onClick={moveToPrevPage}
          />

          <h2>Create new post</h2>
          <span className="image-preview-share-btn" onClick={uploadImage}>
            Share
          </span>
          
        </header>
        <div className="image-preveiw-last-page">
          <div className="preview-image-container">
            <IoIosArrowDropleftCircle
              className={
                currentPage !== 0
                  ? "preview-image-left-icon"
                  : "inactive-image-left-icon"
              }
              onClick={movePrevImage}
            />
            <img
              src={imageArray[currentPage].split("uploadedCurrentDate")[0]}
              alt="uploadedImage"
              className="preview-image"
            />
            <IoIosArrowDroprightCircle
              className={
                currentPage === imageArray.length - 1
                  ? "inactive-image-right-icon"
                  : "preview-image-right-icon"
              }
              onClick={moveNextImage}
            />
            <div className="preview-image-dot-icons-second-page-container">
              {imageArray.map((dot, index) =>
                index === currentPage ? (
                  <BsDot className="preview-image-dot-icon blue" />
                ) : (
                  <BsDot className="preview-image-dot-icon white" />
                )
              )}
            </div>
          </div>
          <div className="preview-image-content">
            <div className="preview-image-content-avatar">
              <Avatar />
              <span className="preview-image-content-options">ivan4334</span>
            </div>
            <textarea
              placeholder="type here..."
              className="preview-image-textarea"
              onChange={contentsHandler}
            />
            <div className="hr"></div>
            <div className="preview-image-content-options">
              Add location
              <BiMap className="preview-image-map-icon" />
            </div>
            <div className="hr"></div>
            <div className="preview-image-content-options">
              Accessibility
              <AiOutlineDown className="preview-image-down-arrow-icon" />
            </div>
            <div className="hr"></div>
            <div className="preview-image-content-options">
              Advance setting
              <AiOutlineDown className="preview-image-down-arrow-icon" />
            </div>
            <div className="hr"></div>
          </div>

          <div />
        </div>
      </LargeCard>
    </div>
  );
}

export default MessageModalLastPage