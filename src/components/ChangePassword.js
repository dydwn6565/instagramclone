import React from 'react'
import Header from './Header'
import AccountEditSide from "./AccountEditSide";
import "../components/css/ChangePassword.css"
import { Avatar } from '@mui/material';
import AccountEditFooter from './AccountEditFooter';
function ChangePassword() {
  return (
    <div>
      <Header />
      <div className="change-password">
        <AccountEditSide />
        <div className="change-password-container">
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
            <div className="change-password-new-password-title">New Password</div>
            <input type="text" />
          </div>
          <div className="change-password-password">
            <div className="change-password-new-password-confirm">New Password Confirm</div>
            <input type="text" />
          </div>
          <button className="change-password-button">Change Password</button>
          <div className="change-password-link-to-change-password">Do you forget your password?</div>
        </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default ChangePassword