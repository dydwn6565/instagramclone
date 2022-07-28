import React from 'react'
import { CgProfile } from "react-icons/cg";
import { VscBookmark } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { TbExchange } from "react-icons/tb";
import "./HeaderProfileModal.css"

function HeaderProfileModal({ mainPageModalHandler }) {
  return (
    <div>
      <div
        className="header-profile-modal-backdrop"
        onClick={mainPageModalHandler}
      />
      <ul className="header-profile-ul">
        <li>
          <CgProfile />
          <span>Profile</span>
        </li>
        <li>
          <VscBookmark />
          <span>Saved</span>
        </li>
        <li>
          <GoGear />

          <span>Setting</span>
        </li>
        <li>
          <TbExchange className="exchange-icon" />
          <span>Change account</span>
        </li>
        <hr />
        <li>Logout</li>
      </ul>
  
    </div>
  );
}

export default HeaderProfileModal;