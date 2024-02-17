import React from "react";
import Highlights from "./Highlights";

const OrderOnline = () => {
  return (
    <>
      <div className="orderonline">
        <div className="orderonline-text">
          <h1>Try our most famous dishes</h1>
          <p>
            We also have a track record
            <b /> of inventing new dishes <br /> and serving the best quality
            <b /> food in and around <b />
            <h4>Chicagoland</h4>
          </p>
        </div>

        <Highlights />
      </div>
    </>
  );
};
export default OrderOnline;
