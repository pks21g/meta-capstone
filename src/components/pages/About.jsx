import ownerImage from "../../icons_assets/Mario and Adrian A.jpg";
import ownerImage2 from "../../icons_assets/Mario and Adrian b.jpg";
import '../../css/about.css'


const About = () => {
  return (
    <section className="about container">
      <div className="info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          reprehenderit velit neque aut fugit tempore sunt harum at quas!
          Cupiditate ullam animi tempore accusamus qui consequuntur nihil
          dignissimos nam sapiente? Dolorem obcaecati quidem in nulla voluptatum
          quo impedit laborum. Nesciunt reprehenderit, nam praesentium ratione
          vel nobis iure dolorum mollitia. Laboriosam fugiat magnam rem delectus
          culpa error id molestias quasi ex?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          reprehenderit velit neque aut fugit tempore sunt harum at quas!
          Cupiditate ullam animi tempore accusamus qui consequuntur nihil
          dignissimos nam sapiente? Dolorem obcaecati quidem in nulla voluptatum
          quo impedit laborum. Nesciunt reprehenderit, nam praesentium ratione
          vel nobis iure dolorum mollitia. Laboriosam fugiat magnam rem delectus
          culpa error id molestias quasi ex?
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
