import React from 'react'
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
function Header() {
  return (
    <>
    <div className='header'>

      <span>Instagrams</span>
      <form>
        <TextField
          id="search-bar"
          className="text"
          //   onInput={
          //     (e) => {
          //     setSearchQuery(e.target.value);
          //   }
          // }
          label="Enter a city name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
      <HomeIcon/>
      <SendOutlinedIcon/>
      <AddBoxOutlinedIcon/>
      <ExploreOutlinedIcon/>
      <FavoriteBorderOutlinedIcon/>
      <Avatar/>
    </div>
    </>
  );
}

export default Header