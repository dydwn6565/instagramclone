import { Avatar } from "@mui/material";
import React from "react";
import "./css/ProfileTitle.css";
import BrightnessLowRoundedIcon from "@mui/icons-material/BrightnessLowRounded";
import { Link } from "react-router-dom";
function ProfileTitle() {
  
  return (
    <>
      <div className="profile-title">
        <Avatar className="profile-avatar" />
        <div className="profile-title-info">
          <div>
            <span>ivan4334 </span>
            <span>
              <Link to="/accounts/edit">
                <button > edit profile </button>
              </Link>
            </span>
            <span>
              <BrightnessLowRoundedIcon />
            </span>
          </div>
          <div>
            <span>Board 0</span>
            <span>Follower 31 </span>
            <span>Follow 43</span>
          </div>
          <div>Ivan yongju Lee</div>
        </div>
      </div>
    </>
  );
}

export default ProfileTitle;
