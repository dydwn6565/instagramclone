import { Avatar } from '@mui/material';
import React from 'react'
import "./ExtendedMainModal.css"
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { BsDot } from "react-icons/bs";


import Icons from '../Icons';
import ImageHander from '../ImageHander';
import CommentHandler from '../CommentHandler';
function ExtendedMainModal({
  extendComment,
  like,
  addlikeButtonhandler,
  deletelikeButtonhandler,
  images,
  content,
  postid,
  commentList,
}) {
  return (
    <div>
      {console.log(commentList)}
      <div className="extended-main-modal-backdrop" onClick={extendComment} />
      <div>
        <div className="extended-main-modal-main">
          <ImageHander images={images} />

          <div className="extended-main-modal-info">
            <div className="extended-main-modal-title">
              <Avatar></Avatar>
              <div className="extended-main-modal-title-name">Hyeoneee</div>
              <div className="extended-main-modal-title">
                <BsDot />
                Following
              </div>
              <MoreHorizOutlinedIcon className="extended-main-modal-dotdotdot-icon" />
            </div>
            <div className="hr"></div>
            <div>
              <div className="extended-main-modal-info-content">
                <Avatar></Avatar>
                <div>
                  <span> Hyeonee</span>
                  <span className="extended-main-modal-info-content-content">
                    {content}
                  </span>
                </div>
              </div>
            </div>
            <div className="extended-main-modal-info-content-container">
              <div className="extended-main-modal-info-content-comment">
                {commentList.map((comment, index) => (
                  <>
                    <div className="extended-main-modal-info-content-comment-inside">
                      <Avatar></Avatar>
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
              {/* <AiOutlineHeart className="extended-main-modal-info-heart-icon" /> */}
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
                <CommentHandler postid={postid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedMainModal