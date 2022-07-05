import React from 'react'
import Avatar from "@mui/material/Avatar";
import "./css/SideRecommandationProfile.css"
function SideRecommandationProfile() {
  return (
    <div className="side-recommandation-profile">
      <div>
        <div>
          <Avatar />
        </div>
        <div className="side-recomandation-profile-id">
          <div>id</div>
          <div>name</div>
        </div>
        <div className="side-recommandation-profile-change">
          <div>change</div>
        </div>
      </div>
      <div>
        Recommandation for you <span>See all</span>
      </div>

      <div className="side-recommandation">
        <Avatar />
        <div className="side-recommandation-id">
          <div>id</div>
          <div>follow</div>
        </div>
        <div className="side-recommandation-follow">
          <div>follow</div>
        </div>
      </div>
    </div>
  );
}

export default SideRecommandationProfile