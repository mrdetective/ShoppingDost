import React from "react";
import "../styles/login.css";
import {Link} from "react-router-dom";
function LoginPage() {
  return (
    <div className="bigbox">
      <div className="main-login-box">
        <div className="navbar">
          <div className=" nav-headings active">
            <Link className="nav-components" to="">
              Login
            </Link>
          </div>
          <div className="nav-headings">
            <Link className="nav-components" to="">
              Create Account
            </Link>
          </div>
        </div>
        <div className="Login-portion">
          <h3 className="email-id-heading"> Email ID: </h3>
          <input
            placeholder="Enter your email id"
            type="text"
            className="login-email-id"
          />
          <h3 className="email-id-heading"> Password: </h3>
          <input
            placeholder="Enter password"
            type="password"
            className="login-email-id"
          />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
