import { AiFillGithub } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../assests/images/dp.webp";
const Logo = () => {
  return <img src={logo} alt="logo" className="w-10 rounded-full" />;
};

const GitHub = () => {
  return (
    <a className="ml-3" href="https://github.com/Kannu-Mandora" target="_blank">
      <AiFillGithub className="hover:text-gray-300" />
    </a>
  );
};
const Instagram = () => {
  return (
    <a
      className="ml-3"
      href="https://instagram.com/mandorakannu"
      target="_blank"
    >
      <BsInstagram className="hover:text-instagram" />
    </a>
  );
};
const Twitter = () => {
  return (
    <a className="ml-3" href="https://twitter.com/KannuMandora" target="_blank">
      <BsTwitter className="hover:text-twitter" />
    </a>
  );
};
export { GitHub, Instagram, Twitter };
export default Logo;
