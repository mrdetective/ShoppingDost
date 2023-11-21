import React, {useState} from "react";
import "./login.css";
import {Link} from "react-router-dom";
function LoginPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLogin, setShowLogin] = useState(true);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const toggleActive = (index) => {
    setActiveTab(index);
    if (index === 0) {
      setShowLogin(true);
      setShowCreateAccount(false);
    } else {
      setShowCreateAccount(true);
      setShowLogin(false);
    }
  };
  return (
    <div className="bigbox1">
      <div className="main-login-box">
        <div className="login-navbar">
          <div
            className={`login-nav-headings ${activeTab === 0 ? "active" : ""}`}
            onClick={() => toggleActive(0)}>
            <Link className="login-nav-components" to="">
              Login
            </Link>
          </div>
          <div
            className={`login-nav-headings ${activeTab === 1 ? "active" : ""}`}
            onClick={() => toggleActive(1)}>
            <Link className="login-nav-components" to="">
              Create Account
            </Link>
          </div>
        </div>
        <div
          className="Login-portion"
          style={{display: showLogin ? "block" : "none"}}>
          <h3 className="headings"> Email ID: </h3>
          <input
            placeholder="Enter your email id"
            type="text"
            className="login-email-id"
          />
          <h3 className="headings"> Password: </h3>
          <input
            placeholder="Enter password"
            type="password"
            className="login-password"
          />
          <button className="login-btn">Login</button>
        </div>
        <div
          className="Create-account-portion"
          style={{display: showCreateAccount ? "block" : "none"}}>
          <h3 className="headings"> Full Name: </h3>
          <input
            placeholder="Enter your full name"
            type="text"
            className="create-fullname"
          />
          <h3 className="headings"> Email ID: </h3>
          <input
            placeholder="Enter your email id"
            type="text"
            className="create-email-id"
          />
          <h3 className="headings"> Password: </h3>
          <input
            placeholder="Enter password"
            type="password"
            className="create-password"
          />
          <button className="create-account-btn">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
