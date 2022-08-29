import React, { useState } from 'react'
import { BsDot } from 'react-icons/bs';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './css/PostImageComponent.css'
function PostImageComponent({images}) {
    const [imageIndex,setImageIndex] = useState(0);
    
    const lastIndex = images.length-1;
    console.log(lastIndex)

    const moveToNextpage = () =>{
        
        setImageIndex((prev)=> prev+1)
    }
    const moveToPrevpage = () => {
      setImageIndex((prev) => prev - 1);
    };
    
  return (
    <>
      {console.log(images[0].offsetWidth)}
      <IoIosArrowDropleftCircle
        className={
          imageIndex !== 0
            ? "main-page-image-left-icon"
            : "inactive-main-page-image-left-icon"
        }
        onClick={moveToPrevpage}
      />

      <div>
        <div className="main-image-and-icons">
          <img
            src={"data:image/png;base64," + images[imageIndex]}
            alt="mong"
            className="main-image"
          />
        </div>
        <div className="image-dot-container">
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
        </div>
      </div>

      <IoIosArrowDroprightCircle
        className={
          imageIndex === lastIndex
            ? "inactive-main-image-right-icon"
            : "main-page-image-right-icon"
        }
        // style={{ marginTop: `${images[imageIndex].offsetHeight * 0.5}px` }}
        onClick={moveToNextpage}
      />
    </>
    
  );
}

export default PostImageComponent
