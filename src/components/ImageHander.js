import React, { useState } from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BsDot } from "react-icons/bs";
import "./css/ImageHander.css"
function ImageHander({ images,extendedIconsSize }) {
    const [imageIndex, setImageIndex] = useState(0);
    const lastIndex = images.length - 1;
      const moveToNextpage = () => {
        setImageIndex((prev) => prev + 1);
      };
      const moveToPrevpage = () => {
        setImageIndex((prev) => prev - 1);
      };

  return (
    <div>
      <div>
        <div className="main-image-and-icons">
          <img
            src={"data:image/png;base64," + images[imageIndex]}
            alt="mong"
            className="main-image"
          />
        </div>

        <div className="image-dot-container">
          {extendedIconsSize === true ? (
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-extended-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              onClick={moveToPrevpage}
            />
          ) : (
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              onClick={moveToPrevpage}
            />
          )}
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

          {extendedIconsSize === true ? (
            <IoIosArrowDroprightCircle
              className={
                imageIndex === lastIndex
                  ? "inactive-main-image-right-icon"
                  : "main-extended-page-image-right-icon"
              }
              onClick={moveToNextpage}
            />
          ) : (
            <IoIosArrowDroprightCircle
              className={
                imageIndex === lastIndex
                  ? "inactive-main-image-right-icon"
                  : "main-page-image-right-icon"
              }
              onClick={moveToNextpage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageHander