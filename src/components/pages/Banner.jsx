import { NavLink } from "react-router-dom";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import '../../css/banner.css'
import Special from "./Special";

const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="banner">
          <div className="banner-text container">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterrarean Restaurant, focused on
              traditional recepies served with a modern twist.
            </p>
          </div>
          <div className="banner-btn container">
            <NavLink path={+true} to={"/meta-capstone/booking"} className="btn">
              Reserve a Table
            </NavLink>
          </div>
        </div>
      </section>
      <Special />
      <Highlights />
      
      <Testimonials />
      <About />
    </>
  );
};

export default Banner;
