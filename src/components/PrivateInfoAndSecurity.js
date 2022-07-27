import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "./Header";
import "./css/PrivateInfoAndSecurity.css";

function PrivateInfoAndSecurity() {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#1E90FF",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
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
            <h2>Guide</h2>
            <h5>My Post</h5>
            <div>Allow others to use my post</div>
            <div>
              Someone else can add your post to their guide. The appropriate
              posts added will always include your user name.
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </div>
            <hr />
          </div>
          <div>
            <h2>Post</h2>
            <h5>Likes and Hits</h5>
            <div>
              Hide likes and hits{" "}
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </div>
            <div>
              The total number of likes and views of posts posted by other
              accounts is not displayed.
            </div>
            <div>
              When you create a post, you can hide the number of likes in the
              post by going to Advanced Settings and setting 'Hide the number of
              likes and views for this post'.
            </div>
            <hr />
          </div>
          <div className="tag-allowance">
            <div>
              <h5>Tag allowance target</h5>
              <input type="radio" name="tag-allowance" />
              <span>Everyone</span>
            </div>
            <div>
              <input type="radio" name="tag-allowance" />
              <span>A person who I follow</span>
            </div>
            <div>
              <input type="radio" name="tag-allowance" />
              <span>Not allow</span>
            </div>
            <hr />
          </div>
          <div>
            <h5>Request from shop</h5>
            <div>
              Request allow{" "}
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </div>
            <div>
              Allow your photos and videos to be displayed in the shop of Meta
              Company products
            </div>
            <div>
              after tagging the account that runs the shop in the post or using
              shop-related hashtags. Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateInfoAndSecurity;
