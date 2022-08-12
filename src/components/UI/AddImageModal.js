import React, { useCallback, useRef, useState } from "react";
import "./AddImageModal.css";
import { BsPlusCircle } from "react-icons/bs";
import { generateBase64FromImage } from "../Utils/Image";


function AddImageModal({
  extendImageModalHandler,
  imageArray,
  setImageArray,
  setCurrentPage,
  currentPage
}) {
  const hiddenFileInput = useRef(null);

  const renderedImage = [];

  useState(() => {
    console.log("hit");
    const imageHandler = () => {
      if (imageArray.length < 4) {
        for (let image of imageArray) {
          renderedImage.push(image);
        }
      } else {
        for (let i = currentPage; i < currentPage + 4; i++) {
          renderedImage.push(imageArray[i]);
        }
      }
    };
    imageHandler();
  }, [imageArray]);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          setImageArray((current) => [...current, b64]);
          //   setPage((prevPage) => prevPage + 1);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <div
        className="extended-image-modal-backdrop"
        onClick={extendImageModalHandler}
        // style={{width:`${10 *(imageArray.length*0.6)}vw`, marginLeft: `${18-imageArray.length*3.5}%`}}
        style={{
          maxWidth: `25vw`,
          marginLeft: `${18 - imageArray.length * 3.5}%`,
        }}
      >
        {imageArray.map((img) => (
          <>
            <img
              src={img}
              key={img.name}
              alt="smallImage"
              className="extended-small-image"
            />
          </>
        ))}
        <input
          ref={hiddenFileInput}
          type="file"
          onChange={handleChange}
          name="image"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
        <div>
          <BsPlusCircle onClick={handleClick} className="image-plus-button" />
        </div>
      </div>
    </div>
  );
}

export default AddImageModal;
