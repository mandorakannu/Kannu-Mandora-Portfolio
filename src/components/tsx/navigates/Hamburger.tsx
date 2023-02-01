import { Link } from "react-router-dom";
import logo from "../../../assests/images/profilePicture.svg";

const Hamburger = () => {
  return (
    <>
      <div className="flexRowEvenly p-2 sm:hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="w-10" />
        </Link>
        <h1 className="cursor-default font-outfit">Kannu Mandora</h1>
        <div className="space-y-2 sm:hidden rotate-180">
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
