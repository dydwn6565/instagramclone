import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./css/Login.css";
import useInput from "../hooks/use-input.js";
import LoginImage from "./LoginImage";
import { useDispatch } from "react-redux";
import { userActions } from "../store/index";

import { Container, Row, Col } from "react-grid-system";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(true);
  const [userLocation, setUserLocation] = useState({});
  const linkToMain = useRef();
  const {
    value: enteredUserId,
    isValue: userIdIsValid,
    hasError: userIdInputHasError,
    valueChangeHandler: userIdChangedHandler,
    inputBlurHandler: userIdBlurHandler,
    // reset: resetUserIdInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValue: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    // reset: resetPasswordInput,
  } = useInput((value) => value.length > 5);

  let formIsValid = false;

  if (userIdIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  // const userIdIsValid = enteredUserId.trim() !== "";
  // const userInputIsInvalid = !userIdIsValid && userIdTouched;

  // const passwordIsValid = password.trim() !== "";
  // const passwordInputIsInvalid = !userIdIsValid && userIdTouched;

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
      const login = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
          userid: enteredUserId,
          password: enteredPassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (login.status === 200) {
        const token = await login.json();
        console.log(token.accessToken);

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
        const getUserInfo = await fetch(
          `http://localhost:8080/users/${enteredUserId}`,
          {
            method: "GET",
          }
        );
        const jsonUser = await getUserInfo.json();
        console.log(jsonUser);

        // const userid = jsonUser.userid;
        // const name = jsonUser.name;
        // const username = jsonUser.username;

        // dispatch(
        //   userActions.updateUser({
        //     userid: userid,
        //     name: name,
        //     username: username,
        //   })
        // );
        const userInfo = {id:jsonUser.id, userid:jsonUser.userid, username:jsonUser.username,name:jsonUser.name}
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
        insertUserLocation(jsonUser.id);
        
        
      }
    } catch (error) {
      alert(error.message);
    }

    // resetUserIdInput();
    // resetPasswordInput();
  };

  const insertUserLocation = async (userId) => {
    const userLocationResult = await fetch(
      "http://localhost:8080/insert/login/activity",
      {
        method: "POST",
        body: JSON.stringify({
          userLocation,
          userId,
        }),
        headers: {
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

            <LoginImage />
            <div className="login-container">
              <div className="login">
                <div className="login-title">Instagram</div>
                <form onSubmit={formSubmissionHandler} className="login-form">
                  <input
                    type="text"
                    onChange={userIdChangedHandler}
                    onBlur={userIdBlurHandler}
                    value={enteredUserId}
                  />
                  {userIdInputHasError && (
                    <p className="error-text">Please check your id</p>
                  )}
                  <input
                    type={passwordShown ? "password" : "text"}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    value={enteredPassword}
                  />
                  <div className="login-show-password">
                    <strong
                      onClick={() =>
                        setPasswordShown((prevState) => !prevState)
                      }
                    >
                      {" "}
                      show password
                    </strong>
                  </div>
                  {passwordInputHasError && (
                    <p className="error-text">Please check your password</p>
                  )}
                  <button className="login-button">Login</button>
                </form>
                <p className="hr-row">
                  {" "}
                  ----------------------or---------------------
                </p>

                <div className="login-with-facebook">Login with Facebook</div>
                <div className="forget-login">
                  <Link to="/accounts/password/reset">
                    {" "}
                    Did you forget your password
                  </Link>
                </div>
              </div>

              <div className="login-no-account">
                Don't you have account ?
                <Link to="/accounts/emailsignup">SignUp</Link>
              </div>

              <div className="login-download-app">
                Please download application
              </div>
              <div className="login-images">
                <img
                  className="app-store-button"
                  src="https://i.stack.imgur.com/xHgSL.png"
                  alt=""
                />
                <img
                  className="google-store-button"
                  src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
                  alt=""
                />
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
