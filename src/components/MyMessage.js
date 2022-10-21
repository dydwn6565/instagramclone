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
import { useSelector } from "react-redux";
function MyMessage({ setBlurBackground }) {
  const [sendMessage, setSendMessage] = useState(false);

  const [roomList, setRoomList] = useState([]);
  const [filteredRoomList,setFilteredRoomList] =useState();
// const userids = useSelector((state) => state.user);
  // const userid = 2;
  const messageModalHandler = () => {
    setSendMessage((prevState) => !prevState);
  };

  const sortByRoomnumber = (roomJson)=>{
      const filteredArray = [];
      const rooomList =[];
      
      // while (roomJson) {
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
          console.log(filteredByRoomnumber);
        });
        setFilteredRoomList(filteredArray)
        // console.log(filteredArray);
        // if(!subArray.includes());
        // delete roomJson[0]
        //  roomJson = roomJson.filter((e) => {return e !== undefined || e !==null});
        // console.log(roomJson )
        // console.log(subArray)
      // }
  }

  useEffect(() => {
    
    const userid = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userid.id);
    try {
      const chatRoomList = async () => {
        const roomListData = await fetch(
          `http://localhost:8080/chat/getUserRoom/${userid.id}`,
          {
            method: "GET",
          }
        );

        if (roomListData.status === 201) {
          const roomJson = await roomListData.json();
          sortByRoomnumber(roomJson)
          console.log(roomJson);
          setRoomList(roomJson);
        }
      };
      chatRoomList();
    } catch (error) {
      alert(error);
    }
  }, []);
// console.log(userids);
  return (
    <>
      <Header setBlurBackground={setBlurBackground} />
      <div className="my-message">
        <div className="my-message-message-content">
          <div>
            <div className="my-message-text">
              <div>
                <strong>ivan4334</strong>{" "}
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
                            // roomtableid: chatRoom.id,
                            randomRoomNumber: chatRoom[0].roomnumber,
                            // clickedUserList: [chatRoom.username],
                            chatRoom :chatRoom,
                            newChat: false,
                          }}
                          to={`/myMessage/${chatRoom[0].roomnumber}`}
                        >
                          <div className="my-message-username">
                            {chatRoom.map(chat =>(
                              <>
                                <span>{chat.name  } </span>
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

          <div className="my-message-right-side">
            <div>
              <GiCircle className="my-message-circle-icon" />
              <IoPaperPlaneOutline className="my-message-paper-plain" />
            </div>
            <div>
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
        </div>

        {sendMessage && (
          <MyMessageModal messageModalHandler={messageModalHandler} />
        )}
      </div>
    </>
  );
}

export default MyMessage;
