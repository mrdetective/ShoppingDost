import React, {useEffect, useState} from "react";
import "./verifyotp.css";
import Lottie from "lottie-react";
import shoppingcartride from "../../assets/carti-ride-animation.json";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Verifyotp() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  const [otp, setOtp] = useState("");
  useEffect(() => {
    if (!email || !password || !name) {
      navigate("/");
      toast.error("Error occured!", {
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
  }, []);
  const createAccount = async () => {
    const details = {
      name: name,
      email: email,
      password: password,
      otp: otp,
    };
    const response = await fetch(process.env.REACT_APP_CREATE_ACCOUNT_LINK, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(details),
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
      navigate("/");
    } else {
      toast.error("Incorrect otp!", {
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
      <div className="bigbox1">
        <div className="verify-otp-box">
          <Lottie
            animationData={shoppingcartride}
            className="shopping-cart-ride-img"></Lottie>
          <div className="verify-otp-text">
            <h2 className="verify-otp-heading">Enter OTP</h2>
            <div className="verify-input-box">
              <input
                className="verify-otp-input"
                type="password"
                placeholder="Enter verification code"
                maxLength={"6"}
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              <button className="verify-otp-btn" onClick={createAccount}>
                verify
              </button>
            </div>
            <div className="send-otp-note">
              **Note: Please check your email inbox or spam box
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verifyotp;
