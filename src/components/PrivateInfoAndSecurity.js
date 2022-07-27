import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "./Header";

function PrivateInfoAndSecurity() {
  return (
    <div className="private-info-and-security">
      <Header />
      <div className="private-info-and-security-main">
        <AccountEditSide />
        <div>
          <div>
            <h2>Range of account open</h2>
            <input type="checkbox" />
            <span>private account</span>
            <div>
              If your account is private, only those you approve can view your
              photos and videos and Instagram.
            </div>
            <div> Existing followers are not affected.</div>
            <hr />
          </div>
          <div>
            <h2>Active status</h2>
            <input type="checkbox" />
            <span>check active status</span>
            <div>
              Allow the sender of the accounts and messages you follow to check
              your last activity information or current activity status in the
              instagram app.
              <div>
                Turning off this option will prevent you from viewing the
                activity status of other accounts. Learn More
              </div>
            </div>
            <div>
              You can continue to use the service event if the activity status
              is off.
            </div>

            <hr />
          </div>
          <div>
            <h2>Share my story</h2>
            <input type="checkbox" />
            <span>allow share</span>
            <div>Allow people to share your story in messages.</div>

            <hr />
          </div>
          <div>
            <h2>Reply</h2>
            <div>Fix Reply setting</div>

            <hr />
          </div>
          <div>
            <h2>Photo on which I am involved </h2>
            <div>
              <input type="radio" />
              <span>Added automatically</span>
            </div>
            <div>
              <input type="radio" />
              <span>Added manually</span>
            </div>
            <div>
              Choose how you want to add your photo to your profile. Learn more
              about your photos
            </div>

            <hr />
          </div>
          <div>
            <h2>Second step authentication</h2>
            <div>Setting up second step authentication</div>

            <hr />
          </div>
          <div>
            <h2>Data download</h2>
            <div>Download request</div>

            <hr />
          </div>
          <div>
            <h2>Private Info and Security Help</h2>
            <div>Support</div>

            <hr />
          </div>
          <div>
            <h1>Reference</h1>
            <div>@Reference allowance target</div>
            <div>
              <input type="radio" />
              <span>Everyone</span>
            </div>
            <div>
              <input type="radio" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" />
              <span>No</span>
            </div>
            <div>
              Please @tell us who will allow you to link your account in
              stories, comments, live broadcasts, and captions.
            </div>
            <div>
              If an unauthorized person attempts to @reference you, you will be
              prompted that you do not allow @reference.
            </div>
            <hr />
          </div>
          <div>
            <div>Guide</div>
            <div>My Post</div>
            <div>Allow others to use my post</div>
            <div>Someone else can add your post to their guide. The appropriate posts added will always include your user name.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateInfoAndSecurity;
