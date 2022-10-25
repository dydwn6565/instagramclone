import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import AccountEditSide from "./AccountEditSide";
import Header from "../Header";
import "./PrivateInfoAndSecurity.css";
import EmailAlarmComponent from "./EmailAlarmComponent";
import ProfileFooter from "../profilePage/ProfileFooter";

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
      <div className="private-info-and-security-container">
        <AccountEditSide
          specialSize={"large-space-for-pricate-info-and-security"}
        />
        <div className="private-info-and-security-main">
          <div>
            <h2>Range of account open</h2>
            <input type="checkbox" />
            <span>
              <strong> private account</strong>
            </span>
            <div className="private-info-and-security-main-page-space">
              If your account is private, only those you approve can view your
              photos and videos and Instagram. Existing followers are not
              affected.
            </div>
            <hr />
          </div>
          <div>
            <h2>Active status</h2>
            <input type="checkbox" />
            <span>
              <strong> check active status</strong>
            </span>
            <div className="private-info-and-security-main-page-space">
              Allow the sender of the accounts and messages you follow to check
              your last activity information or current activity status in the
              instagram app. Turning off this option will prevent you from
              viewing the activity status of other accounts.
              <a
                alt="text"
                href="https://instagramserver1.herokuapp.com/learnmore"
                className="private-info-and-security-main-learn-more"
              >
                Learn More
              </a>
            </div>
            <div className="private-info-and-security-main-page-space">
              You can continue to use the service event if the activity status
              is off.
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Share my story</h2>
            <input type="checkbox" />
            <span>
              <strong> allow share</strong>
            </span>
            <div className="private-info-and-security-main-page-space">
              Allow people to share your story in messages.
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Reply</h2>
            <div className="private-info-and-security-main-page-space ">
              <a
                className="private-info-and-security-main-learn-more"
                alr="text"
                href="https://instagramserver1.herokuapp.com/fixreply"
              >
                {" "}
                Fix Reply setting
              </a>
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Photo on which I am involved </h2>
            <div>
              <input type="radio" name="photo-involved" />
              <span>Added automatically</span>
            </div>
            <div>
              <input type="radio" name="photo-involved" />
              <span>Added manually</span>
            </div>
            <div>
              Choose how you want to add your photo to your profile.About your
              photos.{" "}
              <a
                className="private-info-and-security-main-learn-more"
                href="https://instagramserver1.herokuapp.com/learnmore"
              >
                Learn more
              </a>
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Second step authentication</h2>
            <div className="private-info-and-security-main-page-space">
              <a
                className="private-info-and-security-main-learn-more"
                alt="text"
                href="https://instagramserver1.herokuapp.com/secondauth"
              >
                Setting up second step authentication
              </a>
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Data download</h2>

            <div className="private-info-and-security-main-page-space">
              <a
                className="private-info-and-security-main-learn-more"
                alt="text"
                href="https://instagramserver1.herokuapp.com/download"
              >
                Download request
              </a>
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h2>Private Info and Security Help</h2>
            <div className="private-info-and-security-main-page-space">
              <a
                className="private-info-and-security-main-learn-more"
                alt="text"
                href="https://instagramserver1.herokuapp.com/support"
              >
                Support
              </a>
            </div>

            <div className="hr"></div>
          </div>
          <div>
            <h1>Reference</h1>
            <div className="private-info-and-security-main-page-space">
              <EmailAlarmComponent
                title={"@Reference allowance target"}
                extraInfo={
                  " Please @tell us who will allow you to link your account in stories,comments, live broadcasts, and captions. If an unauthorized person attempts to @reference you, you will be prompted that you do not allow @reference."
                }
                threeItem={true}
              />
            </div>
          </div>
          <div>
            <h2>Guide</h2>
            <h5>My Post</h5>
            <div>Allow others to use my post</div>
            <div className="private-info-and-security-guide">
              <div className="private-info-and-security-main-page-space">
                Someone else can add your post to their guide. The appropriate
                posts added will always include your user name.
              </div>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </div>
            <div className="hr"></div>
          </div>
          <div>
            <h2>Post</h2>
            <h5>Likes and Hits</h5>
            <div className="private-info-and-security-main-page-space">
              Hide likes and hits
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                className="private-info-and-security-icon"
              />
            </div>
            <div className="private-info-and-security-post-extra-info">
              The total number of likes and views of posts posted by other
              accounts is not displayed. When you create a post, you can hide
              the number of likes in the post by going to Advanced Settings and
              setting 'Hide the number of likes and views for this post'.
            </div>
            <div className="hr"></div>
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
          </div>
          <div className="hr"></div>
          <div>
            <h5>Request from shop</h5>
            <div className="private-info-and-security-main-page-space">
              Request allow
              <FormControlLabel
                className="private-info-and-security-icon"
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </div>
            <div className="private-info-and-security-post-extra-info">
              Allow your photos and videos to be displayed in the shop of Meta
              Company products after tagging the account that runs the shop in
              the post or using shop-related hashtags.
              <a
                className="private-info-and-security-main-learn-more"
                alt="text"
                href="https://instagramserver1.herokuapp.com/learnmore"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProfileFooter position={"account-private"} />
    </div>
  );
}

export default PrivateInfoAndSecurity;
