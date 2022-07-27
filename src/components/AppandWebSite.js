import React, { useState } from 'react'
import AccountEditSide from './AccountEditSide'
import Header from './Header'
import "../components/css/AppandWebSite.css"
import AccountEditFooter from './AccountEditFooter';
function AppandWebSite() {

    const [selectedItem, setSelectedItem] = useState("active");
  return (
    <div>
      <Header />
      <div className="app-and-website">
        <AccountEditSide />
        <div>
          <div className="app-and-website-title">
            <h2>App and Website</h2>
          </div>
          <div className="app-and-website-buttons">
            <button onClick={e=>setSelectedItem("active")}>Active</button>
            <button onClick={e=>setSelectedItem("expired")}>Expired</button>
            <button onClick={e=>setSelectedItem('deleted')}>Deleted</button>
          </div>
          {selectedItem ==="active" ? <div>
            <div>
              This is the app and website that you connected to your Instagram
            </div>
            <div>
              account. This app and website will have access to the private
            </div>
            <div>information you choose to share.</div>
            <div>No apps are available to access your Instagram account</div>
          </div> :""}
            {selectedItem ==="expired" ?
          <div>
            <div>
              Apps and websites that you have connected to your Instagram
              account
            </div>
            <div>
              but have not been used in the last 90 days. This app and website
              no
            </div>
            <div>
              longer have access to your private information, but you can still
            </div>
            <div>
              retain your shared information when it is active. "Private"
            </div>
            <div>
              information refers to information accessible by the Mena app (e.g.
            </div>
            <div>
              email address) if you choose to share it when you log in to your
            </div>
            <div>Instagram account</div>
            <div>
              None of the apps that have access to your Instagram account have
              expired
            </div>
              </div> :""}
          

{selectedItem ==="deleted" ?
            <div>
          <div>
            This is an app and website that you are no longer linked to your
          </div>
          <div>
            Instagram account. This app and website no longer have access to
            your
          </div>
          <div>
            private information, but you can still retain your shared
            information
          </div>
          <div>
            when it is active. "Private" information means information
            accessible
          </div>
          <div>
            by the Mena app (e.g. email address) if you choose to share it when
          </div>
          <div>
            you log in to your Instagram account. You can request the app to
          </div>
          <div>
            delete your information. To request deletion, review the details and
          </div>
          <div>
            contact information specified in the app's privacy policy. User ID
            may
          </div>
          <div>be required when contacting the app</div>
          <div>

          None of the apps that have access to your Instagram account have been
          deleted
          </div>
        
        </div> :""}
      </div>
      </div>
      <AccountEditFooter />
    </div>
  );
}

export default AppandWebSite