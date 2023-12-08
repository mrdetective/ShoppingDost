import React, {useState} from "react";
import "./login.css";
import {Link, useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import cartanimation from "../../assets/shopping.json";
import {FaEye} from "react-icons/fa";
import {FaEyeSlash} from "react-icons/fa";
import {toast} from "react-toastify";

function LoginPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLogin, setShowLogin] = useState(true);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [eyelogin, seteyelogin] = useState(true);
  const [eyecreateaccount, seteyecreateaccount] = useState(true);
  const [createAccountName, setCreateAccountName] = useState("");
  const [createAccountEmail, setCreateAccountEmail] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");
  const [loginAccountEmail, setLoginAccountEmail] = useState("");
  const [loginAccountPassword, setLoginAccountPassword] = useState("");

  const navigate = useNavigate();
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
  const createAccount = async () => {
    if (!createAccountName || !createAccountEmail || !createAccountPassword) {
      toast.error("All fields are mandatory!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let emailChecker = /\S+@\S+\.\S+/.test(createAccountEmail);
    if (!emailChecker) {
      toast.error("Invalid Email!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      const response = await fetch(process.env.REACT_APP_SEND_OTP_LINK, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: createAccountEmail,
        }),
      });
      if (response.ok) {
        toast.success("The otp was sent successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        sessionStorage.setItem("email", createAccountEmail);
        sessionStorage.setItem("password", createAccountPassword);
        sessionStorage.setItem("name", createAccountName);
        navigate("/verify-otp");
      } else {
        toast.error("User already exists!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  const loginaccount = async () => {
    const data = {
      email: loginAccountEmail,
      password: loginAccountPassword,
    };
    const response = await fetch(process.env.REACT_APP_LOGIN_ACCOUNT_LINK, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("ACCESS_TOKEN", data.accessToken);
      navigate("/");
    } else {
      toast.error("Invalid credentials!", {
        position: "center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <h1
        className="logo-img"
        style={{justifyContent: "start", cursor: "pointer", fontSize: "3rem"}}
        onClick={() => {
          navigate("/");
        }}>
        Lavishly
        <p className="logo-lower" style={{fontWeight: "lighter"}}>
          "your shopmate"
        </p>
      </h1>
      <div className="bigbox2">
        <Lottie
          className="cart-animation"
          animationData={cartanimation}></Lottie>
        <div className="main-login-box">
          <div className="login-navbar">
            <div
              className={`login-nav-headings ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => toggleActive(0)}>
              <Link className="login-nav-components" to="">
                Login
              </Link>
            </div>
            <div
              className={`login-nav-headings ${
                activeTab === 1 ? "active" : ""
              }`}
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
              value={loginAccountEmail}
              onChange={(e) => {
                setLoginAccountEmail(e.target.value);
              }}
            />
            <h3 className="headings"> Password: </h3>
            <input
              placeholder="Enter password"
              type={eyelogin ? "password" : "text"}
              className="login-password"
              value={loginAccountPassword}
              onChange={(e) => {
                setLoginAccountPassword(e.target.value);
              }}
            />
            {!eyelogin ? (
              <FaEye
                style={{
                  marginLeft: "-2rem",
                  marginTop: "0.7rem",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => {
                  seteyelogin(true);
                }}
              />
            ) : (
              <FaEyeSlash
                style={{
                  marginLeft: "-2rem",
                  marginTop: "0.7rem",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => {
                  seteyelogin(false);
                }}
              />
            )}
            <button className="login-btn" onClick={loginaccount}>
              Login
            </button>
          </div>
          <div
            className="Create-account-portion"
            style={{display: showCreateAccount ? "block" : "none"}}>
            <h3 className="headings"> Full Name: </h3>
            <input
              placeholder="Enter your full name"
              type="text"
              className="create-fullname"
              value={createAccountName}
              onChange={(e) => {
                setCreateAccountName(e.target.value);
              }}
            />
            <h3 className="headings"> Email ID: </h3>
            <input
              placeholder="Enter your email id"
              type="text"
              className="create-email-id"
              value={createAccountEmail}
              onChange={(e) => {
                setCreateAccountEmail(e.target.value);
              }}
            />
            <h3 className="headings"> Password: </h3>
            <input
              placeholder="Enter password"
              type={eyecreateaccount ? "password" : "text"}
              className="create-password"
              value={createAccountPassword}
              onChange={(e) => {
                setCreateAccountPassword(e.target.value);
              }}
            />
            {!eyecreateaccount ? (
              <FaEye
                style={{
                  marginLeft: "-2rem",
                  marginTop: "0.7rem",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => {
                  seteyecreateaccount(true);
                }}
              />
            ) : (
              <FaEyeSlash
                style={{
                  marginLeft: "-2rem",
                  marginTop: "0.7rem",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => {
                  seteyecreateaccount(false);
                }}
              />
            )}
            <button className="create-account-btn" onClick={createAccount}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
