import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import sideImg from "../../assets/Chef.jpg";
import Logo from "../../assets/logoWhiteBackground.png";

import "./AuthenticationPage.css";

import { Button } from "bootstrap";
import Header from "../../Components/Header/Header";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div
      id="auth-page"
      // id={"AuthPage.auth-page"}
    >
      <aside>
        <img className="side-img" src={sideImg} />
      </aside>
      <div className="login-container">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginForm;
