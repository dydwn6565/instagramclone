import React, { useState } from 'react'
import Header from './Header';
import { BsChevronDown } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GiCircle } from "react-icons/gi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Avatar } from '@mui/material';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import io from  "socket.io-client"

let socket;
function Chat({ setBlurBackground }) {
  const [nameList, setNameList] = useState([]);
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const ENDPOINT ='localhost:8080'
  // console.log(data);
  
  
  
  
  useEffect(() => {
    // const chatRoomAndUserList = async () => {
      const data =  location.state;
      const { randomRoomNumber, clickedUserList } = data;
      setRoom(randomRoomNumber);
      setNameList(clickedUserList);
      socket = io(ENDPOINT);

      console.log(data);
      console.log(room);
      

        socket.emit(
          "join",
          { clickedUserList, randomRoomNumber },
          ({ error }) => {
            alert(error);
          }
        );
        return () => {
          // socket.emit("disconnect");
          socket.disconnect();
          socket.off();
        };
      
      // }
    // chatRoomAndUserList();
  }, [ENDPOINT, location]);

useEffect(()=>{
  
    socket.on("message", (message) => {
      console.log("line47" + message);
      setMessages([...messages, message]);
    });
  
},[messages])

  const sendMessage =(event)=>{
    
    event.preventDefault();
    if(message){
      socket.emit('sendMessage',message,()=> setMessage(''))
    }
  }
  console.log(socket)
  console.log(messages)
  console.log(message)
  return (
    <div>
      <Header setBlurBackground={setBlurBackground} />
      <input value={message} onChange={(event)=>setMessage(event.target.value)} onKeyPress={event=>event.key ==='Enter'? sendMessage(event):null}/>
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
        
            </div>
          </div>
          <div className="my-message-id">
            <div className="my-message-text">
              <strong>ivan4334</strong>{" "}
              <BsChevronDown className="down-arrow-icon" />
            </div>

            <HiOutlinePencilAlt
              className="my-message-message-icon"
              
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