import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "../Header";
import "./ManageContactNumber.css";
import ProfileFooter from "../profilePage/ProfileFooter";
function ManageContactNumber() {
  return (
    <div>
      <Header />
      <div className="manage-contact-number">
        <AccountEditSide />
        <div className="manage-contact-number-main">
          <h2>Manage Contact number</h2>

          <div>
            This is the list of contacts you uploaded to Instagram. Click Delete
            All to delete synchronized contacts. The next time Instagram syncs
            your contacts, They will be uploaded again, unless you go to Device
            Setting and disable access to them.
          </div>

          <div className="manage-contact-number-main-second-div">
            You uploaded contact information will be used by Instagram to
            recommned friends to you or to improve your experience.
          </div>

          <div className="manage-contact-number-main-contact-title">
            <span>Synchronized contact number 0 </span>{" "}
            <a
              href="http://localhost:3000"
              className="manage-contact-number-delete-bt"
            >
              Delete
            </a>
          </div>
          <div className="hr" />
          <div className="manage-contact-number-main-contact-contents">
            If the contact number is uploaded, it will be displayed in here
          </div>
          <div className="hr" />
          <button className="manage-contact-number-main-contact-bt">
            Delete All
          </button>
        </div>
      </div>

      <ProfileFooter position={"account"} />
    </div>
  );
}

export default ManageContactNumber;
