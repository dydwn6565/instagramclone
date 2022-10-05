import React from "react";
import Avatar from "@mui/material/Avatar";
import "./css/SideRecommandationProfile.css";
function SideRecommandationProfile() {
  return (
    <div className="side-recommandation-profile">
      <div>
        <div>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" className="main-page-profile-avatar"/>
        </div>
        <div className="side-recomandation-profile-id">
          <div>id</div>
          <div>name</div>
        </div>
        <div className="side-recommandation-profile-change">
          <div>change</div>
        </div>
      </div>
      <div className="side-recommandation-profile-see-all">
        <div className="side-recommandation-profile-see-all-front">
          Recommandation for you
        </div>{" "}
        <div className="side-recommandation-profile-see-all-back">See all</div>
      </div>

      <div className="side-recommandation">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
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

export default SideRecommandationProfile;
