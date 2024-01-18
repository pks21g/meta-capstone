import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";
import '../../css/nav.css'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleNavLink = () => {
    setCloseNav(!closeNav);
  };

 

  return (
    <>
      <section className="navigation">
        <nav className={`nav-menu container ${menuOpen ? "open" : ""}`}>
          <a href="home">
            <img src={Logo} alt="" />
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul
            className={`nav-items ${menuOpen ? "visible" : ""}`}
          >
            <li className="nav-link">
              <Link to="/meta-capstone">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/Menu">Menu</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/booking">Reservations</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/order-online">Order Online</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
