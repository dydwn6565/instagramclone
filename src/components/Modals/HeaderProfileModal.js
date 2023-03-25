import React from 'react'
import { CgProfile } from "react-icons/cg";
import { VscBookmark } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { TbExchange } from "react-icons/tb";
import "./HeaderProfileModal.css"
import { Link } from 'react-router-dom';

function HeaderProfileModal({ headerModalHandler, redirectToProfile }) {

  const logoutActivity=()=>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken")
    window.location.href="/login"
  }
  return (
    <div>
      <div
        className="header-profile-modal-backdrop"
        onClick={headerModalHandler}
      />
      <div className="header-profile-ul">
        
          <div onClick={redirectToProfile}>
            <CgProfile />
            <span>
              <Link to="/id" className="link-text-no-decoration">
              Profile
              </Link>
              </span>
          </div>
        
        {/* <div>
          <VscBookmark />
          <span>Saved</span>
        </div>
        <div>
          <GoGear />

          <span>Setting</span>
        </div>
        <div>
          <TbExchange className="exchange-icon" />
          <span>Change account</span>
        </div> */}
        <div className="hr"></div>
        <div onClick={logoutActivity}>Logout</div>
      </div>
    </div>
  );
}

export default HeaderProfileModal;