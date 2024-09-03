import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"></input>
          <input type="email" placeholder="Email id"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <button>Continue</button>
        <p className="loginsinup-login">
          Already have an account <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing,I agree to terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;