import React from "react";
import AccountEditFooter from "./AccountEditFooter";
import AccountEditSide from "./AccountEditSide";
import "./css/EmailAlarm.css"
import Header from "./Header";

function EmailAlarm() {
  return (
    <div>
      <Header />
      <div className="email-alarm">
        <AccountEditSide />
        <div className="email-alarm-main">
          <h3> Receive: </h3>
          <input type="checkbox" />
          <span>Feedback E-mail</span>
          <div>Send feedback to Instagram</div>
          <input type="checkbox" />
          <span>Alarm E-mail</span>
          <div>Receive not confirmed E-mail</div>
          <input type="checkbox" />
          <span>Product E-mail</span>
          <div>Check the tips about Instagram tools</div>
          <input type="checkbox" />
          <span>News E-mail</span>
          <div>See the details about Instagram's new features</div>
        </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default EmailAlarm;
