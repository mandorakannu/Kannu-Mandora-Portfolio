import Navbar from "./tsx/navigates/Navbar";
import Hamburger from "./tsx/navigates/Hamburger";
import { Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Hamburger />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navigation;
