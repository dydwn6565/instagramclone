import React, { useState } from 'react'
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
function CommentHandler({postid,userid}) {
    const [comment, setComment] = useState("");
    const commentHandler = (e) => {
      setComment(e);
    };
  const addComment = () => {
    console.log(comment);
    try {
      fetch("https://instagramserver1.herokuapp.com/add/postcomment", {
        method: "POST",
        body: JSON.stringify({
          comment: comment,
          userid: userid,
          postid: postid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
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