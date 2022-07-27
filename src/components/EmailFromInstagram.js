import React, { useState } from 'react'
import AccountEditFooter from './AccountEditFooter';
import AccountEditSide from './AccountEditSide'
import Header from './Header'

function EmailFromInstagram() {

  const [selectedItem,setSelectedItem] = useState("secure");
  return (
    <div className="email-from-instagram">
      <Header />
      <div>
        <AccountEditSide />
      </div>
      <h2>E-mail from Instagram </h2>
      <div className="app-and-website-buttons">
        <button onClick={(e) => setSelectedItem("secure")}>Secure</button>
        <button onClick={(e) => setSelectedItem("Est")}>Est</button>
      </div>
      {selectedItem === "secure" ? (
        <div>
          <div>
            Security and login emails from Instagram over the last 14 days are
            shown here.
          </div>
          <div>
            Use this list to verify that the email you received was actually
            sent from Instagram.
          </div>
          <div>Find out more.</div>
          <hr />
          <div>
            New Instagram Login occurs through Chrome Browser in Windows
          </div>
          <div>At 9:08pm on 26 Jul 2022</div>
          <div>
            To: dydwn6565@naver.com Sent from security@mail.instagram.com
          </div>
        </div>
      ) : (
        <div>
          <div>
            Email from Instagram in the last 14 days, including security and
            login,
          </div>
          <div>
            will be displayed here. Use this list to verify that the email you
            received
          </div>
          <div>was actually sent from Instagram. Find out more.</div>
          <hr />
          <div>Dear ivan4334, check out the updates on Instagram</div>
          <div>July 18, 2022 8:16 PM</div>
          <div>
            To: dydwn6565@naver.com Sent from no-reply@mail.instagram.com
          </div>
        </div>
      )}
      <AccountEditFooter />
    </div>
  );
}

export default EmailFromInstagram