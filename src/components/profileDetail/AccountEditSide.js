import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AccountEditSide.css";

function AccountEditSide({specialSize}) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="account-edit-side">
        <Box>
          <List component="nav" aria-label="secondary mailbox folder">
            <Link to="/accounts/edit" className="link-text-no-decoration">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => {
                  handleListItemClick(event, 2);
                }}
              >
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
            </Link>

            <Link
              to="/accounts/password/change"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => {
                  handleListItemClick(event, 3);
                }}
              >
                <ListItemText primary="Change password" />
              </ListItemButton>
            </Link>

            <Link
              to="/accounts/manage_access"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => {
                  handleListItemClick(event, 4);
                }}
              >
                <ListItemText primary="App and Web site" />
              </ListItemButton>
            </Link>

            <Link to="/emails/settings" className="link-text-no-decoration">
              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => {
                  handleListItemClick(event, 3);
                }}
              >
                <ListItemText primary="Email Alarm" />
              </ListItemButton>
            </Link>

            <Link to="/push/web/settings" className="link-text-no-decoration">
              <ListItemButton
                selected={selectedIndex === 6}
                onClick={(event) => {
                  handleListItemClick(event, 6);
                }}
              >
                <ListItemText primary="Push Alarm" />
              </ListItemButton>
            </Link>

            <Link
              to="/accounts/contact_history"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 7}
                onClick={(event) => {
                  handleListItemClick(event, 7);
                }}
              >
                <ListItemText primary="Manage Contact Number" />
              </ListItemButton>
            </Link>

            <Link
              to="/accounts/privacy_and_security"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 8}
                onClick={(event) => {
                  handleListItemClick(event, 8);
                }}
              >
                <ListItemText primary="Private Info and Security" />
              </ListItemButton>
            </Link>
            <Link
              to="/accounts/supervision"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 9}
                onClick={(event) => {
                  handleListItemClick(event, 9);
                }}
              >
                <ListItemText primary="Supervision" />
              </ListItemButton>
            </Link>
            <Link
              to="/session/login_activity"
              className="link-text-no-decoration"
            >
              <ListItemButton
                selected={selectedIndex === 10}
                onClick={(event) => {
                  handleListItemClick(event, 10);
                }}
              >
                <ListItemText primary="Login Activity" />
              </ListItemButton>
            </Link>

            <Link to="/emails/emails_sent" className="link-text-no-decoration">
              <ListItemButton
                selected={selectedIndex === 11}
                onClick={(event) => {
                  handleListItemClick(event, 11);
                }}
              >
                <ListItemText primary="E-mail from Instagram" />
              </ListItemButton>
            </Link>
            <Link to="/settings/help" className="link-text-no-decoration">
              <ListItemButton
                selected={selectedIndex === 12}
                onClick={(event) => {
                  handleListItemClick(event, 12);
                }}
              >
                <ListItemText primary="Help" />
              </ListItemButton>
            </Link>
            <ListItemButton
              selected={selectedIndex === 13}
              onClick={(event) => {
                handleListItemClick(event, 13);
              }}
            >
              <ListItemText
                primary="Change to Professional"
                style={{ color: "blue" }}
              />
            </ListItemButton>
            <div className={specialSize}> </div>
            <div className="hr" />
            <div className="meta-info-page">
              {/* <div className="meta-icon-with-meta-text">
                <img
                  alt="meta-icon"
                  src="https://cdn.dribbble.com/users/2973/screenshots/16757947/media/c56c56d24f8c591ff753faa15ea4a033.png?compress=1&resize=64x48"
                />
                <h3>Meta</h3>
              </div>
              <div className="color-blue">Account Center</div>
              <div className="meta-info">
                Manage setting for environments connected between Instagram,
                Facebook apps, and Messenger, such as sharing stories and posts,
                and loggin in.
              </div> */}
            </div>
          </List>
        </Box>
      </div>
    </>
  );
}

export default AccountEditSide;
