import React from "react";
import "../profilePage/ProfileFooter.css";
function ProfileFooter({position}) {
  return (
    <>
      <div className={`profile-footer ${position}`}>
        Meta Introduce Blog hiring Info Q&A API Personal Info Term Popular
        account Hash tag Location instagram Lite Account upload & none user
      </div>
      <div className="profile-footer">
        <div>Korean</div>
        <div>C 2022 Instagram from Meta</div>
      </div>
    </>
  );
}

export default ProfileFooter;
