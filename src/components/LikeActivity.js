import React from 'react'
import "./css/LikeActivity.css"
import { BiHeartCircle } from "react-icons/bi";
function LikeActivity({ postActivity }) {
  return (
    <div>
      <div className="like-backdrop-activity" onClick={postActivity} />
      <div className="like-activity">
        <BiHeartCircle className="heart-icon" />
        <div className="like-activity-comment">
          <div>Post Activity</div>
          <div>
            If someone else likes your post or leaves a comment, it will appear
            here.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeActivity