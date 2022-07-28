import React, { useState } from "react";
import AccountEditFooter from "./AccountEditFooter";
import AccountEditSide from "./AccountEditSide";
import Header from "./Header";
import "./css/EmailFromInstagram.css";
function EmailFromInstagram() {
  const [selectedItem, setSelectedItem] = useState("secure");
  return (
    <div>
      <Header />
      <div className="email-from-instagram">
        <AccountEditSide />
        <div className="email-from-instagram-main">
          <div className="email-from-instagram-main-title">
            E-mail from Instagram{" "}
          </div>
          <div className="email-from-instagram-main-buttons">
            <button
              onClick={(e) => setSelectedItem("secure")}
              className={selectedItem !== "secure" ? "inactive" : ""}
            >
              Secure
            </button>
            <button
              onClick={(e) => setSelectedItem("Est")}
              className={selectedItem !== "Est" ? "inactive" : ""}
            >
              Est
            </button>
          </div>
          {selectedItem === "secure" ? (
            <div>
              <div className="email-from-instagram-main-content">
                Security and login emails from Instagram over the last 14 days
                are shown here. Use this list to verify that the email you
                received was actually sent from Instagram.
                <a href="http://localhost:3000/findmore">Find out more.</a>
              </div>

              <hr />
              <div className="email-from-instagram-main-content-login">
                New Instagram Login occurs through Chrome Browser in Windows
              </div>
              <div className="email-from-instagram-main-content-login-time">
                At 9:08pm on 26 Jul 2022
              </div>
              <div className="email-from-instagram-main-content-email-from">
                To: dydwn6565@naver.com Sent from security@mail.instagram.com
              </div>
            </div>
          ) : (
            <div>
              <div className="email-from-instagram-main-content">
                Email from Instagram in the last 14 days, including security and
                login, will be displayed here. Use this list to verify that the
                email you received was actually sent from Instagram.{" "}
                <a href="http://localhost:3000/findoutmore">Find out more.</a>
              </div>
              <hr />
              <div className="email-from-instagram-main-content-login">
                Dear ivan4334, check out the updates on Instagram
              </div>
              <div className="email-from-instagram-main-content-login-time">
                July 18, 2022 8:16 PM
              </div>
              <div className="email-from-instagram-main-content-email-from">
                To: dydwn6565@naver.com Sent from no-reply@mail.instagram.com
              </div>
            </div>
          )}
        </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default EmailFromInstagram;
