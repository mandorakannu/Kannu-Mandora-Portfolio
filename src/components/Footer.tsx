import logo from "../assests/images/profilePicture.svg";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-gray-600 body-font bg-navy-300 dark:bg-navy-900">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 font-outfit sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year}
            <a
              href="https://twitter.com/KannuMandora"
              className="text-white dark:text-white ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Kannu Mandora
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-white">
            <a className="">
              <BsInstagram className="text-lg" />
            </a>
            <a className="ml-3">
              <AiFillGithub className="text-lg" />
            </a>
            <a className="ml-3">
              <BsTwitter className="text-lg" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
