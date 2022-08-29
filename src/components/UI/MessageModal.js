import { Avatar, Button } from "@mui/material";
import React, { useRef, useState } from "react";

import Card from "./Card";
import "./MessageModal.css";
import { FaPhotoVideo } from "react-icons/fa";
import { generateBase64FromImage } from "../Utils/Image";
import LargeCard from "./LargeCard";
import { BiArrowBack } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import AddImageModal from "./AddImageModal";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const MessageModal = ({ title, message, onConfirm }) => {
  const [imageArray, setImageArray] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const [renderedImage, setRenderedImage] = useState([]);
  const [page, setPage] = useState(0);

  const [extendImageModal, setExtendImageModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [content, setContent] = useState("");
  const [location, setLocation] = useState({});
  const extendImageModalHandler = () => {
    setExtendImageModal((prev) => !prev);
  };
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFileArray(fileUploaded)
    const currentDate = new Date();

    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          setImageArray((current) => [
            ...current,
            b64 + "uploadedCurrentDate" + currentDate,
          ]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  function getLatAndLong() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }

  const moveToPageTwo = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    getLatAndLong();
    
    const formData = new FormData();
    formData.append("title", "test");
    formData.append("content", content);
    console.log(fileArray.length)
    if(fileArray.length ===undefined){
      formData.append("file",fileArray)
    }else{

      fileArray.map((file, index) => formData.append("file", file));
    }

    formData.append("lat", location.lat);
    formData.append("long", location.long);
    formData.append("userid", 2);
    console.log(formData)
    
    const ImageData = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
    console.log(ImageData.status);
  };

  const moveToPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const movePrevImage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const moveNextImage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const contentsHandler = (e) => {
    setContent(e.target.value);
  };


  return (
    <div>
      {console.log(fileArray)}
      <div className="modal-backdrop" onClick={onConfirm} />
      {(page === 0 || page === 1) && (
        <Card className="modal">
          <header className={page === 0 ? "modal-header" : ""}>
            {page === 0 && <h2>{title}</h2>}
            {page === 1 && (
              <>
                <BiArrowBack
                  className="image-priview-back-arrow"
                  onClick={moveToPrevPage}
                />
                <h2>Cutting</h2>
                <span
                  className="image-preview-editor-btn"
                  onClick={moveToPageTwo}
                >
                  Next
                </span>
              </>
            )}

            <div className="image-preview-first-page-header"></div>
          </header>
          {page === 0 && (
            <>
              <FaPhotoVideo className="modal-photo-video" />
              <div className="modal-content">
                <p>{message}</p>
              </div>
              <footer className="actions">
                <Button onClick={handleClick}>Select From Computer</Button>

                <input
                  ref={hiddenFileInput}
                  type="file"
                  onChange={handleChange}
                  name="image"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                />
              </footer>
            </>
          )}
          {page === 1 && (
            <>
              {imageArray && (
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
                      src={
                        imageArray[currentPage].split("uploadedCurrentDate")[0]
                      }
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
              {extendImageModal && (
                <AddImageModal
                  imageArray={imageArray}
                  extendImageModalHandler={extendImageModalHandler}
                  setImageArray={setImageArray}
                  setFileArray={setFileArray}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  renderedImage={renderedImage}
                  setRenderedImage={setRenderedImage}
                />
              )}
            </>
          )}
        </Card>
      )}
      {page === 2 && (
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
            {/* <span onClick={componentDidMount}>get location</span> */}
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
      )}
    </div>
  );
};

export default MessageModal;
