
import React from 'react'
import AccountEditSide from "./AccountEditSide";
import "../components/css/AccountEdit.css"
import Header from './Header';
import { Avatar } from '@mui/material';
function AccountEdit() {

  return (
    <>
      <Header />
      <div className="account-edit">
        <AccountEditSide />
        <div>
          <div className="account-edit-profile">
            <Avatar />
            <div>
              <div>ivan4334</div>
              <div>change profile picture</div>
            </div>
          </div>
          <div className="account-edit-name">
            <div>Name</div> <input type="text" value="Ivan Yongju Lee" />
          </div>

          <div>Please help people find your account by using your name,</div>
          <div>character or business name.</div>
          <div>You can modify your name by 14 days</div>
          <div className="account-edit-name">
            <div>User name</div>
            <input type="text" />
          </div>
          <div>Mostly, you can change your name ivan4334 </div>
          <div>
            for 14 days{" "}
            <a
              className="account-edit-user-name-more-info"
              href="localhost:3000"
            >
              More
            </a>
          </div>
          <div className="account-edit-name">
            <div>Website</div>
            <input type="text" />
          </div>
          <div className="account-edit-name">
            <div>Introduce</div>
            <textarea name="" id="" cols="30" rows="3"></textarea>
          </div>
          <div>Personal Info</div>
          <div>Please type your personal info even though this is used</div>
          <div>
            for the business or your pet. This is not included in public profile
          </div>
          <div className="account-edit-name">
            <div>Email</div>
            <input type="text" value="dydwn6565@naver.com" />
          </div>
          <div className="account-edit-name">
            <div>Your phone number</div>
            <input type="text" />
          </div>
          <div className="account-edit-name">
            <div>Gender</div>
            <input type="text" />
          </div>
          <div className="account-edit-name">
            <div>Recommend similar accounts</div>
            <input type="checkbox" />
            <div>
              <div>Include your account when</div>
              <div>recommending similar accounts to follow</div>
            </div>
          </div>
          <div className="account-edit-name">
            <button>submit</button>
            <div>Temporary inactive my account</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountEdit