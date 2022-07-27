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
        <div>
          <div className="change-password-avatar">
            <Avatar />
            <div>ivan4334</div>
          </div>
          <div className="change-password-password">
            <div>Previous Password</div>
            <input type="text" />
          </div>
          <div className="change-password-password">
            <div>New Password</div>
            <input type="text" />
          </div>
          <div className="change-password-password">
            <div>New Password Confirm</div>
            <input type="text" />
          </div>
          <button>Change Password</button>
          <div>Do you forget your password?</div>
        </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default ChangePassword