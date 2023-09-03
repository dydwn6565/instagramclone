import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./MyMessageModal.css";
import { v4 as uuidv4 } from "uuid";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import { io } from "socket.io-client";

let socket;
function MyMessageModal({ messageModalHandler }) {
  const [userList, setUserList] = useState("");
  const [filteredUserList, setFilteredUserList] = useState("");
  const [clickedUserList, setClickedUserList] = useState([]);
  const [filteredUserListShow, setfiltereUserListShow] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");

  
  const ENDPOINT = "https://instagramserver1.herokuapp.com";
  const linkToChat = useRef(null);
  const ref = useRef(null);
  const randomRoomNumber = uuidv4();
  useEffect(() => {
    socket = io(ENDPOINT);
    const getUserList = async () => {
      try {
        const userListData = await fetch(
          "https://instagramserver1.herokuapp.com/users",
          // "http://localhost:8080/users",
          {
            method: "Get",
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

        if (userListData.status === 201) {
          const userListJson = await userListData.json();
          setUserList(userListJson);
          userList && addCheckedInAPI(userList);
        }
      } catch (error) {
        alert(error);
      }
    };

    const addCheckedInAPI = (userList) => {
      
      const addedChecked = userList.users.map((user) => {
        return { ...user, checked: false };
      });
      setFilteredUserList(addedChecked);
    };

    getUserList();
  }, []);

  const userSearchHandler = (targetValue) => {
    

    if (targetValue !== "") {
      const filteredUserLIst = userList.users.filter((user) => {
        return user.name.includes(targetValue);
      });
      

      setSearchedUser(targetValue);
      setFilteredUserList(filteredUserLIst);
      setfiltereUserListShow(true);
    } else {
      setFilteredUserList("");
      ref.current.value = "";
    }
  };

  const radioButtonOnchangeHandler = (e) => {
    setClickedUserList((users) => [...users, e.target.value]);
    const updatedFilteredList = filteredUserList.filter((user) => {
      if (user.userid === e.target.value) {
        user.checked = !user.checked;
        return user;
      } else {
        return user;
      }
    });

    setFilteredUserList(updatedFilteredList);
    setfiltereUserListShow(false);
    ref.current.value = "";
    
    
  };

  const deleteReceiver = (id) => {
    
    const deletedOneUser = clickedUserList.filter((user) => {
      return user !== id;
    });

    setClickedUserList(deletedOneUser);

    const updatedFilteredList = filteredUserList.filter((user) => {
      if (user.userid === id) {
        user.checked = !user.checked;
        return user;
      } else {
        return user;
      }
    });
    
    setFilteredUserList(updatedFilteredList);
  };

  const joinChatRoom = () => {
    

    linkToChat.current.click();
  };

  return (
    <> 
      <div
        className="my-message-modal-backdrop"
        onClick={messageModalHandler}
      />
     
      <Card className="my-message-modal">
        <header className="my-message-modal-header">
          <h2>New message</h2>

          {socket !== undefined &&  (
            <Link
              to={randomRoomNumber}
              state={{
                socketId: socket.id,
                randomRoomNumber: randomRoomNumber,
                clickedUserList: clickedUserList,
                newChat: true,
              }}
              className="my-message-create-new-chat"
            >
              <span
                className="my-message-create-new-chat"
                onClick={joinChatRoom}
              >
                Create
              </span>
            </Link>
           )} 
        </header>
        <div className="hr"></div>

        <div className="my-message-modal-content">
          <p>
            <strong> Receiver:</strong>
          </p>
          <div className="my-message-receiver">
            {clickedUserList.map((clickedUser) => (
              <>
                
                <div className="my-message-receiver-name">
                  <div>{clickedUser}</div>
                  <MdClose
                    className="my-message-receiver-close"
                    id={clickedUser}
                    onClick={(e) => deleteReceiver(e.target.id)}
                  />
                </div>
              </>
            ))}
          </div>
          <input
            type="text"
            placeholder="search"
            ref={ref}
            onChange={(e) => userSearchHandler(e.target.value)}
          />
        </div>
        <div className="hr"></div>

        <div className="my-message-search-container">
          {filteredUserList &&
            filteredUserListShow &&
            filteredUserList.map((user) => (
              <div className="my-message-user-info-container" key={user.userid}>
                <Avatar></Avatar>
                <div className="my-message-user-info-id">
                  <div>{user.name}</div>
                  <div>{user.username}</div>
                </div>
                <input
                  type="radio"
                  className="my-message-recommend-id-radio"
                  value={user.name}
                  checked={user.checked}
                  readOnly
                  // onClick={(e) => radioButtonHandler(e)}
                  onClick={(e) => radioButtonOnchangeHandler(e)}
                />
              </div>
            ))}
        </div>
        
      </Card>

    </>
  );
}

export default MyMessageModal;
