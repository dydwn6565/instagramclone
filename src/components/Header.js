import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import "../components/css/Header.css"
import { Box, Button, ButtonGroup, Modal } from '@mui/material';
function Header() {
const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  const redirectToHome =() =>{
     window.location.href="/";
  }

  const redirectToMyMessage = () => (window.location.href = "/myMessage");

  const redirectToExplore = () => (window.location.href = "/explore");
  return (
    <>
      <div className="header">
        <span className="instagram-title">Instagram</span>
        <div className="header-search-bar">

        <form>
          <IconButton className="search-icon" type="submit" aria-label="search">
            <SearchIcon style={{ fill: "grey" }} />
          </IconButton>
          <TextField
            id="search-bar"
            className="text"
            //   onInput={
            //     (e) => {
            //     setSearchQuery(e.target.value);
            //   }
            // }

            variant="outlined"
            placeholder="     Search..."
            size="small"
          ></TextField>
        </form>
        </div>
        <div className="icon-list">


        <HomeIcon className="homeIcon" onClick={redirectToHome} />
        <SendOutlinedIcon className="myMessage" onClick={redirectToMyMessage} />
        <AddBoxOutlinedIcon />
        <ExploreOutlinedIcon className="explore" onClick={redirectToExplore} />
        <FavoriteBorderOutlinedIcon />
        <Avatar onClick={handleOpen} />
        </div>
        <Modal
          className="header-modal"
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box className="header-modal-box" sx={{ width: 200 }}>
            {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
            >
              <p>Profile</p>
              <p>Saved</p>
              <p>Setting</p>
              <p>Change account</p>

              <Button onClick={handleClose}>Cancle</Button>
            </ButtonGroup>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Header