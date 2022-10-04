import React from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
function MessageModalSecondPage({ imageArray ,currentPage,movePrevImage,extendImageModalHandler,moveNextImage}) {
  return (
    <div>
      {imageArray[currentPage] !==undefined && (
        <>
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
            <div className="copy-out-line-background">
              <IoCopyOutline
                className="preview-image-multiple-image-icon"
                onClick={extendImageModalHandler}
              />
            </div>
            <IoIosArrowDroprightCircle
              className={
                currentPage === imageArray.length - 1
                  ? "inactive-image-right-icon"
                  : "preview-image-right-icon"
              }
              onClick={moveNextImage}
            />
          </div>
          <div className="preview-image-dot-icons-container">
            {imageArray.map((dot, index) =>
              index === currentPage ? (
                <BsDot className="preview-image-dot-icon blue" />
              ) : (
                <BsDot className="preview-image-dot-icon white" />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MessageModalSecondPage