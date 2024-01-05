import { lunch, dinner } from "./menulist";
const Menu = () => {
  return (
    <section className="menu">
      <div className="lunch-dinner-menu">
        <div className="lunchDinner-heading">
          <h2>Lunch</h2>
          <h1>Spreads</h1>
        </div>

        <div className="lunch-dinner-items">
          {lunch.map((item) => (
            <div key={item.id} className="lunch-dinner-item">
              <h3>{item.title}</h3>
              <h5>{item.description}</h5>
              <h5>{item.price}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="lunch-dinner-menu">
        <div className="lunchDinner-heading">
          <h2>Lunch</h2>
          <h1>Spreads</h1>
        </div>
        <div className="lunch-dinner-items">
          {dinner.map((item) => (
            <div key={item.id} className="lunch-dinner-item">
              <h3>{item.title}</h3>
              <h5>{item.description}</h5>
              <h5>{item.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;
