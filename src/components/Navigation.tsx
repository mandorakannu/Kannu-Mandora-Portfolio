import Navbar from "./tsx/navigates/Navbar";
import Hamburger from "./tsx/navigates/Hamburger";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Navigation = () => {
  return (
    <>
      <Hamburger />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
