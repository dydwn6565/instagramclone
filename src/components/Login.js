import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./css/Login.css";
import useInput from '../hooks/use-input.js'
import LoginImage from "./LoginImage";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Row, Col } from "react-grid-system";
// import { styled } from "@mui/material/styles";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));



function Login() {


  const {
    value: enteredUserId,
    isValue: userIdIsValid,
    hasError: userIdInputHasError,
    valueChangeHandler: userIdChangedHandler,
    inputBlurHandler: userIdBlurHandler,
    reset: resetUserIdInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValue: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 10);


  let formIsValid =false;

  if(userIdIsValid &&enteredPasswordIsValid ){
    formIsValid = true;
  }
  // const userIdIsValid = enteredUserId.trim() !== "";
  // const userInputIsInvalid = !userIdIsValid && userIdTouched;

  // const passwordIsValid = password.trim() !== "";
  // const passwordInputIsInvalid = !userIdIsValid && userIdTouched;

const formSubmissionHandler = (e)=>{
  e.preventDefault();

  if(!enteredUserId){
    return;
  }

  resetUserIdInput();
  resetPasswordInput();
};

// const emailInputBlurHandler = (event) =>{
//   setEnteredEmailTouched(true)
// }


const userInputClasses = userIdInputHasError ? 'form-control invalid' : 'form-control';

const passwordInputClasses = passwordInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <>
      {/* <div className="login-page-container"> */}
      <Container>
        <Row>
          <Col sm={5}>
            <LoginImage />
          </Col>
          <Col sm={5}>
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
                    <p className="error-text">Please enter a valid email.</p>
                  )}
                  <input
                    type="password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    value={enteredPassword}
                  />
                  {passwordInputHasError && (
                    <p className="error-text">Please enter a valid password</p>
                  )}
                  <div className="login-show-password">
                    <strong> show password</strong>
                  </div>
                  <button className="login-button">Login</button>
                </form>
                <hr className="hr" />

                <div className="login-with-facebook">Login with Facebook</div>
                <div className="forget-login">
                  <Link to="/accounts/password/reset">
                    {" "}
                    Did you forget your password
                  </Link>
                </div>
              </div>

              <div className="login-no-account">
                Don't you have account ?<Link to="/accounts/emailsignup">SignUp</Link>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
