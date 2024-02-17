import ownerImage from "../../icons_assets/Mario and Adrian A.jpg";
import ownerImage2 from "../../icons_assets/Mario and Adrian b.jpg";
import "../../css/about.css";

const About = () => {
  return (
    <section className="about container">
      <div className="info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Welcome to Little Lemon, a culinary oasis nestled in the heart of
          Chicago, where the warm breeze of the Mediterranean meets the vibrant
          energy of the Windy City. Our restaurant offers a delightful fusion of
          traditional flavors and contemporary twists, capturing the essence of
          Mediterranean cuisine with every dish.
        </p>
        <p>
          At Little Lemon, we pride ourselves on sourcing the finest
          ingredients, handpicking fresh produce, herbs, and spices to craft
          dishes that transport you to the sun-kissed shores of the
          Mediterranean. From the rich olive oils of Greece to the aromatic
          spices of Morocco, each bite tells a story of culinary mastery and
          cultural heritage.
        </p>
        <p>
          Our menu showcases a diverse selection of Mediterranean delights, from
          savory mezzes and tantalizing tapas to hearty mains and decadent
          desserts. Whether you're craving the smoky flavors of grilled meats,
          the delicate textures of seafood, or the wholesome goodness of
          vegetarian fare, our chefs skillfully prepare each dish with passion
          and precision.
        </p>
        <p>
          Step into our inviting ambiance, where rustic charm meets modern
          elegance, and savor the sights, sounds, and tastes of the
          Mediterranean. Whether you're sharing a meal with loved ones, enjoying
          a romantic evening, or gathering with friends, our attentive staff is
          dedicated to providing an unforgettable dining experience.
        </p>
        <p>
          Join us at [Restaurant Name] and embark on a culinary journey that
          celebrates the vibrant flavors and timeless traditions of the
          Mediterranean, right here in the heart of Chicago.
        </p>
      </div>
      <div className="about-images">
        <img src={ownerImage} className="fimg" alt="" />
        <img src={ownerImage2} className="simg" alt="" />
      </div>
    </section>
  );
};

export default About;
