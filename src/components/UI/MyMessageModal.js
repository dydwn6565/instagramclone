import { Avatar, Button } from '@mui/material';
import React from 'react'
import Card from './Card';
import "./MyMessageModal.css"
function MyMessageModal({ messageModalHandler }) {
  return (
    <>
      <div
        className="my-message-modal-backdrop"
        onClick={messageModalHandler}
      />
        <Card className="my-message-modal">
      
          <header className="my-message-modal-header">
            <h2>New message</h2>
            <div className="hr"></div>
          </header>
          {/* <FaPhotoVideo className="modal-photo-video" /> */}
          <div className="my-message-modal-content">
            <p>
              <strong> Receiver:</strong>
            </p>
            <input type="text" value="search" />
          </div>
          <div className="hr"></div>
          <div className="my-message-recommend">
            <h5>Recommend</h5>
            <div className="my-message-recommend-list">
              <Avatar></Avatar>
              <div className="my-message-recommend-id">
                <div>dydwn6565</div>
                <div>Yongju Lee</div>
              </div>
              <input type="radio" className="my-message-recommend-id-radio" />
            </div>
            
          </div>
      
        </Card>
    </>
  );
}

export default MyMessageModal