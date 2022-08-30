import React from 'react'
import "./ProfileEditModal.css"
function ProfileEditModal({ eventProfileEditModal }) {
  return (
    <>
      <div
        className="my-message-modal-backdrop"
        onClick={eventProfileEditModal}
      />
      <div className="profile-edit-modal-container">
        <div>Change password</div>
        <div className="hr"></div>
        <div>QR Code</div>
        <div className="hr"></div>
        <div>App and Website</div>
        <div className="hr"></div>
        <div>Alarm</div>
        <div className="hr"></div>
        <div>Private Info and Security</div>
        <div className="hr"></div>
        <div>Manage Supervision</div>
        <div className="hr"></div>
        <div>Login Activity</div>
        <div className="hr"></div>
        <div>Email from Instagram</div>
        <div className="hr"></div>
        <div>Report problems</div>
        <div className="hr"></div>

        <div>Bring it</div>
        <div className="hr"></div>
        <div>Logout</div>
        <div className="hr"></div>
        <div onClick={eventProfileEditModal}>Cancel</div>
      </div>
    </>
  );
}

export default ProfileEditModal