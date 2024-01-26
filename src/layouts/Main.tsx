import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
