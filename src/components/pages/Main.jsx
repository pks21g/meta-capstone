import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Banner from "./Banner";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Banner />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/booking" element={<Reservations />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
