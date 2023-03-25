import React from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";
function Icons({ like, addlikeButtonhandler, deletelikeButtonhandler }) {
  return (
    <div>
      {" "}
      {like ? (
        <FavoriteBorderOutlinedIcon
          className="main-page-icons"
          onClick={addlikeButtonhandler}
        />
      ) : (
        <FavoriteIcon
          className="main-page-heart-icon"
          onClick={deletelikeButtonhandler}
        />
      )}
      {/* <ChatBubbleOutlineSharpIcon className="main-page-icons" />
      <SendSharpIcon className="main-page-icons" />
      <BookmarkBorderIcon className="main-page-bookmark-icon" /> */}
    </div>
  );
}

export default Icons