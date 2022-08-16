import React, {  useRef, useState } from "react";
import "./AddImageModal.css";
import { BsPlusCircle } from "react-icons/bs";
import { generateBase64FromImage } from "../Utils/Image";
import { BsXCircle } from "react-icons/bs";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function AddImageModal({
  extendImageModalHandler,
  imageArray,
  setImageArray,
  setCurrentPage,
  currentPage,
  renderedImage,
  setRenderedImage,
}) {
  const hiddenFileInput = useRef(null);

  const [smallImageCurrentPage, setSmallImageCurrentPage] = useState(0);
  const [smallImageArray, setSmallImageArray] = useState([]);
  const imageHandler = () => {
    if (imageArray.length < 4) {
      
      for (let image of imageArray) {
        setRenderedImage((current) => [...current, image]);
      }
    } else {
      console.log("hit else");
      for (let i = smallImageCurrentPage; i < smallImageCurrentPage + 4; i++) {
        setRenderedImage((current) => [...current, imageArray[i]]);
      }
    }
  };
  useState(() => {
    imageHandler();
  }, [smallImageCurrentPage]);

  const deleteImageFromArray = (index) => {
    

    const filteredImage = imageArray.filter((image) =>{
      
      return imageArray.indexOf(image) !== index;

    })
    setImageArray(filteredImage);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          setImageArray((current) => [...current, b64]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const smallImageMovetoRight = () => {
    console.log("click");
    setSmallImageCurrentPage((current) => current + 1);
    imageHandler();
    console.log(smallImageCurrentPage);
  };

  return (
    <>
      <div
        className="extended-image-modal-backdrop"
        onClick={extendImageModalHandler}
      ></div>

      <div
        className="extended-image-modal"
        style={{
          maxWidth: `25vw`,
          marginLeft:
            imageArray.length < 4 ? `${20 - imageArray.length * 3.5}%` : "5%",
        }}
      >
        <IoIosArrowDropleftCircle
          className={
            smallImageCurrentPage !== 0
              ? "preview-small-image-left-icon"
              : "inactive-small-image-left-icon"
          }
          onClick={() => setSmallImageCurrentPage((current) => current - 1)}
        />
        {imageArray.length < 4 ? (
          imageArray.map((img, index) => (
            <>
              <img
                src={img.split("uploadedCurrentDate")[0]}
                key={img}
                alt="smallImage"
                className={
                  smallImageCurrentPage === index
                    ? "extended-small-image selected-image"
                    : "extended-small-image"
                }
              />

              <BsXCircle
                className="extended-small-image-cross-icon"
                values={index}
                onClick={() => deleteImageFromArray(index)}
              />
            </>
          ))
        ) : (
          <>
            <img
              src={
                imageArray[smallImageCurrentPage].split(
                  "uploadedCurrentDate"
                )[0]
              }
              alt="smallImage"
              className={
                imageArray.indexOf(imageArray[smallImageCurrentPage]) ===
                smallImageCurrentPage
                  ? "extended-small-image selected-image"
                  : "extended-small-image"
              }
            />

            <BsXCircle
              className="extended-small-image-cross-icon"
              values={smallImageCurrentPage}
              onClick={() => deleteImageFromArray(smallImageCurrentPage)}
            />

            <img
              src={
                imageArray[smallImageCurrentPage + 1].split(
                  "uploadedCurrentDate"
                )[0]
              }
              alt="smallImage"
              className={
                imageArray.indexOf(imageArray[smallImageCurrentPage+1]) ===
                smallImageCurrentPage
                  ? "extended-small-image selected-image"
                  : "extended-small-image"
              }
            />

            <BsXCircle
              className="extended-small-image-cross-icon"
              values={smallImageCurrentPage}
              onClick={() => deleteImageFromArray(smallImageCurrentPage + 1)}
            />

            <img
              src={
                imageArray[smallImageCurrentPage + 2].split(
                  "uploadedCurrentDate"
                )[0]
              }
              alt="smallImage"
              className={
                imageArray.indexOf(imageArray[smallImageCurrentPage+2]) ===
                smallImageCurrentPage
                  ? "extended-small-image selected-image"
                  : "extended-small-image"
              }
            />

            <BsXCircle
              className="extended-small-image-cross-icon"
              values={smallImageCurrentPage}
              onClick={() => deleteImageFromArray(smallImageCurrentPage + 2)}
            />

            <img
              src={
                imageArray[smallImageCurrentPage + 3].split(
                  "uploadedCurrentDate"
                )[0]
              }
              alt="smallImage"
              className={
                imageArray.indexOf(imageArray[smallImageCurrentPage+3]) ===
                smallImageCurrentPage
                  ? "extended-small-image selected-image"
                  : "extended-small-image"
              }
            />

            <BsXCircle
              className="extended-small-image-cross-icon"
              values={smallImageCurrentPage}
              onClick={() => deleteImageFromArray(smallImageCurrentPage + 3)}
            />
          </>
        )}
        <IoIosArrowDroprightCircle
          className={
            imageArray.length < 4
              ? smallImageCurrentPage === imageArray.length - 1
                ? "inactive-small-image-right-icon"
                : "preview-small-image-right-icon"
              : smallImageCurrentPage + 3 === imageArray.length - 1
              ? "inactive-small-image-right-icon"
              : "preview-small-image-right-icon"
          }
          style={{ marginLeft: `${65 + imageArray.length * 3}%` }}
          onClick={() => setSmallImageCurrentPage((current) => current + 1)}
        />
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
    </>
  );
}

export default AddImageModal;
