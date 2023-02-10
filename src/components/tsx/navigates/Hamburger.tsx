import { Link } from "react-router-dom";
import logo from "../../../assests/images/profilePicture.svg";
import {  BsTwitter, BsGithub } from "react-icons/bs";
const Hamburger = () => {
  window.addEventListener("scroll", () => {
    const hamburger = document.querySelector(".sm-navbar");
    if(window.scrollY > 0) {
      hamburger?.classList.add("bg-gray-600");
    } else {
      hamburger?.classList.remove("bg-gray-600");
    }
  })

  const toggleHambar=()=>{
    const hambar = document.querySelector(".hambar");
    hambar?.classList.toggle("hidden");
  }
  const hideNavMenu=()=>{
    const hambar = document.getElementsByClassName("hambar")[0];
    hambar?.classList.add("hidden");
  }

  return (
    <>
      <header className="sticky top-0 flexRowEvenly p-2 sm:hidden sm-navbar z-50">
        <Link to="/">
          <img src={logo} alt="logo" className="w-10" />
        </Link>
        <h1 className="cursor-default font-outfit">Kannu Mandora</h1>
        <div className="space-y-2 sm:hidden rotate-180" onClick={toggleHambar} >
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </header>
        <div className="scale-up-ver-top hambar hidden fixed z-50 w-screen">
          <ul className="space-y-2 grid place-items-center bg-navy-700 font-firaCode py-10 gap-5" onClick={hideNavMenu} >
            <li>
              <a href="#About" className="active:text-gray-400" >About</a>
            </li>
            <li>
              <a href="#Services" className="active:text-gray-400" >Services</a>
            </li>
            <li>
              <a href="https://github.com/Kannu-Mandora" target="_blank" className="flex items-center gap-3 active:text-gray-400" > <BsGithub /> GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/KannuMandora" target="_blank" className="flex items-center gap-3 active:text-gray-400" > <BsTwitter /> Twitter</a>
            </li>
            </ul>
        </div>
    </>
  );
};

export default Hamburger;
