import React from "react";
import LogoIcon from "../../assets/logo4.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div className="logo-container" onClick={() => navigate("/")}>
      <img
        className="logo-img"
        src={LogoIcon}
        alt="logo showing chef hat on top of moustache"
      />
      <div className="logo-text">Eeasy Cooking</div>
    </div>
  );
}

export default Logo;
