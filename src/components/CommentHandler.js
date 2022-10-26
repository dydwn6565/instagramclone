import React, { useState } from 'react'
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
function CommentHandler({ postid, userid, setCommentUpdated }) {
  const [comment, setComment] = useState("");
  const commentHandler = (e) => {
    setComment(e);
  };
  const addComment = async () => {
    console.log(comment);
    try {
      await fetch("https://instagramserver1.herokuapp.com/add/postcomment", {
        method: "POST",
        body: JSON.stringify({
          comment: comment,
          userid: userid,
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
      setCommentUpdated("updated");
      setComment("");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="main-page-comment">
      <SentimentSatisfiedAltIcon />
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
      )}
    </div>
  );
}

export default CommentHandler