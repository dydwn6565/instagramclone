import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./MyMessageModal.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
function MyMessageModal({ messageModalHandler }) {
  const [userList, setUserList] = useState("");
  const [filteredUserList,setFilteredUserList] = useState("");
  useEffect(() => {
    const getUserList = async () => {
      const userListData = await fetch("http://localhost:8080/users", {
        method: "Get",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      
      if (userListData.status === 201) {
        const userListJson = await userListData.json();
        setUserList(userListJson);
        
      }
    };
    getUserList();
  },[]);

  const userSearchHandler =(targetValue) =>{
      console.log(targetValue)

      if(targetValue !==""){
        const filteredUserLIst = userList.users.filter((user)=>{
          return user.userid.includes(targetValue)
        })
        setFilteredUserList(filteredUserLIst);
        console.log(filteredUserList)
      }else{
        setFilteredUserList("")
      }
  }

  const createChat = () =>{
    const randomRoomNumber = uuidv4();
    
    window.location.href=`/myMessage/${randomRoomNumber}`
    
  }


  return (
    <>
      <div
        className="my-message-modal-backdrop"
        onClick={messageModalHandler}
      />
      <Card className="my-message-modal">
        <header className="my-message-modal-header">
          <h2>New message</h2>

          {/* <Link to="/"></Link> */}
          <span onClick={createChat}>Create</span>
        </header>
          <div className="hr"></div>
        {/* <FaPhotoVideo className="modal-photo-video" /> */}
        <div className="my-message-modal-content">
          <p>
            <strong> Receiver:</strong>
          </p>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => userSearchHandler(e.target.value)}
          />
        </div>
        <div className="hr"></div>

        <div className="my-message-search-container">
          {filteredUserList &&
            filteredUserList.map((user) => (
              <div className="my-message-user-info-container">
                <Avatar></Avatar>
                <div className="my-message-user-info-id">
                  <div>{user.userid}</div>
                  <div>{user.username}</div>
                </div>
                <input type="radio" className="my-message-recommend-id-radio" />
              </div>
            ))}
        </div>
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

export default MyMessageModal;
