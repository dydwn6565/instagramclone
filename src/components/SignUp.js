import React from 'react'
import "./css/SignUp.css"
function SignUp() {
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
        <hr />

        <input type="text" value="cellphone number or E-mail address" />
        <input type="text" value="name" />
        <input type="text" value="user name" />
        <input type="password" value="password" />

        <div className="sign-up-term">
          The person using the service may have uploaded your contact
          information to Instagram <a href="/learn/more">Learn more</a>
        </div>
        <div className="sign-up-term">
          By signing up, you agree to the terms and conditions, the privacy
          policy, and the cookie policy
        </div>
        <button className="sign-up-bt">Sign up</button>
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