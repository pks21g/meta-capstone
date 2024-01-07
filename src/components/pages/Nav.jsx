import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <ul className={`nav-items ${menuOpen ? "visible" : ""}`}>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/Menu">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/Login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
