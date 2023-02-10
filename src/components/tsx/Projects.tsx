import { Link } from "react-router-dom";
import shriRamCollege from "../../assests/images/shriRamCollege.webp";
import amanChopra from "../../assests/images/amanChopra.webp";
import todo from "../../assests/images/todo.webp";

const Projects = () => {
  const images = [
    {
      src: shriRamCollege,
      alt: "Shri Ram College",
      link: "https://charming-erin-dibbler.cyclic.app/"
    },
    {
      src: amanChopra,
      alt: "Aman Chopra",
      link: "https://aman-chopra.vercel.app"
    },
    {
      src: todo,
      alt: "Todo",
      link: "https://todo-nine-sigma.vercel.app/"
    },
  ];
  return (
    <>
      <div className="flexColCenter bg-white text-black font-outfit py-20">
        <h1 className="text-center text-5xl my-10 text-navy-100" data-aos="fade"  >
          Projects
        </h1>
        <p className="text-center sm:w-1/2 text-xl" data-aos="fade-up">
          Listed below are some of the most representative projects I've worked
          on. They range from basic web design for presentation sites to
          advanced web development.
        </p>
        <section className="flexColCenter">
          <div className="grid grid-cols-3 max-sm:grid-cols-1 place-items-center my-10 font-DMSans gap-5">
            {images.map((image, index) => (
              <a key={index} href={image.link} target="_blank" className="grid place-items-center" >
              <img
              src={image.src}
              alt={image.alt}
              className="w-2/3 rounded shadow pointer-events-none"
              loading="lazy"
              data-aos="zoom-in"
              />
              </a>
            ))}
          </div>
          <a 
            href="https://github.com/Kannu-Mandora" target="_blank" data-aos="fade"
            className="text-center text-2xl my-10 p-3 bg-navy-500 text-white rounded w-2/3 hover:shadow-xl"
          >
            Click Here For View Projects
          </a>
        </section>
      </div>
    </>
  );
};

export default Projects;
