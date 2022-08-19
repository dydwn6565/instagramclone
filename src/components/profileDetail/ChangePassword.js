import React from "react";
import Header from "../Header";
import AccountEditSide from "./AccountEditSide";
import "./ChangePassword.css";
import { Avatar } from "@mui/material";
import ProfileFooter from "../profilePage/ProfileFooter";
function ChangePassword() {
  return (
    <div>
      <Header />
      <div className="change-password-container">
        <AccountEditSide />
        <div className="change-password-inside-container">
          <div className="change-password-avatar">
            <Avatar />
            <div>ivan4334</div>
          </div>
          <div className="change-password-password">
            <div className="change-password-previous-title">
              Previous Password
            </div>
            <input type="text" />
          </div>
          <div className="change-password-password">
            <div className="change-password-new-password-title">
              New Password
            </div>
            <input type="text" />
          </div>
          <div className="change-password-password">
            <div className="change-password-new-password-confirm">
              New Password Confirm
            </div>
            <input type="text" />
          </div>
          <button className="change-password-button">Change Password</button>
          <div className="change-password-link-to-change-password">
            Do you forget your password?
          </div>
        </div>
      </div>
      <div className="resize-footer">
        <ProfileFooter />
      </div>
    </div>
  );
}

export default ChangePassword;
