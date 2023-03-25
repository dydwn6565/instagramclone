import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./css/Login.css";
import useInput from "../hooks/use-input.js";
import LoginImage from "./LoginImage";

import { useEffect } from "react";

function Login() {
  
  const [passwordShown, setPasswordShown] = useState(true);
  const [userLocation, setUserLocation] = useState({});
  const linkToMain = useRef();
  const {
    value: enteredUserId,
    isValue: userIdIsValid,
    hasError: userIdInputHasError,
    valueChangeHandler: userIdChangedHandler,
    inputBlurHandler: userIdBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValue: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length > 5);

  let formIsValid = false;

  if (userIdIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const  autoFilloutFoam =() =>{

  }
  useEffect(() => {
    const getLatAndLong = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    };
    getLatAndLong();
  }, []);

  const formSubmissionHandler = async (e) => {
    e.preventDefault();

    if (!enteredUserId) {
      return;
    }
    try {
      const login = await fetch(
        "https://instagramserver1.herokuapp.com/login",
        {
          method: "POST",

          body: JSON.stringify({
            userid: enteredUserId,
            password: enteredPassword,
          }),
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
      if (login.status === 200) {
        const token = await login.json();
        

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
        
        const getUserInfo = await fetch(
          `https://instagramserver1.herokuapp.com/usersByUserId/${enteredUserId}`,
          {
            method: "GET",
          }
        );
        const jsonUser = await getUserInfo.json();
 
        const userInfo = {id:jsonUser.id, userid:jsonUser.userid, username:jsonUser.username,name:jsonUser.name}
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
        insertUserLocation(jsonUser.id);
        linkToMain.current.click();
        
      }
    } catch (error) {
      alert(error.message);
    }

    // resetUserIdInput();
    // resetPasswordInput();
  };

  const insertUserLocation = async (userId) => {
    const userLocationResult = await fetch(
      "https://instagramserver1.herokuapp.com/insert/login/activity",
      {
        method: "POST",
        body: JSON.stringify({
          userLocation,
          userId,
        }),
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
    if (userLocationResult.status === 201) {
      console.log("success");
    }
    
  };

  return (
    <>
      <div className="login-outside-container">
        {/* <LoginImage /> */}
        <div className="login-container">
          <div className="login">
            <div className="login-title">Log-In</div>
            <form onSubmit={formSubmissionHandler} className="login-form">
              <input
                type="text"
                placeholder="UserId"
                onChange={userIdChangedHandler}
                onBlur={userIdBlurHandler}
                value={enteredUserId}
              />
              {userIdInputHasError && (
                <p className="error-text">Please check your id</p>
              )}
              <input
                type={passwordShown ? "password" : "text"}
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              <div className="login-show-password">
                <div />
                <div>
                  <strong
                    onClick={() => setPasswordShown((prevState) => !prevState)}
                  >
                    {" "}
                    show password
                  </strong>
                </div>
              </div>
              {passwordInputHasError && (
                <p className="error-text">Please check your password</p>
              )}
              <button className="login-button">Login</button>
            </form>
          </div>
          <div className="loginInfo">
            <div>UserId = 1234567890</div>
            <div>password = 123456</div>
          </div>

          <div className="login-no-account">
            <span> Don't you have account ? </span>

            <Link to="/accounts/emailsignup">&nbsp; SignUp</Link>
          </div>
        </div>
        <Link ref={linkToMain} to="/" hidden>
          s
        </Link>
      </div>
    </>
  );
}

export default Login;
