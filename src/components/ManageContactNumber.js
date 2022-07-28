import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "./Header";
import "../components/css/ManageContactNumber.css";
function ManageContactNumber() {
  return (
    <div>
      <Header />
      <div className="manage-contact-number">
        <AccountEditSide />
        <div>
          <h2>Manage Contact number</h2>

          <div>This is the list of contacts you uploaded to Instagram.</div>
          <div>
            Click Delete All to delete synchronized contacts. The next time
            Instagram syncs your contacts,{" "}
          </div>
          <div>
            they will be uploaded again, unless you go to Device Setting and
            disable access to them.
          </div>

          <hr />
          <div>
            You uploaded contact information will be used by Instagram to
            recommned friends to you or to improve your experience.
          </div>
          <div> This contact information is only avaliable to you.</div>
          <hr />
          <div>

          <span>Synchronized contact number 0 </span> <span>Delete</span>
          </div>
          <hr />
          <div>If the contact number is uploaded, it will be displayed in here</div>
          <hr />
          <button>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default ManageContactNumber;
