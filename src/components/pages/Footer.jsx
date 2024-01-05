import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";


const Footer = () => {

  return (
    <>
    <section className="footer-section">
    <nav className="footer">
        <div className="logo">
          <a href="home">
          <img src={Logo} alt="" />
        </a>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recepeies served with modern twist.</p>
        </div>
        
        <ul className="footer-nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
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
            <a href="https://facebook.com" className="contact-info s-btn">Facebook</a>
            <a href="https://instagram.com" className="contact-info s-btn">Instagram</a>
            <a href="https://twitter.com" className="contact-info s-btn">Twitter</a>        
        </div>
      </nav>
    </section>
      
    </>
  );
};

export default Footer;
