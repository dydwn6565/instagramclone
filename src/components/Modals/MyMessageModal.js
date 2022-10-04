import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./MyMessageModal.css";
import { v4 as uuidv4 } from "uuid";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

let socket;
function MyMessageModal({ messageModalHandler }) {
  const [userList, setUserList] = useState("");
  const [filteredUserList, setFilteredUserList] = useState("");
  const [clickedUserList, setClickedUserList] = useState([]);
  const [filteredUserListShow, setfiltereUserListShow] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");

  const userInfo = useSelector((state) => state);
  const ENDPOINT = "localhost:8080";
  const linkToChat = useRef(null);
  const ref = useRef(null);
  const randomRoomNumber = uuidv4();
  useEffect(() => {
    socket = io(ENDPOINT);
    const getUserList = async () => {
      try {
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
          userList && addCheckedInAPI(userList);
        }
      } catch (error) {
        alert(error);
      }
    };

    const addCheckedInAPI = (userList) => {
      console.log(userList);
      const addedChecked = userList.users.map((user) => {
        return { ...user, checked: false };
      });
      setFilteredUserList(addedChecked);
    };

    getUserList();
  }, []);

  const userSearchHandler = (targetValue) => {
    console.log(targetValue);
    console.log(ref.current.value);

    if (targetValue !== "") {
      const filteredUserLIst = userList.users.filter((user) => {
        return user.name.includes(targetValue);
      });
      // addCheckedInAPI(filteredUserLIst)

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
    // setSearchedUser("");
    
  };

  const deleteReceiver = (id) => {
    console.log(id);
    console.log(clickedUserList);
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
    console.log(updatedFilteredList);
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
                {console.log(clickedUser)}
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
        <div className="my-message-recommend">
          <h5>Recommend</h5>
          <div className="my-message-recommend-list">
            <Avatar></Avatar>
            <div className="my-message-recommend-id">
              <div>dydwn6565</div>
              <div>Yongju Lee</div>
            </div>
            <input
              type="radio"
              className="my-message-recommend-id-radio"
              // onChange={(e) => radioButtonHandler(e.target.value)}
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default MyMessageModal;
