import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

import "./css/AccountEditSide.css";

function AccountEditSide() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const accountEditor = () => {
    window.location.href = "/accounts/edit";
  };
  const changePassword = () => {
    window.location.href = "/accounts/password/change";
  };

  const appAndWebSite = () => {
    window.location.href = "/accounts/manage_access";
  };

  const emailAlarm = () => {
    window.location.href = "/emails/settings";
  };

  const pushAlarm = () => {
    window.location.href = "/push/web/settings";
  };

  const manageContactNumber = () => {
    window.location.href = "/accounts/contact_history";
  };

  const privateInfoandSecurity = () => {
    window.location.href = "/accounts/privacy_and_security";
  };

  const supervision = () => {
    window.location.href = "/accounts/supervision";
  };

  const loginActivity = () => {
    window.location.href = "/session/login_activity";
  };

  const emailFromInstagrm = () => {
    window.location.href = "/emails/emails_sent";
  };

  const help = () => {
    window.location.href = "/settings/help";
  };

  return (
    <>
      <div className="account-edit-side">
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => {
                handleListItemClick(event, 2);
                accountEditor();
              }}
            >
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => {
                handleListItemClick(event, 3);
                changePassword();
              }}
            >
              <ListItemText primary="Change password" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => {
                handleListItemClick(event, 4);
                appAndWebSite();
              }}
            >
              <ListItemText primary="App and Web site" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => {
                handleListItemClick(event, 3);
                emailAlarm();
              }}
            >
              <ListItemText primary="Email Alarm" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => {
                handleListItemClick(event, 6);
                pushAlarm();
              }}
            >
              <ListItemText primary="Push Alarm" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => {
                handleListItemClick(event, 7);
                manageContactNumber();
              }}
            >
              <ListItemText primary="Manage Contact Number" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 8}
              onClick={(event) => {
                handleListItemClick(event, 8);
                privateInfoandSecurity();
              }}
            >
              <ListItemText primary="Private Info and Security" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 9}
              onClick={(event) => {
                handleListItemClick(event, 9);
                supervision();
              }}
            >
              <ListItemText primary="Supervision" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 10}
              onClick={(event) => {
                handleListItemClick(event, 10);
                loginActivity();
              }}
            >
              <ListItemText primary="Login Activity" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 11}
              onClick={(event) => {
                handleListItemClick(event, 11);
                emailFromInstagrm();
              }}
            >
              <ListItemText primary="E-mail from Instagram" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 12}
              onClick={(event) => {
                handleListItemClick(event, 12);
                help();
              }}
            >
              <ListItemText primary="Help" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 13}
              onClick={(event) => {
                handleListItemClick(event, 13);
                help();
              }}
            >
              <ListItemText
                primary="Change to Professional"
                style={{ color: "blue" }}
              />
            </ListItemButton>
            <hr />
            <h3>Meta</h3>
            <div>Account Center</div>
            <div>Manage setting for environments connected </div>
            <div>
            
              between Instagram, Facebook apps, and Messenger, such as sharing
              stories and posts, and loggin in.
            </div>
          </List>
        </Box>
      </div>
    </>
  );
}

export default AccountEditSide;
