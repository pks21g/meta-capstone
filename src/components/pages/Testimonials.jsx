import reviews from "./reviews";

const Testimonials = () => {
  return (
    <section className="reviews">
      <h1>Testimonials</h1>
      <div >
        <div className="testimonials">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial">
              <div className="review-heading">
                <img src={review.image} className="review-image" alt="" />
                <h3>{review.name}</h3>
              </div>
              <div className="review-description">
                <h4>{review.title}</h4>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
