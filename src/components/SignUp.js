import React from 'react'
import "./css/SignUp.css"
import { BsXCircle } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import useInput from '../hooks/use-input';
function SignUp() {
const regex = /[^A-Za-z0-9]+/;

const {
  value: enteredUserId,
  isValue: enteredUserIdIsValid,
  hasError: UserIdInputHasError,
  valueChangeHandler: UserIdChangeHandler,
  inputBlurHandler: UserIdBlurHandler,
  reset: resetUserIdInput,
} = useInput((value) => value.length === 10 );

const {
  value: enteredName,
  isValue: enteredNameIsValid,
  hasError: enteredNameHasError,
  valueChangeHandler: enteredNameChangeHandler,
  inputBlurHandler: enteredNameBlurHandler,
  reset: resetEnteredName,
} = useInput((value) => value.length > 0);

const {
  value: enteredUserName,
  isValue: enteredUserNameIsValid,
  hasError: enteredUserNameHasError,
  valueChangeHandler: enteredUserNameChangeHandler,
  inputBlurHandler: enteredUserNameBlurHandler,
  reset: resetEnteredUserName,
} = useInput((value) => !regex.test(value));

const {
  value: enteredPassword,
  isValue: enteredPasswordIsValid,
  hasError: passwordInputHasError,
  valueChangeHandler: passwordChangeHandler,
  inputBlurHandler: passwordBlurHandler,
  reset: resetPasswordInput,
} = useInput((value) => value.length > 5);


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

  resetUserIdInput();
  resetEnteredName();
  resetEnteredUserName();
  resetPasswordInput();
  
};

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div>
          <h1> Instagram</h1>
        </div>
        <div>
          <strong>
            Please sign up if you want to see your friends pitcure and videos
          </strong>
        </div>
        <button className="login-with-facebook-button">
          Login with Facebook
        </button>
        <div className="hr"></div>
        
          <input
            type="text"
            placeholder="cellphone number or E-mail address"
            onChange={UserIdChangeHandler}
            onBlur={UserIdBlurHandler}
            value={enteredUserId}
          />
          {UserIdInputHasError ? (
            <BsXCircle className="x-circle red" />
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
            <BsXCircle className="x-circle red" />
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
            <BsXCircle className="x-circle red" />
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

          <div className="sign-up-term">
            The person using the service may have uploaded your contact
            information to Instagram <a href="/learn/more">Learn more</a>
          </div>
          <div className="sign-up-term">
            By signing up, you agree to the terms and conditions, the privacy
            policy, and the cookie policy
          </div>
          {console.log(formIsValid)}
          {formIsValid ? (
            <button className="sign-up-bt" onClick={formSubmissionHandler}>
              Sign up
            </button>
          ) : (
            <button className="sign-up-bt disabled">Sign up</button>
          )}
        
      </div>
      <div className="sign-up-login">
        Do you have an account?{" "}
        <a href="/login" alt="text">
          Login
        </a>
      </div>
      <div className="sign-up-please-download-title">Please download app</div>
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
  );
}

export default SignUp