import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "../Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Help.css";
// import ProfileFooter from "../profilePage/ProfileFooter";
function Help() {
  return (
    <div>
      <Header />
      <div className="help">
        <AccountEditSide />
        <div className="help-main">
          <div className="help-main-title">Help</div>
          <div className="help-main-content">
            <span>Customer Center</span>
            <a href="https://help.instagram.com">
              <ArrowForwardIosIcon className="help-main-icon" />
            </a>
          </div>
          <div className="help-main-content">
            <span>Private Info and Security Q&A</span>

            <ArrowForwardIosIcon className="help-main-icon" />
          </div>
          <div className="help-main-content">
            <span>Support Request</span>
            <ArrowForwardIosIcon className="help-main-icon" />
          </div>
        </div>
      </div>

      {/* <ProfileFooter position={"account"} /> */}
    </div>
  );
}

export default Help;
