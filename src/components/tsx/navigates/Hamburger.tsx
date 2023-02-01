import { Link } from "react-router-dom";
import logo from "../../../assests/images/profilePicture.svg";

const Hamburger = () => {
  window.addEventListener("scroll", () => {
    const hamburger = document.querySelector(".sm-navbar");
    if(window.scrollY > 0) {
      hamburger?.classList.add("bg-gray-600");
    } else {
      hamburger?.classList.remove("bg-gray-600");
    }
  })
  return (
    <>
      <header className="sticky top-0 flexRowEvenly p-2 sm:hidden sm-navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="w-10" />
        </Link>
        <h1 className="cursor-default font-outfit">Kannu Mandora</h1>
        <div className="space-y-2 sm:hidden rotate-180">
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </header>
    </>
  );
};

export default Hamburger;
