import React, {useState} from "react";
import "./verifyotp.css";
import Lottie from "lottie-react";
import shoppingcartride from "../../assets/carti-ride-animation.json";
import {useNavigate} from "react-router-dom";

function Verifyotp() {
  const navigate = useNavigate();
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
              />
              <button className="verify-otp-btn">verify</button>
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
