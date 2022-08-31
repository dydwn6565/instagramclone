import { Button } from "@mui/material";
import React from "react";
import { FaPhotoVideo } from "react-icons/fa";

function MessageModalFirstPage({
  message,
  handleClick,
  hiddenFileInput,
  handleChange,
}) {
  return (
    <>
      <FaPhotoVideo className="modal-photo-video" />
      <div className="modal-content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <Button onClick={handleClick}>Select From Computer</Button>

        <input
          ref={hiddenFileInput}
          type="file"
          onChange={handleChange}
          name="image"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
      </footer>
    </>
  );
}

export default MessageModalFirstPage;
