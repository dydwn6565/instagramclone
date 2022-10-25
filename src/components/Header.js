import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import "../components/css/Header.css";

import MessageModal from "./Modals/MessageModal";
import LikeActivity from "./LikeActivity";
import HeaderProfileModal from "./Modals/HeaderProfileModal";
import { Link } from "react-router-dom";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openHeart, setOpenHeart] = useState(false);
  const [openHeaderModal, setOpenHeaderModal] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");
  const [userList, setUserList] = useState("");
  const [hideSearchIcon, setHideSearchIncon] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const userData = await fetch(
        "https://instagramserver1.herokuapp.com/users",
        {
          method: "Get",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const jsonData = await userData.json();
      setUserList(jsonData);
    };
    getUsers();
  }, []);

  const createNewPost = () => {
    setOpenModal((prevState) => !prevState);
  };

  const postActivity = () => {
    setOpenHeart((prevState) => !prevState);
  };

  const headerModalHandler = () => {
    setOpenHeaderModal((prevState) => !prevState);
  };

  const searchUsers = (e) => {
    if (e === "") {
      setSearchedUser("");
    } else {
      const filteredUserList = userList.users.filter((user) => {
        return user.userid.includes(e);
      });
      setSearchedUser(filteredUserList);
    }
    console.log(e);
  };

  const searchUserBlueHanlder = (e) => {
    setSearchedUser("");
    setHideSearchIncon(true);
  };

  const hideSearchedIconHandler = () => {
    setHideSearchIncon(false);
  };

  return (
    <>
      <div className="header">
        <span className="instagram-title">
          <Link to="/" className="link-text-no-decoration">
            Instagram
          </Link>
        </span>
        <div className="header-search-bar">
          <form>
            <div className="search-icon">
              <IconButton aria-label="search">
                {hideSearchIcon && <SearchIcon style={{ fill: "grey" }} />}
              </IconButton>
            </div>
            <div>
              <input
                // id="search-bar"
                className="header-search-bar-input"
                placeholder={hideSearchIcon ? "     Search..." : ""}
                onChange={(e) => searchUsers(e.target.value)}
                onFocus={(e) => hideSearchedIconHandler(e)}
                onBlur={(e) => searchUserBlueHanlder()}
              />
            {searchedUser && (
              <>
                {/* <div className="diamond"></div> */}
                <div className="searched-users-list">
                  {searchedUser.map((user) => (
                    <div key={user.userid} className="searched-user-container">
                      <Avatar />
                      <div className="searched-users-id-and-username">
                        <div>{user.userid}</div>
                        <div>{user.username}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            </div>
          </form>
        </div>
        <div className="icon-list">
          <Link to="/">
            <HomeIcon className="homeIcon" />
          </Link>
          <Link to="/myMessage">
            <SendOutlinedIcon className="myMessage" />
          </Link>

          <AddBoxOutlinedIcon onClick={createNewPost} />

          <Link to="/explore">
            <ExploreOutlinedIcon className="explore" />
          </Link>
          <div className="favorite-icon">
            <FavoriteBorderOutlinedIcon onClick={postActivity} />
            {openHeart && <LikeActivity postActivity={postActivity} />}
          </div>

          <div>
            <Avatar
            className="head-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU"
              onClick={headerModalHandler}
            />

            {openHeaderModal && (
              <>
                <HeaderProfileModal headerModalHandler={headerModalHandler} />
              </>
            )}
          </div>
        </div>

      </div>
        {openModal && (
          <MessageModal
            title="Create New Post"
            message="Please Select your pitcure or videos "
            onConfirm={createNewPost}
          />
        )}
    </>
  );
}

export default Header;
