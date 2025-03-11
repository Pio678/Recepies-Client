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

  const LogInButton = () => {
    return (
      <a className="login-button" onClick={() => navigate("/auth/log-in")}>
        Log in
      </a>
    );
  };

  const LogOutButton = () => {
    return (
      <a className="login-button" onClick={() => logout()}>
        Log out
      </a>
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
              <div className="user-section">
                <img
                  className="user-icon"
                  onClick={() => navigate("/auth/log-in")}
                  src={blankUserIcon}
                />
                {authState.isUserLogged === true ? (
                  <LogOutButton />
                ) : (
                  <LogInButton />
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
