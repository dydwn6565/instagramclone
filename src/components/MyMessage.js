import React, { useEffect, useState } from "react";
import Header from "./Header";
import io from "socket.io-client";

import "./css/MyMessage.css";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GiCircle } from "react-icons/gi";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { Avatar } from "@mui/material";
import MyMessageModal from "./Modals/MyMessageModal";

import { Link } from "react-router-dom";

const socket = io.connect("http://localhost:8080");

function MyMessage({ setBlurBackground }) {
  const [sendMessage, setSendMessage] = useState(false);
  const [message, setMessage] = useState("");
  // const [messageRecevied, setMessageReceived] = useState("");
  const [roomList, setRoomList] = useState([]);

  // const [selectedUserList, setSelectedUserList] = useState([]);
const userid=2;
  const messageModalHandler = () => {
    setSendMessage((prevState) => !prevState);
  };



  useEffect(() => {
    try {
      const chatRoomList = async () => {
        const roomListData = await fetch(
          `http://localhost:8080/chat/getUserRoom/${userid}`,
          {
            method: "GET",
          }
        );
        
        if (roomListData.status === 201) {
          const roomJson = await roomListData.json();
          console.log(roomJson)
          setRoomList(roomJson);
        }
      };
      chatRoomList();
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <>
      
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
              <button
                className="my-message-my-message-btn"
                onClick={messageModalHandler}
              >
                send message
              </button>
       
            </div>
          </div>
          <div className="my-message-id">
            <div className="my-message-text">
              <strong>ivan4334</strong>{" "}
              <BsChevronDown className="down-arrow-icon" />
            </div>

            <HiOutlinePencilAlt
              className="my-message-message-icon"
              onClick={messageModalHandler}
            />
          </div>
          <div className="my-message-message-page">
            {roomList &&
              roomList.map((chatRoom) => (
                <>
                  {console.log(chatRoom.id)}
                  <div className="my-message-message">
                    <Avatar></Avatar>
                    <div>
                      <Link
                        state={{
                          roomtableid: chatRoom.id,
                          randomRoomNumber: chatRoom.roomnumber,
                          clickedUserList: [chatRoom.username],
                          newChat: false,
                        }}
                        to={`/myMessage/${chatRoom.roomnumber}`}
                      >
                        {chatRoom.roomnumber}
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
        {sendMessage && (
          <MyMessageModal messageModalHandler={messageModalHandler} />
        )}
      </div>
    </>
  );
}

export default MyMessage;
