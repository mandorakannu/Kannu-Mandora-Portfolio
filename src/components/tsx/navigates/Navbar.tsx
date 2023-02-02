import { NavLink } from "react-router-dom";
import logo from "../../../assests/images/profilePicture.svg";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".pc-navbar");
    if (window.scrollY > 0) {
      nav?.classList.add("bg-gray-600");
    } else {
      nav?.classList.remove("bg-gray-600");
    }
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <header className="max-sm:hidden sticky top-0 z-50 px-5 py-2 pc-navbar">
        <nav className="flexRowAround">
          <div className="flexRowCenter gap-4 max-sm:hidden">
            <NavLink to="/" onClick={scrollToTop} >
              <img src={logo} alt="logo" className="w-10" />
            </NavLink>
            <h1 className="cursor-default font-outfit">Kannu Mandora</h1>
          </div>
          <ul className="flexRowCenter gap-5 navlist max-sm:hidden">
            <li>
              <NavLink to="/" onClick={scrollToTop} >Home</NavLink>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <NavLink to="Projects">Projects</NavLink>
            </li>
          </ul>
          <ul className="flexRowCenter gap-5 social-media max-sm:hidden">
            <li>
              <a href="https://twitter.com/KannuMandora" target="_blank">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kannu-Mandora" target="_blank">
                <BsGithub />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
