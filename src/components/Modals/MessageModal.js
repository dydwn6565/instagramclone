import React, { useRef, useState } from "react";
import Card from "./Card";
import "./MessageModal.css";

import { generateBase64FromImage } from "../Utils/Image";
import { BiArrowBack } from "react-icons/bi";
import AddImageModal from "./AddImageModal";

import MessageModalFirstPage from "./MessageModalFirstPage";
import MessageModalSecondPage from "./MessageModalSecondPage";
import MessageModalLastPage from "./MessageModalLastPage";
import { Link } from "react-router-dom";

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
  const clicktoMain = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFileArray(fileUploaded);
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

  const resetArrayes = () => {
    setImageArray([]);
    setFileArray([]);
  };
  const moveToPageTwo = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    getLatAndLong();

    const formData = new FormData();
    formData.append("title", "test");
    formData.append("content", content);

    if (fileArray.length === undefined) {
      formData.append("file", fileArray);
    } else {
      fileArray.map((file, index) => formData.append("file", file));
    }

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    formData.append("lat", location.lat);
    formData.append("long", location.long);
    formData.append("userid", userInfo.id);

    const ImageData = await fetch(
      "https://instagramserver1.herokuapp.com/post",
      // "http://localhost:8080/post",
      {
        method: "POST",

        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "POST, GET, OPTIONS, DELETE, PUT, PATCH",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Origin, Contect-Type, x-requdsted-with, Authorization",

          // "Content-type": "application/json; charset=UTF-8",
        },
        body: formData,
      }
    );

    window.location.href = "/";
  };

  const moveToPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    if (page === 1) {
      resetArrayes();
    }
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
      <div className="modal-backdrop" onClick={onConfirm} />
      <Link ref={clicktoMain} to="/" />
      {page === 0 && (
        <div className="post-modal">
          <header className={page === 0 ? "modal-header" : ""}>
            {page === 0 && <div>{title}</div>}

            <div className="image-preview-first-page-header" />
          </header>
          {page === 0 && (
            <MessageModalFirstPage
              message={message}
              handleClick={handleClick}
              hiddenFileInput={hiddenFileInput}
              handleChange={handleChange}
            />
          )}
        </div>
      )}

      {page === 1 && (
        <>
          <div className="post-modal-second-page">
            <div className="modal-second-page-header">
              <BiArrowBack
                className="image-priview-back-arrow"
                onClick={moveToPrevPage}
              />
              <div>Cutting</div>
              <div className="image-preview-editor-btn" onClick={moveToPageTwo}>
                Next
              </div>
            </div>

            <MessageModalSecondPage
              imageArray={imageArray}
              currentPage={currentPage}
              setPage={setPage}
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
          </div>
        </>
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
