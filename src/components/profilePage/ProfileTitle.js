import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "../profilePage/ProfileTitle.css";
import BrightnessLowRoundedIcon from "@mui/icons-material/BrightnessLowRounded";
import { Link } from "react-router-dom";
import ProfileEditModal from "../Modals/ProfileEditModal";
function ProfileTitle() {
  const [profileEditModal,setProfileEditModal] = useState(false);

  const eventProfileEditModal =() =>{
    setProfileEditModal((prev)=>!prev)
  }
  return (
    <>
      <div className="profile-title">
        <Avatar className="profile-avatar" />
        <div className="profile-title-info">
          <div className="profile-title-info-upper-container">
            <span className="profile-name">ivan4334 </span>
            <span>
              <Link to="/accounts/edit">
                <button className="profile-edit-btn"> edit profile </button>
              </Link>
            </span>
            <span>
              <BrightnessLowRoundedIcon onClick={eventProfileEditModal} />
            </span>
          </div>
          {profileEditModal && (
            <ProfileEditModal eventProfileEditModal={eventProfileEditModal} />
          )}
          <div className="profile-title-user-info">
            <span>Board 0</span>
            <span>Follower 31 </span>
            <span>Follow 43</span>
          </div>
          <div className="profile-title-user-name">Ivan yongju Lee</div>
        </div>
      </div>
    </>
  );
}

export default ProfileTitle;
