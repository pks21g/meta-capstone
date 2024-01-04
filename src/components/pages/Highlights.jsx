import { recepies } from "./Recepies";
import Swirl from 'sweetalert2'

const Highlights = () => {
  const handleOrder = () => {
    Swirl.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swirl.fire({
          title: "Ordered!",
          text: "Enjoy your order!!.",
          icon: "success"
        });
      }
    });

  }
  return (
    <div>
        <div className="highlights-heading">
            <h1>This weeks specials!</h1>
            <button className="online-menu-button">Order Online</button>
        </div>
      <div className="highlights">
        {recepies.map((recepie) => (
          <div className="recepie" key={recepie.id}>
            <img src={recepie.image} className="recepie-image" alt="" />
            <div className="description">
              <h4>{recepie.title}</h4>
              <h5>${recepie.price}</h5>
              <p>{recepie.description}</p>
            </div>

            <button className="order-button" onClick={handleOrder}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
