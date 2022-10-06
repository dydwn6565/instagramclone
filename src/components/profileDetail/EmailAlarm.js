import React from "react";

import AccountEditSide from "./AccountEditSide";
import "./EmailAlarm.css"
import EmailAlarmComponent from "./EmailAlarmComponent";

import Header from "../Header";
import ProfileFooter from "../profilePage/ProfileFooter";

function EmailAlarm() {
  return (
    <div>
      <Header />
      <div className="email-alarm">
        <AccountEditSide />
        <div className="email-alarm-main">
          <EmailAlarmComponent
            title={"E-mail Feedback"}
            extraInfo={"Send feedback to Instagram"}
          />
          <EmailAlarmComponent
            title={"Alarm E-mail"}
            extraInfo={" Receive not confirmed E-mail"}
          />
          <EmailAlarmComponent
            title={"Product E-mailProduct E-mail"}
            extraInfo={"Check the tips about Instagram tools"}
          />
          <EmailAlarmComponent
            title={"News E-mail"}
            extraInfo={"See the details about Instagram's new features"}
          />
          <EmailAlarmComponent
            title={"Support E-mail"}
            extraInfo={
              "Receive updates on reporting and violations of community guidelines"
            }
          />
        </div>
      </div>

      <ProfileFooter position={"account"} />
    </div>
  );
}

export default EmailAlarm;
