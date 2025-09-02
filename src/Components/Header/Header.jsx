import "./Header.css";

import Logo from "../Logo/Logo";
import blankUserIcon from "../../assets/icons/blankUserIcon.png";
import closeMenuIcon from "../../assets/icons/cross-icon.png";
import openMenuIcon from "../../assets/icons/hamburger.png";
import { useState, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  window.addEventListener("resize", () => {
    setIsMenuOpen(false);
  });

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  const toogleMenuButton = (
    <button className="menu-button" onClick={isMenuOpen ? closeMenu : openMenu}>
      <img
        className="menu-icon"
        src={isMenuOpen ? closeMenuIcon : openMenuIcon}
      />
    </button>
  );

  const logout = () => {
    Cookies.remove("access-token");
    navigate("/");

    setAuthState({
      username: "",
      id: 0,
      isUserLogged: false,
    });
  };

  const UserSection = ({ navPath, text }) => {
    return (
      <div className="user-section">
        <img
          className="user-icon"
          onClick={() => navigate(navPath)}
          src={blankUserIcon}
        />

        <a className="login-button" onClick={() => navigate(navPath)}>
          {text}
        </a>
      </div>
    );
  };

  return (
    <header className={isMenuOpen ? "menu-open" : ""}>
      <Logo />

      {toogleMenuButton}

      <nav>
        <div className={`nav-menu ${isMenuOpen ? "is-active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">
                All Recepies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Diners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Desserts
              </a>
            </li>

            <li className="nav-item">
              {authState.isUserLogged ? (
                <UserSection text="Profile" navPath="/profile" />
              ) : (
                <UserSection text="Log In" navPath="/auth/log-in" />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
