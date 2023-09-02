
import React from 'react'
import AccountEditSide from "./AccountEditSide";
import "./AccountEdit.css"
import Header from '../Header';
import { Avatar } from '@mui/material';
// import ProfileFooter from '../profilePage/ProfileFooter';
function AccountEdit() {

  return (
    <>
      <div className="account-edit-container">
        <Header />
        <div className="account-edit">
          <AccountEditSide />
          <div className="account-edit-profile-container">
            <div className="account-edit-profile">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" />
              <div className="account-edit-profile-id">
                <div>ivan4334</div>
                <div className="account-change-pitcure">
                  change profile picture
                </div>
              </div>
            </div>
            <div className="account-edit-name">
              <div className="account-edit-user-name">Name</div>{" "}
              <input type="text" value="Ivan Yongju Lee" />
            </div>
            <div className="small-size-explanation">
              <div>
                Please help people find your account by using your
                name,character or business name. You can modify your name by 14
                days
              </div>
            </div>
            <div className="account-edit-name">
              <div className="account-edit-username-username">User name</div>
              <input type="text" />
            </div>
            <div className="small-size-explanation">
              Mostly, you can change your name ivan4334 for 14 days
              <a
                className="account-edit-user-name-more-info"
                href="https://instagramserver1.herokuapp.com"
              >
                &nbsp;More
              </a>
            </div>

            <div className="account-edit-name">
              <div className="account-edit-website">Website</div>
              <input type="text" />
            </div>
            <div className="account-edit-name">
              <div className="account-edit-introduce">Introduce</div>
              <textarea name="" id="" cols="30" rows="3"></textarea>
            </div>

            <div className="small-size-explanation">
              <h5>Personal Info</h5>
              <div>Please type your personal info even though this is used</div>
              <div>
                for the business or your pet. This is not included in public
                profile
              </div>
            </div>

            <div className="account-edit-name">
              <div className="account-edit-email">Email</div>
              <input type="text" value="dydwn6565@naver.com" />
            </div>
            <div className="account-edit-name">
              <div className="account-edit-phone-number">Phone number</div>
              <input type="text" />
            </div>
            <div className="account-edit-name">
              <div className="account-edit-gender">Gender</div>
              <input type="text" />
            </div>
            {/* <div className="account-edit-name">
              <div className="account-edit-recommend">
                Recommend similar accounts
              </div>
              <input type="checkbox" />
              <div className="account-edit-recommend-explaination">
                <div>Include your account when</div>
                <div>recommending similar accounts to follow</div>
              </div>
            </div> */}
            <div className="account-edit-name">
              <button className="account-edit-sumbit-button">submit</button>
              <div className="account-edit-inactive-button">
                Temporary inactive my account
              </div>
            </div>
          </div>
        </div>

        {/* <ProfileFooter position={"account"} /> */}
      </div>
    </>
  );
}

export default AccountEdit