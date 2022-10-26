import React, { useRef, useState } from "react";
import Header from "./Header";
import { BsChevronDown } from "react-icons/bs";
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

  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [loginUserInfo, setLoginUserInfo] = useState();
  const [username,setUsername] = useState();
  const location = useLocation();
  const ENDPOINT = "http://localhost:8080";
  const hiddenFileInput = useRef(null);
  const [chatRoom,setChatRoom] = useState();
  

  useEffect(() => {
    socket = io(ENDPOINT);
    console.log(socket)
    const data = location.state;
    const username = JSON.parse(localStorage.getItem("userInfo"));
    setUsername(username.username)
    const { roomtableid, randomRoomNumber,chatRoom, clickedUserList, newChat } = data;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(randomRoomNumber)
    setLoginUserInfo(userInfo)
    setRoom(randomRoomNumber);
    setNameList(clickedUserList);
    setChatRoom(chatRoom)
    
    

    if (newChat) {
      
      const userid = userInfo?.id;
      socket.emit(
        "join",
        { userid, clickedUserList, randomRoomNumber },
        ({ error }) => {}
      );
    } else {
      

      socket.emit("rejoin", { roomtableid, randomRoomNumber });
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
      setMessages([...messages, ...message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const userid = loginUserInfo?.id;
      console.log("line 84 " +userid)
      console.log("line 84 " + room);
      console.log(message)
    if (message) {
      socket.emit("sendMessage", { room, userid, message }, () =>
        setMessage("")
      );
    }
  };

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
    const userid = loginUserInfo?.id;
    if (fileUploaded) {
      generateBase64FromImage(fileUploaded)
        .then((b64) => {
          // let message= b64;
          socket.emit("sendImage", { room, userid, b64 }, () => setMessage(""));
          // setMessage((current) => [...current, b64]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  console.log(messages);
  return (
    <div>
      {message && emojiPicker && chosenEmoji && (
        <>
          <div className="emojiPicker-background" onClick={emojiCloser}></div>
        </>
      )}
      <Header setBlurBackground={setBlurBackground} />

      <div className="chat">
        <div>
          <div className="my-chat-id">
            <div className="my-chat-text">
              <strong>{username}</strong>{" "}
              <BsChevronDown className="down-arrow-icon" />
            </div>
          </div>
          <HiOutlinePencilAlt className="my-chat-message-icon" />
          <div className="my-chat-message-page">
            <div className="my-chat-message">
              <Avatar
                className="my-chat-message-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
              />
              <div>
                {chatRoom?.map((user) => (
                  <span key={user.id}>{user.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-message-message-chat-content">
            <div className="my-message-chat-head">
              <Avatar
                className="my-message-chat-head-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
              />

              {chatRoom?.map((user) => (
                <>
                  <div key={user.id} className="my-message-chat-head-id">
                    <span key={user.id}>{user.name}</span>
                  </div>
                </>
              ))}
            </div>
            <FiInfo className="info-icon" />
            <div
              className="my-message-chat-container"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
            >
              {messages &&
                messages.map((item) => (
                  <>
                    {item.id === loginUserInfo?.id ? (
                      <div className="my-message-chat-send">
                        <div>
                          <div className="my-message-chat-message">
                            {loginUserInfo.name}
                          </div>

                          <div className="my-message-chat-message-text">
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
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU" />
                      </div>
                    ) : (
                      <div className="my-message-chat-receive">
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
                        <div>
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
              {/* <div>
                <AiOutlinePicture
                  onClick={handleClick}
                  className="image-picture-icon"
                />
              </div> */}
            </div>
            <div className="emoji-picker-position">
              {emojiPicker && <Picker onEmojiClick={onEmojiClick} />}
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
