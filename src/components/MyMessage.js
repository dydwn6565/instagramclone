import React, { useEffect, useState } from "react";
import Header from "./Header";

import "./css/MyMessage.css";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GiCircle } from "react-icons/gi";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { Avatar } from "@mui/material";
import MyMessageModal from "./Modals/MyMessageModal";

import { Link } from "react-router-dom";

function MyMessage({ setBlurBackground }) {
  const [sendMessage, setSendMessage] = useState(false);
  const [username,setUsername] = useState();
  const [userInfo,setUserInfo] = useState();
  const [roomList, setRoomList] = useState([]);
  const [filteredRoomList,setFilteredRoomList] =useState();

  const messageModalHandler = () => {
    setSendMessage((prevState) => !prevState);
  };

  const sortByRoomnumber = (roomJson)=>{
      const filteredArray = [];
      const rooomList =[];
       
      
        roomJson.map((userInfo)=>{
          if (!rooomList.includes(userInfo.roomnumber)) {
            rooomList.push(userInfo.roomnumber);
          };  
        })
        
        rooomList.map((roomnumber) => {
          const filteredByRoomnumber = roomJson.filter((userInfo) => {
            return userInfo.roomnumber === roomnumber;
          });
          filteredArray.push(filteredByRoomnumber)
          
        });
        
      setFilteredRoomList(filteredArray)
        
  }

  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(user)
    console.log(user);
    try {
      const chatRoomList = async () => {
        const roomListData = await fetch(
          `https://instagramserver1.herokuapp.com/chat/getUserRoom/${user.id}`,
          // `http://localhost:8080/chat/getUserRoom/${user.id}`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "POST, GET, OPTIONS, DELETE, PUT, PATCH",
              "Access-Control-Allow-Headers":
                "Access-Control-Allow-Origin, Contect-Type, x-requdsted-with, Authorization",

              "Content-type": "application/json; charset=UTF-8",
            },
            
          }
        );

        if (roomListData.status === 201) {
          const roomJson = await roomListData.json();
          sortByRoomnumber(roomJson)
          
        }
      };
      chatRoomList();
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"))
    setUsername(user.username);
  },[])
  return (
    <>
      <Header setBlurBackground={setBlurBackground} />
      <div className="my-message">
        <div className="my-message-message-content">
          <div>
            <div className="my-message-text">
              <div>
                <strong>{username}</strong>{" "}
                <BsChevronDown className="down-arrow-icon" />
              </div>
              <div>
                <HiOutlinePencilAlt
                  className="my-message-message-icon"
                  onClick={messageModalHandler}
                />
              </div>
            </div>

            <div className="my-message-message-page">
              {filteredRoomList &&
                filteredRoomList.map((chatRoom) => (
                  <>
                    <div key={chatRoom.id} className="my-message-message">
                      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
                      <div>
                        <Link
                          style={{ textDecoration: "none" }}
                          state={{
                            randomRoomNumber: chatRoom[0].roomnumber,
                            chatRoom: chatRoom,
                            newChat: false,
                          }}
                          to={`/myMessage/${chatRoom[0].roomnumber}`}
                        >
                          <div className="my-message-username">
                            {chatRoom.map((chat) => (
                              <>
                                {chat.name !== userInfo.name && (
                                  <span>{chat.name} </span>
                                )}
                              </>
                            ))}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className="my-message-right-side">
          <div>
            <GiCircle className="my-message-circle-icon" />
            <IoPaperPlaneOutline className="my-message-paper-plain" />
          </div>
          <div className="my-message-right-side-my-message">
            <h2>My message</h2>
            <div>
              Send your private picture or message to your friend or group
            </div>
            <button
              className="my-message-my-message-btn"
              onClick={messageModalHandler}
            >
              send message
            </button>
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
