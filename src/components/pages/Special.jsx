import React from "react";
import { Link } from "react-router-dom";

function Special() {
  return (
    <div className="special">
      <div className="container">
        <div className="highlights-heading">
          <h1>This weeks specials!</h1>
          <Link to={"/order-online"} className="btn table">
            Order Online
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Special;
