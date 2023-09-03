import React from 'react'
import "./css/SignUp.css"
import { BsXCircle } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import useInput from '../hooks/use-input';
import { Link } from "react-router-dom";
function SignUp() {
const regex = /[^A-Za-z0-9 ]+/;

const {
  value: enteredUserId,
  isValue: enteredUserIdIsValid,
  hasError: UserIdInputHasError,
  valueChangeHandler: UserIdChangeHandler,
  inputBlurHandler: UserIdBlurHandler,
  reset: resetUserIdInput,
} = useInput(
  (value) =>
    value.trim().includes("@") ||
    (
    Number.isInteger(Number(value.trim())) === true &&
    value.trim().length ===10)
);

const {
  value: enteredName,
  isValue: enteredNameIsValid,
  hasError: enteredNameHasError,
  valueChangeHandler: enteredNameChangeHandler,
  inputBlurHandler: enteredNameBlurHandler,
  reset: resetEnteredName,
} = useInput((value) => value.trim().length > 0);

const {
  value: enteredUserName,
  isValue: enteredUserNameIsValid,
  hasError: enteredUserNameHasError,
  valueChangeHandler: enteredUserNameChangeHandler,
  inputBlurHandler: enteredUserNameBlurHandler,
  reset: resetEnteredUserName,
} = useInput((value) => !regex.test(value.trim()));

const {
  value: enteredPassword,
  isValue: enteredPasswordIsValid,
  hasError: passwordInputHasError,
  valueChangeHandler: passwordChangeHandler,
  inputBlurHandler: passwordBlurHandler,
  reset: resetPasswordInput,
} = useInput((value) => value.trim().length > 5);


  let formIsValid = false;

  if (
    enteredUserIdIsValid &&
    enteredNameIsValid &&
    enteredUserNameIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

const formSubmissionHandler = (e) => {
  e.preventDefault();

  if (!enteredUserId) {
    return;
  }
createUser();
  resetUserIdInput();
  resetEnteredName();
  resetEnteredUserName();
  resetPasswordInput();
  
};

const createUser=async ()=>{
  const dataForm = new FormData();
    dataForm.append("userid", enteredUserId);
    dataForm.append("name", enteredName);
    dataForm.append("password", enteredPassword);
    dataForm.append("username", enteredUserName);
    
    
    await fetch("https://instagramserver1.herokuapp.com/users", {
      // await fetch("http://localhost:8080/users", {

    
      method: "POST",
      body: dataForm,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "POST, GET, OPTIONS, DELETE, PUT, PATCH",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Origin, Contect-Type, x-requdsted-with, Authorization",

        "Content-type": "application/json; charset=UTF-8",
      },
    });
    window.location.href="/login"
}

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div>
          <h1> Sign Up</h1>
        </div>

        <input
          type="text"
          placeholder="cellphone number or E-mail address"
          onChange={UserIdChangeHandler}
          onBlur={UserIdBlurHandler}
          value={enteredUserId}
        />
        {UserIdInputHasError ? (
          <>
            <BsXCircle className="x-circle red" />
            <div className="error-message">Please type 10 numbers or email</div>
          </>
        ) : (
          <BiCheckCircle className="x-circle" />
        )}
        <input
          type="text"
          placeholder="name"
          onChange={enteredNameChangeHandler}
          onBlur={enteredNameBlurHandler}
          value={enteredName}
        />
        {enteredNameHasError ? (
          <>
            <BsXCircle className="x-circle red" />
            <div className="error-message">Please check name</div>
          </>
        ) : (
          <BiCheckCircle className="x-circle" />
        )}
        <input
          type="text"
          placeholder="user name"
          onChange={enteredUserNameChangeHandler}
          onBlur={enteredUserNameBlurHandler}
          value={enteredUserName}
        />
        {enteredUserNameHasError ? (
          <>
            <BsXCircle className="x-circle red" />
            <div className="error-message">Please check your name</div>
          </>
        ) : (
          <BiCheckCircle className="x-circle" />
        )}

        <input
          type="password"
          placeholder="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError ? (
          <BsXCircle className="x-circle red" />
        ) : (
          <BiCheckCircle className="x-circle" />
        )}

        {formIsValid ? (
          <button className="sign-up-bt" onClick={formSubmissionHandler}>
            Sign up
          </button>
        ) : (
          <button className="sign-up-bt disabled">Sign up</button>
        )}
        <div className="sign-up-login">
          Do you have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp