import React from 'react'
import Header from './Header';
import { BsChevronDown } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GiCircle } from "react-icons/gi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Avatar } from '@mui/material';
function Chat({ setBlurBackground }) {
  return (
    <div>
      <Header setBlurBackground={setBlurBackground} />
      <div className="my-message">
        <div>
          <div className="my-message-message-content">
            <div>
              <GiCircle className="my-message-circle-icon" />
              <IoPaperPlaneOutline className="my-message-paper-plain" />
            </div>
            <div>
              <h2>My message</h2>
              <div>
                Send your private picture or message to your friedn or group
              </div>
              {/* <button
                className="my-message-my-message-btn"
                onClick={messageModalHandler}
              >
                send message
              </button> */}
              {/* <p>room</p>
              <input type="text" onChange={(e)=>setRoom(e.target.value)}/>
              <button onClick={joinRoom}>join Room</button>
              <p>chat</p>
              <input type="text" onChange={(e)=>messageHandler(e.target.value)} />
              <h1>Message:</h1>
              {messageRecevied} */}
            </div>
          </div>
          <div className="my-message-id">
            <div className="my-message-text">
              <strong>ivan4334</strong>{" "}
              <BsChevronDown className="down-arrow-icon" />
            </div>

            <HiOutlinePencilAlt
              className="my-message-message-icon"
              // onClick={messageModalHandler}
            />
          </div>
          <div className="my-message-message-page">
            <div className="my-message-message">
              <Avatar></Avatar>
              <div>
                <div>Yongju Lee</div>
                <div>1 1week</div>
              </div>
            </div>
          </div>
        </div>
        {/* {sendMessage && (
          <MyMessageModal messageModalHandler={messageModalHandler} />
        )} */}
      </div>
    </div>
  );
}

export default Chat