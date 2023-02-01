import { Link } from "react-router-dom";
import shriRamCollege from "../../assests/images/shriRamCollege.png";
import amanChopra from "../../assests/images/amanChopra.png";
import todo from "../../assests/images/todo.png";

const Projects = () => {
  const images = [
    {
      src: shriRamCollege,
      alt: "Shri Ram College",
    },
    {
      src: amanChopra,
      alt: "Aman Chopra",
    },
    {
      src: todo,
      alt: "Todo",
    },
  ];
  return (
    <>
      <div className="flexColCenter bg-white text-black font-outfit py-20">
        <h1 className="text-center text-3xl my-10 text-navy-100">
          Projects
        </h1>
        <p className="text-center sm:w-1/2 text-xl">
          Listed below are some of the most representative projects I've worked
          on. They range from basic web design for presentation sites to
          advanced web development.
        </p>
        <section className="flexColCenter">
          <div className="grid grid-cols-3 max-sm:grid-cols-1 place-items-center my-10 font-DMSans gap-5">
            {images.map((image, index) => (
              <img
              key={index}
                src={image.src}
                alt={image.alt}
                className="w-2/3 rounded shadow pointer-events-none"
              />
            ))}
          </div>
          <a 
            href="https://github.com/Kannu-Mandora" target="_blank"
            className="text-center text-2xl my-10 p-3 bg-navy-500 text-white rounded w-2/3 hover:-translate-y-2 hover:shadow-xl"
          >
            Click Here For View Projects
          </a>
        </section>
      </div>
    </>
  );
};

export default Projects;
