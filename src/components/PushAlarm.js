import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "./Header";
import "./css/PushAlarm.css";
function PushAlarm() {
  return (
    <div>
      <Header />
      <div className="push-alarm">
        <AccountEditSide />
        <div className="push-alarm-main">
          <div className="push-alarm-like">
            <h3> Like </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>
            <div>
              <input type="radio" name="like" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
            </div>
            <div>johnappleseed likes your photo</div>
            <hr />
          </div>
          <div className="push-alarm-comment">
            <h3> Comment </h3>
            <div>
              <input type="radio" name="comment" />
              <span>Clear</span>
            </div>
            <div>
              <input type="radio" name="comment" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" name="comment" />
              <span>EveryOne</span>
            </div>
            <div>johnappleseed leave a comment "This is great"</div>
            <hr />
          </div>
          <div className="push-alarm-comment-like">
            <h3>Comment Like </h3>
            <div>
              <input type="radio" name="comment-like" />
              <span>Clear</span>
            </div>
            <div>
              <input type="radio" name="comment-like" />
              <span>A person who I follow</span>
            </div>

            <div>johnappleseed likes your comment "This is great"</div>

            <hr />
          </div>
          <div className="push-alarm-comment-like">
            <h3> Like or comment on which you are on a photo </h3>
            <div>
              <input type="radio" name="comment-like" />
              <span>Clear</span>
            </div>
            <div>
              <input type="radio" name="comment-like" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" name="comment-like" />
              <span>EveryOne</span>
            </div>
            <div>
              johnappleseed leaves a comment on a post where you are tagged{" "}
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Receive follow request </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>

            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>
                johnappleseed(@johnappleseed) accepts your follow request
              </div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Instagram Direct Request </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>

            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>johnappleseed wants to send a message</div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Instagram Direct </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>

            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>johnappleseed sent a message</div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Alarm </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>

            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>This alarm informs "you have a unread message"</div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Your first post and story </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>
            <div>
              <input type="radio" name="like" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>
                This alarm informs johnappleseed posts his/her first instagram
                sotry{" "}
              </div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Video hits </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>
        
            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>
             Your Video hits are over 100,000.
              </div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Help request </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>
         
            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>
             The contents are updated when you requests a help on July 10th
              </div>
            </div>
            <hr />
          </div>
          <div className="push-alarm-like">
            <h3> Live stream </h3>
            <div>
              <input type="radio" name="like" />
              <span>Clear</span>
            </div>
      
            <div>
              <input type="radio" name="like" />
              <span>EveryOne</span>
              <div>
              johnappleaseed started live stream. Watch it right now.
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PushAlarm;
