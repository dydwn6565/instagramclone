import React, { useEffect, useState } from "react";


import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import ExtendedMainModal from "./Modals/ExtendedMainModal";
import MainPageModal from "./Modals/MainPageModal"
import "./css/PostImageComponent.css";
import Icons from "./Icons";
import ImageHander from "./ImageHander";
import CommentHandler from "./CommentHandler";
function PostImageComponent({ images, content,userid, id, postid }) {
  
  const [extendCommentModal, setExtendCommentModal] = useState(false);
  const [commentList, setCommentList] = useState("");
  const [mainPageModal, setMainPageModal] = useState(false);
  const [postUser,setPostUser]= useState();
  const [like, setLike] = useState(true);
  const [commentUpdated,setCommentUpdated] = useState("");
  useEffect(() => {
    const getPostComment = async () => {
      
      const fetchedData = await fetch(
        `https://instagramserver1.herokuapp.com/get/postcomment/${postid}`,
        // `http://localhost:8080/get/postcomment/${postid}`,

        
        {
          method: "GET",
        }
      );
      if (fetchedData.status === 201) {
        const commentsList = await fetchedData.json();

        setCommentList(commentsList);
      }
    };
    getPostComment();
  }, [commentUpdated]);

  useEffect(()=>{
    
    const getPostUser = async () => {
       const fetchedData = await fetch(
         `https://instagramserver1.herokuapp.com/users/${userid}`,
          // `http://localhost:8080/users/${userid}`,
         {
           method: "GET",
         }
       );
       if (fetchedData.status === 200) {
         const postUserInfo = await fetchedData.json();
          
         setPostUser(postUserInfo);
       }
     };
     getPostUser();
  },[id])

  const extendComment = () => {
    setExtendCommentModal((prevState) => !prevState);
  };


  const mainPageHandler = () => {
    setMainPageModal((prevState) => !prevState);
  };


  const addlikeButtonhandler = () => {
    setLike((prev) => !prev);
    try {
      fetch("https://instagramserver1.herokuapp.com/add/postlike", {
        // fetch("http://localhost:8080/add/postlike", {
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
      fetch("https://instagramserver1.herokuapp.com/delete/postlike", {
        // fetch("tp://localhost:8080/delete/postlike", {
        method: "DELETE",
        body: JSON.stringify({
          userid: 3,
          postid: postid,
        }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "POST, GET, OPTIONS, DELETE, PUT, PATCH",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Origin, Contect-Type, x-requdsted-with, Authorization",

          "Content-type": "application/json; charset=UTF-8",
        },
        
      });
    } catch (error) {}
  };
  
  return (
    <>
      <div className="main">
        <div className="main-title-container">
          <div className="main-title">
            <div className="main-avatar-container">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU"
                className="main-avatar"
              />
              <span>{postUser?.username}</span>
            </div>
            <div>
              <MoreHorizOutlinedIcon
                onClick={mainPageHandler}
                className="main-horiz-oulined-icon"
              />
            </div>
          </div>
        </div>
        {mainPageModal && <MainPageModal mainPageHandler={mainPageHandler} />}
        <ImageHander images={images} />

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
          <div className="see-comments" onClick={extendComment}>
            See comments
          </div>
        </div>
        <hr />

        <CommentHandler postid={postid} />

        {extendCommentModal && (
          <ExtendedMainModal
            extendComment={extendComment}
            like={like}
            addlikeButtonhandler={addlikeButtonhandler}
            deletelikeButtonhandler={deletelikeButtonhandler}
            images={images}
            content={content}
            postid={postid}
            postUser={postUser}
            commentList={commentList}
            setCommentUpdated={setCommentUpdated}
          />
        )}
      </div>
    </>
  );
}

export default PostImageComponent;
