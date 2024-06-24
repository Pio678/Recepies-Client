import "./Header.css";

import pageLogo from "../../assets/logo4.png";
import blankUserIcon from "../../assets/icons/blankUserIcon.png";
import closeMenuIcon from "../../assets/icons/cross-icon.png";
import openMenuIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className={isMenuOpen ? "menu-open" : ""}>
      <div className="logo-container">
        <img className="logo-img" src={pageLogo} />
        <div className="logo-text">{`Easy Recepies`}</div>
      </div>

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
          </ul>
        </div>
      </nav>
      <div className="user-section">
        <img className="user-icon" src={blankUserIcon} />
        <button className="login-button">log in</button>
      </div>
    </header>
  );
}

export default Header;
