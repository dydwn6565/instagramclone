import React, { createRef, useEffect, useRef, useState } from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BsDot } from "react-icons/bs";
import "./css/ImageHander.css"
function ImageHander({ images,extendedIconsSize }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageHeight,setImageHeight] = useState();
    const imageRef= createRef();
    const lastIndex = images?.length - 1;
      const moveToNextpage = () => {
        setImageIndex((prev) => prev + 1);
      };
      const moveToPrevpage = () => {
        setImageIndex((prev) => prev - 1);
      };
      console.log(images)

      useEffect(() => {
        const clientHeight = imageRef.current.clientHeight;
        setImageHeight(clientHeight);
        console.log(clientHeight);
      }, [imageIndex]);
  return (
    <div>
      <div>
        <div className="main-image-and-icons">
          <img
            src={images[imageIndex]}
            alt=""
            className="main-image"
            ref={imageRef}
          />
          {/* <img
            src={"data:image/png;base64," + images[imageIndex]}
            alt="mong"
            className="main-image"
          /> */}
        </div>

        <div className="image-dot-container">
          {extendedIconsSize === true ? (
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-extended-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              style={{ marginTop: -imageHeight / 2 }}
              onClick={moveToPrevpage}
            />
          ) : (
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              style={{ marginTop: -imageHeight / 2 }}
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
              style={{ marginTop: -imageHeight / 2 }}
              onClick={moveToNextpage}
            />
          ) : (
            <IoIosArrowDroprightCircle
              className={
                imageIndex === lastIndex
                  ? "inactive-main-image-right-icon"
                  : "main-page-image-right-icon"
              }
              style={{ marginTop: -imageHeight / 2 }}
              onClick={moveToNextpage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageHander