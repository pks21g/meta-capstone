import { Link } from "react-router-dom";
import resimage from "../../icons_assets/restauranfood.jpg";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const Banner = () => {
  return (
    <>
    <section className="banner-section">
      <div className="banner container">
        <div className="banner-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterrarean Restaurant, focused on
            traditional recepies served with a modern twist.
          </p>

          {/* Needs Fixing */}
          <Link path to={"/booking"} className="btn table">
            Reserve a Table
          </Link>
        </div>
        <div className="banner-image">
          <img src={resimage} alt="" />
        </div>
      </div>
      
    </section>
    <Highlights />
    <Testimonials/>
    <About />
    </>
    
    
  );
};

export default Banner;
