import { NavLink } from "react-router-dom";
import logo from "../../../assests/images/profilePicture.svg";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 px-5 py-2">
        <nav className="flexRowAround">
          <div className="flexRowCenter gap-4 max-sm:hidden">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-10" />
            </NavLink>
            <h1 className="cursor-default font-outfit">Kannu Mandora</h1>
          </div>
          <ul className="flexRowCenter gap-5 navlist max-sm:hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
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
              <a href="https://www.instagram.com/mandorakannu/" target="_blank">
                <BsInstagram />
              </a>
            </li>
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
