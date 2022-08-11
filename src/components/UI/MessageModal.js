import { Avatar, Button } from "@mui/material";
import React, { useRef, useState } from "react";

import Card from "./Card";
import "./MessageModal.css";
import { FaPhotoVideo } from "react-icons/fa";
import { generateBase64FromImage } from "../Utils/Image";
import LargeCard from "./LargeCard";
import { BiArrowBack } from "react-icons/bi";

const MessageModal = ({ title, message, onConfirm }) => {
  const [imageArray, setImageArray] = useState([]);

  const [page, setPage] = useState(0);
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    
    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          setImageArray((current) => [...current, b64]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const moveToPageTwo = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const uploadImage = () => {};

  const moveToPrevPage =()=>{
    setPage((prevPage) => prevPage -1);
  }

  const addImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", "test");
    formData.append("content", "test-content");
    formData.append("image", "image-test");

    const ImageData = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return (
    <div>
      <div className="modal-backdrop" onClick={onConfirm} />
      {(page === 0 || page === 1) && (
        <Card className="modal">
          <header className={page ===0 ? "modal-header":""}>
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

            <hr />
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
                <div className="preview-image-container">
                  <img
                    src={imageArray[0]}
                    alt="uploadedImage"
                    className="preview-image"
                  />
                </div>
              )}
            </>
          )}
        </Card>
      )}
      {page === 2 && (
        <LargeCard>
          <header>
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
              <img
                src={imageArray[0]}
                alt="uploadedImage"
                className="preview-image"
              />
            </div>
            <div className="preview-image-content">
              <div className="preview-image-content-avatar">
                <Avatar />
                <span className="preview-image-content-options">ivan4334</span>
              </div>
              <textarea
                placeholder="type here..."
                className="preview-image-textarea"
              />
              <div className="hr"></div>
              <div className="preview-image-content-options">Add location</div>
              <div className="hr"></div>
              <div className="preview-image-content-options">Accessibility</div>
              <div className="hr"></div>
              <div className="preview-image-content-options">
                Advance setting
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
