import React, { useEffect, useState } from "react";


import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import ExtendedMainModal from "./Modals/ExtendedMainModal";
import MainPageModal from "./Modals/MainPageModal"
import "./css/PostImageComponent.css";
import Icons from "./Icons";
import ImageHander from "./ImageHander";
import CommentHandler from "./CommentHandler";
function PostImageComponent({ images, content, id, postid }) {
  
  const [extendCommentModal, setExtendCommentModal] = useState(false);
  const [commentList, setCommentList] = useState("");
  const [mainPageModal, setMainPageModal] = useState(false);
  const [like, setLike] = useState(true);
  // const lastIndex = images.length - 1;
  // const moveToNextpage = () => {
  //   setImageIndex((prev) => prev + 1);
  // };
  // const moveToPrevpage = () => {
  //   setImageIndex((prev) => prev - 1);
  // };
  useEffect(() => {
    const getPostComment = async () => {
      const fetchedData = await fetch(
        `http://localhost:8080/get/postcomment/${postid}`,
        {
          method: "GET",
        }
      );
      if (fetchedData.status === 201) {
        const commentsList = await fetchedData.json();
        // console.log(commentsList);
        setCommentList(commentsList);
      }
    };
    getPostComment();
  }, []);
  const extendComment = () => {
    setExtendCommentModal((prevState) => !prevState);
  };


  const mainPageHandler = () => {
    setMainPageModal((prevState) => !prevState);
  };

  // const addComment = () => {
  //   // console.log(comment);
  //   try {
  //     fetch("http://localhost:8080/add/postcomment", {
  //       method: "POST",
  //       body: JSON.stringify({ comment: comment, userid: 3, postid: postid }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const addlikeButtonhandler = () => {
    setLike((prev) => !prev);
    try {
      fetch("http://localhost:8080/add/postlike", {
        method: "POST",
        body: JSON.stringify({
          userid: 3,
          postid: postid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {}
  };

  const deletelikeButtonhandler = () => {
    setLike((prev) => !prev);
    try {
      fetch("http://localhost:8080/delete/postlike", {
        method: "DELETE",
        body: JSON.stringify({
          userid: 3,
          postid: postid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {}
  };
  return (
    <>
      
      <div key={id} className="main">
        <div className="main-title-container">
          <div className="main-title">
            <div className="main-avatar-container">

            <Avatar className="main-avatar" />
            <span>Hyeoneee</span>
            </div>
            <div>

            <MoreHorizOutlinedIcon
              onClick={mainPageHandler}
              className="main-horiz-oulined-icon"
            />
            </div>
            {mainPageModal && (
              <MainPageModal mainPageHandler={mainPageHandler} />
            )}
          </div>
        </div>
        <ImageHander images={images} />
        {/* <div>
          <div className="main-image-and-icons">
            <img
              src={"data:image/png;base64," + images[imageIndex]}
              alt="mong"
              className="main-image"
            />
          </div>
          <div className="image-dot-container">
            <IoIosArrowDropleftCircle
              className={
                imageIndex !== 0
                  ? "main-page-image-left-icon"
                  : "inactive-main-page-image-left-icon"
              }
              onClick={moveToPrevpage}
            />
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
            <IoIosArrowDroprightCircle
              className={
                imageIndex === lastIndex
                  ? "inactive-main-image-right-icon"
                  : "main-page-image-right-icon"
              }
              // style={{ marginTop: `${images[imageIndex].offsetHeight * 0.5}px` }}
              onClick={moveToNextpage}
            />
          </div>
        </div> */}

        <div className="main-page-icons-container">
          <div className="main-page-icons">
            <Icons
              like={like}
              addlikeButtonhandler={addlikeButtonhandler}
              deletelikeButtonhandler={deletelikeButtonhandler}
            />
          </div>
        </div>
        <div className="main-page-info">
          <div>lovely_min08 likes </div>
          <div>{content}</div>
          <div className="see-comments" onClick={extendComment}>See comments</div>
        </div>
        <hr />
        {/* <div className="main-page-comment"> */}
        <CommentHandler postid={postid} />
        {/* <SentimentSatisfiedAltIcon />
          <span> comments</span>
          <input
            type="text"
            placeholder="commnets"
            className="main-page-comment"
            onChange={(e) => commentHandler(e.target.value)}
          />
          {comment === "" ? (
            <div className={"comment-button-inactive"} disabled>
              Post
            </div>
          ) : (
            <div className={"comment-button-active"} onClick={addComment}>
              Post
            </div>
          )} */}
        {/* </div> */}
        {extendCommentModal && (
          <ExtendedMainModal
            extendComment={extendComment}
            like={like}
            addlikeButtonhandler={addlikeButtonhandler}
            deletelikeButtonhandler={deletelikeButtonhandler}
            images={images}
            content={content}
            postid={postid}
            commentList={commentList}
          />
        )}
      </div>
    </>
  );
}

export default PostImageComponent;
