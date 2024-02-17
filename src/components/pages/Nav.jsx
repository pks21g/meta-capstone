import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";
import "../../css/nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
//  const [lnk, setlnk] = useState(false);
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
            <li className="nav-link">
              <Link to="/meta-capstone" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/Menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/booking" onClick={() => setMenuOpen(false)}>Reservations</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/order-online" onClick={() => setMenuOpen(false)}>Order Online</Link>
            </li>
            <li className="nav-link">
              <Link to="/meta-capstone/Login" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
