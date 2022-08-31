import React, { useRef, useState } from "react";
import Card from "./Card";
import "./MessageModal.css";

import { generateBase64FromImage } from "../Utils/Image";
import { BiArrowBack } from "react-icons/bi";
import AddImageModal from "./AddImageModal";

import MessageModalFirstPage from "./MessageModalFirstPage";
import MessageModalSecondPage from "./MessageModalSecondPage";
import MessageModalLastPage from "./MessageModalLastPage";

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
            <MessageModalFirstPage
              message={message}
              handleClick={handleClick}
              hiddenFileInput={hiddenFileInput}
              handleChange={handleChange}
            />
          )}
          {page === 1 && (
            <>
              <MessageModalSecondPage
                imageArray={imageArray}
                currentPage={currentPage}
                movePrevImage={movePrevImage}
                extendImageModalHandler={extendImageModalHandler}
                moveNextImage={moveNextImage}
              />

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
        <MessageModalLastPage
          moveToPrevPage={moveToPrevPage}
          uploadImage={uploadImage}
          currentPage={currentPage}
          movePrevImage={movePrevImage}
          imageArray={imageArray}
          moveNextImage={moveNextImage}
          contentsHandler={contentsHandler}
        />
        
      )}
    </div>
  );
};

export default MessageModal;
