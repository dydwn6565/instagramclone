import React from 'react'
import AccountEditSide from './AccountEditSide'
import Header from '../Header'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Supervision.css"
import ProfileFooter from '../profilePage/ProfileFooter';

function Supervision() {
  return (
    <div>
      <Header />
      <div className="supervision">
        <AccountEditSide />
        <div className="supervision-main">
          <div className="supervision-main-title">
            Maintance and Supervision
          </div>
          <div className="supervision-main-content">
            Family center
            <a
              alt="text"
              href="https://familycenter.instagram.com/dashboard/?entrypoint=supersion_web"
            >
              <ArrowForwardIosIcon className="supervision-main-icon" />
            </a>
          </div>
          <div className="supervision-main-content">
            Education Hub
            <a alt="text" href="https://familycenter.instagram.com/education">
              <ArrowForwardIosIcon className="supervision-main-icon" />
            </a>
          </div>
        </div>
      </div>

      <ProfileFooter position={"account"} />
    </div>
  );
}

export default Supervision