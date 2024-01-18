import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Banner from "./Banner";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import ScrollToTop from "./ScrollToTop";
import OrderOnline from "./OrderOnline";
import Confirmation from "./Confirmation";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/meta-capstone" element={<Banner />}></Route>
        <Route exact path="/meta-capstone/about" element={<About />}></Route>
        <Route exact path="/meta-capstone/menu" element={<Menu />}></Route>
        <Route
          exact
          path="/meta-capstone/booking"
          element={<Reservations />}
        ></Route>
        <Route
          exact
          path="/meta-capstone/order-online"
          element={<OrderOnline />}
        ></Route>
        <Route exact path="/meta-capstone/login" element={<Login />}></Route>
        <Route
          exact
          path="/meta-capstone/confirmation"
          element={<Confirmation />}
        ></Route>
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default Main;
