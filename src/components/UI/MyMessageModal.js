import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./MyMessageModal.css";
import { v4 as uuidv4 } from "uuid";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
function MyMessageModal({ messageModalHandler }) {
  const [userList, setUserList] = useState("");
  const [filteredUserList, setFilteredUserList] = useState("");
  const [clickedUserList, setClickedUserList] = useState([]);
  const [filteredUserListShow, setfiltereUserListShow] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");

  const ref = useRef(null);
  const randomRoomNumber = uuidv4();
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
        userList && addCheckedInAPI(userList);
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
        return user.userid.includes(targetValue);
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

  // const createChat = () => {
  //   window.location.href = `/myMessage/${randomRoomNumber}`;
  // };

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
    // console.log(e.target.value)
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

  return (
    <>
      <div
        className="my-message-modal-backdrop"
        onClick={messageModalHandler}
      />
      <Card className="my-message-modal">
        <header className="my-message-modal-header">
          <h2>New message</h2>

          <Link
            to={randomRoomNumber}
            state={{
              randomRoomNumber: randomRoomNumber,
              clickedUserList: clickedUserList,
            }}
            className="my-message-create-new-chat"
          >
            <span>Create</span>
          </Link>
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
                  <div>{user.userid}</div>
                  <div>{user.username}</div>
                </div>
                <input
                  type="radio"
                  className="my-message-recommend-id-radio"
                  value={user.userid}
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
