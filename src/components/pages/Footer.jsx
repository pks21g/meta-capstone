import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Main from './Main'
const Footer = () => {
  const ScrollToTop = () => {
    
    const {pathName} = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathName])
    return null;
    
  }
 
  return (
    <>
    <Main />
      <section className="footer-section  container">
        <nav className="footer">
          <div className="logo">
            <a href="home">
              <img src={Logo} alt="" />
            </a>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recepeies served with modern twist.
            </p>
          </div>
          <ul className="footer-nav-items">
            <li>
              <Link to="/home"  onClick={console.log(useLocation())}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={console.log(useLocation())}>About</Link>
            </li>
            <li>
              <Link to="/Menu" onClick={console.log(useLocation())}>Menu</Link>
            </li>
            <li>
              <Link to="/booking" onClick={console.log(useLocation())}>Reservations</Link>
            </li>
            <li>
              <Link to="/order-online" onClick={console.log(useLocation())}>Order Online</Link>
            </li>
            <li>
              <Link to="/Login" id="a" onClick={console.log(useLocation())}>Login</Link>
            </li>
          </ul>
          <div className="contact">
            <h3>Contact</h3>
            <p className="contact-info">Address:</p>
            <p>123 Town Street Road</p>
            <p className="contact-info">Phone:</p>
            <p>+12344558456</p>
            <p className="contact-info">Email:</p>
            <p>littleLemonrocks@gmail.com</p>
          </div>
          <div className="social-media">
            <h4 className="contact-info">Social Media</h4>
            <a href="https://facebook.com" className="contact-info s-btn">
              Facebook
            </a>
            <a href="https://instagram.com" className="contact-info s-btn">
              Instagram
            </a>
            <a href="https://twitter.com" className="contact-info s-btn">
              Twitter
            </a>
          </div>
        </nav>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Footer;
