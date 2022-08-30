import React from 'react'
import { CgProfile } from "react-icons/cg";
import { VscBookmark } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { TbExchange } from "react-icons/tb";
import "./HeaderProfileModal.css"
import { Link } from 'react-router-dom';

function HeaderProfileModal({ headerModalHandler, redirectToProfile }) {
  return (
    <div>
      <div
        className="header-profile-modal-backdrop"
        onClick={headerModalHandler}
      />
      <ul className="header-profile-ul">
        
          <li onClick={redirectToProfile}>
            <CgProfile />
            <span>
              <Link to="/id" className="link-text-no-decoration">
              Profile
              </Link>
              </span>
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
        <div className="hr"></div>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default HeaderProfileModal;