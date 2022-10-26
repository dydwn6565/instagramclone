import React, { useEffect, useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import LargeCard from "./LargeCard";
import { Avatar } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
function MessageModalLastPage({moveToPrevPage,uploadImage,currentPage,movePrevImage,imageArray,moveNextImage,contentsHandler}) {
  const [username,setUsername] = useState();
  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setUsername(userInfo.username)
  },[])
  return (
    <div>
      <LargeCard>
        <header className="image-preview-page-two-head">
          <BiArrowBack
            className="image-priview-back-arrow"
            onClick={moveToPrevPage}
          />

          <div>Create new post</div>

          <span className="image-preview-share-btn" onClick={uploadImage}>
            Share
          </span>
        </header>
        <div className="image-preview-first-page-header" />
        <div className="image-preveiw-last-page">
          <div className="preview-image-container">
            <IoIosArrowDropleftCircle
              className={
                currentPage !== 0
                  ? "last-preview-image-left-icon"
                  : "inactive-image-left-icon"
              }
              onClick={movePrevImage}
            />
            <img
              src={imageArray[currentPage].split("uploadedCurrentDate")[0]}
              alt="uploadedImage"
              className="preview-lastpage-image"
            />
            <IoIosArrowDroprightCircle
              className={
                currentPage === imageArray.length - 1
                  ? "inactive-image-right-icon"
                  : "last-preview-image-right-icon"
              }
              onClick={moveNextImage}
            />
            <div className="preview-image-dot-icons-second-page-container">
              {imageArray.map((dot, index) =>
                index === currentPage ? (
                  <BsDot
                    key={dot + index}
                    className="preview-image-dot-icon blue"
                  />
                ) : (
                  <BsDot
                    key={dot + index}
                    className="preview-image-dot-icon white"
                  />
                )
              )}
            </div>
          </div>
          <div className="preview-image-content">
            <div className="preview-image-content-avatar">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" />
              <span className="preview-image-content-options">{username}</span>
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