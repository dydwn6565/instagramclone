import React, { useState } from 'react'
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
function CommentHandler({ postid, userid, setCommentUpdated }) {
  const [comment, setComment] = useState("");
  const commentHandlers = (e) => {
    setComment(e);
  };
  const addComment = async () => {
    
    setComment((prevValue) => (prevValue = ""));
    try {
      const postComment = await fetch("https://instagramserver1.herokuapp.com/add/postcomment", {
      // const postComment = await fetch("http://localhost:8080/add/postcomment", {
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

      
      if (postComment.status === 201) {
        setCommentUpdated("updated")
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="main-page-comment">
      <div className="main-page-comment-inside">
        <SentimentSatisfiedAltIcon />
        <input
          value={comment}
          type="text"
          placeholder="commnets"
          className="main-page-comment"
          onChange={(e) => commentHandlers(e.target.value)}
        />
      </div>

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