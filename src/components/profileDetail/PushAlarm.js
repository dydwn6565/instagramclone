import {React, useState} from "react";
import { styled } from "@mui/material/styles";
import AccountEditSide from "./AccountEditSide";
import Header from "../Header";
import "./PushAlarm.css";
import { FormControlLabel,Switch } from "@mui/material";
import PushAlarmDetail from "./PushAlarmDetail";
// import ProfileFooter from "../profilePage/ProfileFooter";
function PushAlarm() {

  const [openPushAlarm, setOpenPushAlarm] = useState(true);
  const [selectedAlarm, setSelectedAlarm] = useState("Live");
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


const triggerEvent =() =>{
  setOpenPushAlarm(prevState =>!prevState)
}

const setEventType =(title) =>{
  
  setSelectedAlarm(title);
}

  return (
    <div>
      <Header />
      <div className="push-alarm">
        <AccountEditSide />
        <div className="push-alarm-main">
          {selectedAlarm === "Post" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Post, Story and Comment"}
              componentInfo={[
                {
                  title: "like",
                  extraInfo: "johnappleseed likes your photo",
                  threeItem: true,
                },
                {
                  title: "Like or comment on which you are on a photo",
                  extraInfo:
                    " johnappleseed leaves a comment on a post where you are tagged",
                  threeItem: true,
                },
                {
                  title: "Comment",
                  extraInfo: "johnappleseed leave a comment 'This is great'",
                  threeItem: true,
                },
                {
                  title: "Comment Like",
                  extraInfo: "johnappleseed likes your comment 'This is great'",
                  threeItem: true,
                },
                {
                  title: "Your first post and story",
                  extraInfo:
                    "This is alarm for johnappleseed ' first Instagram story post",
                  threeItem: true,
                },
              ]}
            />
          )}
          {selectedAlarm === "Following" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Following and Follower"}
              componentInfo={[
                {
                  title: "New follower",
                  extraInfo: "johnappleseed started follow you",
                  threeItem: false,
                },
                {
                  title: "Accepted Follow Request",
                  extraInfo:
                    " johnappleseed(@johnappleseed) accepted your follow request",
                  threeItem: false,
                },
                {
                  title: "Account recommendation",
                  extraInfo:
                    "johnappleseed, who you may know, is using Instagram and other similar notifications",
                  threeItem: false,
                },
              ]}
            />
          )}
          {selectedAlarm === "Direct" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Direct message and Call"}
              componentInfo={[
                {
                  title: "Message Request",
                  extraInfo: "johnappleseed want to send a message",
                  threeItem: false,
                },
                {
                  title: "Message",
                  extraInfo: " johnappleseed sent a message",
                  threeItem: false,
                },
                {
                  title: "Group Request",
                  extraInfo:
                    "johnappleseed wants to invite johnappleseed to your group",
                  threeItem: false,
                },
                {
                  title: "Rooms",
                  extraInfo: "johnappleseed' rooms will start after 10 mins",
                  threeItem: true,
                },
              ]}
            />
          )}
          {selectedAlarm === "Live" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Live Stream and Video"}
              componentInfo={[
                {
                  title: "Message Request",
                  extraInfo:
                    "johnappleseed started live stream. Watch it right now",
                  threeItem: false,
                },
                {
                  title: "Video hits number",
                  extraInfo:
                    " Your video has been viewed more than 100,000 times",
                  threeItem: false,
                },
              ]}
            />
          )}
          {selectedAlarm === "Donation" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Donation Campaign"}
              componentInfo={[
                {
                  title: "My donation compaign",
                  extraInfo: "johnappleseed donated to your donation campaign.",
                  threeItem: false,
                },
                {
                  title: "A donation campaign for others",
                  extraInfo: "johnappleseed has launched a donation campaign.",
                  threeItem: false,
                },
              ]}
            />
          )}
          {selectedAlarm === "AlarmFromInst" && openPushAlarm === false && (
            <PushAlarmDetail
              triggerEvent={triggerEvent}
              title={"Alarm from Instagram"}
              componentInfo={[
                {
                  title: "Alarm",
                  extraInfo:
                    "Notification that guides you, such as 'You have not read the notification'",
                  threeItem: false,
                },
                {
                  title: "Product Alarm or Feedback",
                  extraInfo: "Download Boomerang, Instagram's latest app",
                  threeItem: false,
                },
                {
                  title: "Support Request",
                  extraInfo:
                    "The contents of the support you requested on July 10 have been updated",
                  threeItem: false,
                },
                {
                  title: "Not confirmed Login",
                  extraInfo:
                    "An unverified login to Apple iPhone 11 occurred in Foster City, California, USA",
                  threeItem: false,
                },
              ]}
            />
          )}

          {openPushAlarm && (
            <>
              <h4>Push Alarm</h4>
              <div>
                <span>Stop Everything Temporary</span>
                <FormControlLabel
                  className="push-alarm-icon"
                  control={<IOSSwitch sx={{ m: 1 }} />}
                />
              </div>
              
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("Post");
                }}
              >
                Post, Story and Comment
              </div>
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("Following");
                }}
              >
                Following or Follower
              </div>
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("Direct");
                }}
              >
                Direct Message and Call
              </div>
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("Live");
                }}
              >
                Live Stream and Video
              </div>
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("Donation");
                }}
              >
                Donation Compaign
              </div>
              <div
                onClick={() => {
                  triggerEvent();
                  setEventType("AlarmFromInst");
                }}
              >
                Alarm from Instagram
              </div>
            </>
          )}
        </div>
      </div>

      {/* <ProfileFooter position={"account"} /> */}
    </div>
  );
}

export default PushAlarm;
