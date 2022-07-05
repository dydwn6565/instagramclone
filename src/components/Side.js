import React from 'react'
import SideFooter from './SideFooter'
import SideRecommandationProfile from './SideRecommandationProfile'
import "./css/Side.css"
function Side() {
  return (
    <>
      <div className="side-profile">
        <SideRecommandationProfile />
      </div>
      <div className="side-footer">
        <SideFooter />
      </div>
    </>
  );
}

export default Side