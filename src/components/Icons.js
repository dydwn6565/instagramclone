import React from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
      
    </div>
  );
}

export default Icons