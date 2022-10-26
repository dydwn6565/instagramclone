import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import "./ExtendedMainModal.css"
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { BsDot } from "react-icons/bs";


import Icons from '../Icons';
import ImageHander from '../ImageHander';
import CommentHandler from '../CommentHandler';
import { useEffect } from 'react';
function ExtendedMainModal({
  extendComment,
  like,
  addlikeButtonhandler,
  deletelikeButtonhandler,
  images,
  content,
  postid,
  commentList,
  postUser,
}) 

{
  const [userInformation, setUserInformation] = useState();
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){

      const userInfo = localStorage.getItem("userInfo")
      setUserInformation(JSON.parse(userInfo))
    }
  },[])
  // console.log(userInformation)
  return (
    <div>
      <div className="extended-main-modal-backdrop" onClick={extendComment} />
      <div>
        <div className="extended-main-modal-main">
          <div className="extended-main-image">
            <ImageHander images={images} extendedIconsSize={true} />
          </div>

          <div className="extended-main-modal-info">
            <div className="extended-main-modal-title">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" />
              <div className="extended-main-modal-title-name">
                {postUser.username}
              </div>
              <div className="extended-main-modal-title">
                <BsDot />
                Following
              </div>
              <MoreHorizOutlinedIcon className="extended-main-modal-dotdotdot-icon" />
            </div>
            <div className="hr"></div>
            <div className="extended-main-modal-container">
              <div className="extended-main-modal-info-content">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" />
                <div>
                  <span> {postUser.username}</span>
                  <span className="extended-main-modal-info-content-content">
                    {content}
                  </span>
                </div>
              </div>

              <div className="extended-main-modal-info-content-container">
                <div className="extended-main-modal-info-content-comment">
                  {commentList.map((comment, index) => (
                    <>
                      <div key={comment+index }className="extended-main-modal-info-content-comment-inside">
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
                        <div>
                          <span
                            className="extended-main-modal-info-content-comment-inside-id "
                            key={comment.userid + index}
                          >
                            {comment.username}
                          </span>
                          <span>{comment.comment}</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="extended-main-modal-info-bottom">
              <div className="hr"></div>
              <div className="main-page-icons-container">
                <div className="main-page-icons">
                  <Icons
                    like={like}
                    addlikeButtonhandler={addlikeButtonhandler}
                    deletelikeButtonhandler={deletelikeButtonhandler}
                  />
                </div>
              </div>
              <div className="extended-main-modal-info-content-comment">
                <strong> fami_beauty_fami</strong> and{" "}
                <strong>many people</strong> like this posts
              </div>
              <div className="extended-main-modal-info-content-comment date">
                July 25
              </div>
              <div className="hr"></div>

              <div className="extended-main-modal-info-comment">
                <CommentHandler postid={postid} userid={userInformation?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedMainModal