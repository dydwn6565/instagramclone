import React, { useRef, useState } from "react";
import Header from "./Header";
import { BsChevronDown, BsPlusCircle } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import io from "socket.io-client";
import { FiInfo } from "react-icons/fi";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import "./css/Chat.css";
import { generateBase64FromImage } from "./Utils/Image";
let socket;
function Chat({ setBlurBackground }) {
  const [nameList, setNameList] = useState([]);
  const [currentSocketId, setCurrentSocketId] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [images, setImages] = useState("");
  const location = useLocation();
  const ENDPOINT = "localhost:8080";
  const hiddenFileInput = useRef(null);
  

  useEffect(() => {
    
    socket = io(ENDPOINT);
    const data = location.state;
    
    const { socketId, randomRoomNumber, clickedUserList, newChat } = data;
   
    setRoom(randomRoomNumber);
    setNameList(clickedUserList);
    console.log(clickedUserList)
    setCurrentSocketId(socketId);
    

    if (newChat) {
      console.log("line46" + socket.id);
      socket.emit(
        "join",
        {socketId, clickedUserList, randomRoomNumber },
        ({ error }) => {}
      );
    } else {
     
      console.log(socketId);
      socket.emit("rejoin", { socketId, currentRoomNumber: randomRoomNumber });
    }
      

    // return () => {
    // socket.emit("disconnect");
    // socket.disconnect();
    // socket.off();
    // };

    // }
    // chatRoomAndUserList();
  }, [ENDPOINT, location]);

  useEffect(() => {

    socket.on("message", (message) => {
      
      setMessages([...messages, message]);
      
    });
  }, [messages]);


  useEffect(() => {

    socket.on("rejoinMessage", (message) => {
      
      setMessages([...message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
  
    
    if (message) {
      
        socket.emit(
          "sendMessage",
           currentSocketId,
          message,
          () => setMessage("")
        );
      }
    }
  

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMessage(emojiObject.emoji);
  };

  const emojiHanlder = () => {
    setEmojiPicker((prevVal) => !prevVal);
  };

  const emojiCloser = () => {
    setEmojiPicker(false);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          socket.emit("sendMessage",currentSocketId, b64, () => setMessage(""));
          // setMessage((current) => [...current, b64]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      {message && emojiPicker && chosenEmoji && (
        <>
          <div className="emojiPicker-background" onClick={emojiCloser}></div>
        </>
      )}
      <Header setBlurBackground={setBlurBackground} />
      {console.log(messages[0])}
      {console.log(messages)}
      <div className="my-message">
        <div>
          <div className="my-message-message-chat-content">
            <div className="my-message-chat-head">
              <Avatar className="my-message-chat-head-avatar" />
              {nameList.map((user) => (
                <>
                  <div key={user.id} className="my-message-chat-head-id">
                    <span key={user.id}>{user}</span>
                  </div>
                </>
              ))}
            </div>
            <FiInfo className="info-icon" />
            <div className="my-message-chat-container">
              {messages &&
                messages.map((item) => (
                  <>
                    {item.name === "admin" ? (
                      <div className="my-message-chat-send">
                        <div>
                          <div className="my-message-chat-message">
                            {item.name}
                          </div>

                          <div className="my-message-chat-message">
                            {item.text}
                          </div>
                        </div>
                        <Avatar />
                      </div>
                    ) : (
                      <div className="my-message-chat-receive">
                        <Avatar />
                        <div>
                          {console.log(item.name)}
                          {console.log(item.text)}
                          <div>{item.name}</div>
                          {item.text.split(",")[0] ===
                          "data:image/jpeg;base64" ? (
                            <img
                              src={item.text}
                              alt=""
                              className="my-message-chat-image"
                            />
                          ) : (
                            <div>{item.text}</div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ))}
            </div>
            <div className="my-message-chat-footer">
              <BsEmojiSmile className="emoji-picker" onClick={emojiHanlder} />
              <input
                type="text"
                placeholder="type message..."
                className="my-message-chat-input"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) =>
                  event.key === "Enter" ? sendMessage(event) : null
                }
              />
              <input
                ref={hiddenFileInput}
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/png, image/jpg, image/gif, image/jpeg"
              />
              <div>
                <AiOutlinePicture
                  onClick={handleClick}
                  className="image-picture-icon"
                />
              </div>
            </div>
            <div className="emoji-picker-position">
              {emojiPicker && <Picker onEmojiClick={onEmojiClick} />}
            </div>
          </div>
          <div className="my-message-id">
            <div className="my-message-text">
              <strong>ivan4334</strong>{" "}
              <BsChevronDown className="down-arrow-icon" />
            </div>

            <HiOutlinePencilAlt className="my-message-message-icon" />
          </div>
          <div className="my-message-message-page">
            <div className="my-message-message">
              <Avatar></Avatar>
              <div>
                {nameList.map((user) => (
                  <span key={user.id}>{user}</span>
                ))}
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

export default Chat;
