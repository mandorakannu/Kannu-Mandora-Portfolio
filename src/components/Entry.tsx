import { IoMdPerson } from "react-icons/io";
import { SlDiamond } from "react-icons/sl";
import { HiOutlineCode } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Projects from "./tsx/Projects";

const Entry = () => {
  return (
    <>
      <main>
        <div className="max-sm:h-[50vh] h-screen flex flex-col justify-center items-center">
          <h1 className="text-center max-sm:text-4xl text-5xl font-outfit px-10">
            I love to create beautiful and efficient websites
          </h1>
          <div className="flex items-center my-5 gap-5">
            <button className="bg-twitter hover:bg-navy-200  p-3 rounded font-DMSans">
              Discover
            </button>
            <button className="flex items-center gap-1 font-DMSans hover:text-instagram">
              <IoMdPerson /> Contact Me
            </button>
          </div>
        </div>
      </main>
      <section id="About" className="flexColCenter bg-twitter py-20 px-2 gap-3">
        <h2 className="text-center text-3xl font-semibold">
          Hi there I'm Kannu Mandora
        </h2>
        <p className="text-center sm:w-1/2 ">
          And I love to create beautiful and efficient websites for my
          customers. I love going through the entire process with the customer
          from concept, to design and then development and launch.
        </p>
      </section>
      {/* Skills */}
      <div className="bg-white text-black flexColCenter py-20 h-max font-DMSans">
        <h2 className="text-4xl font-outfit text-center">My Skills</h2>
        <p className="my-10 text-xl px-2 text-center">
          Web Development have been my bread and butter for more than 2 years.
        </p>
        <div className="flex max-sm:flex-col justify-center items-center">
          <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
            <SlDiamond className="text-5xl text-navy-100" />
            <h3 className="text-3xl font-outfit">Design</h3>
            <p className="text-center">
              Successful online projects start with good design. It establishes
              a solid foundation for future development and allows for long term
              growth.
            </p>
          </section>
          <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
            <HiOutlineCode className="text-5xl text-navy-100" />
            <h3 className="text-3xl font-outfit">DEVELOPMENT</h3>
            <p className="text-center">
              I can code my own designs or even use the customer's design as
              base. My focus is to generate clean code that's well structured
              for reliability.
            </p>
          </section>
          <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
            <MdComputer className="text-5xl text-navy-100" />
            <h3 className="text-3xl font-outfit">BASIC SEO</h3>
            <p className="text-center">
              I can setup your project to use basic SEO principles which will
              push your project to the first page on search engines and save you
              ads money.
            </p>
          </section>
        </div>
      </div>
      {/* DEVELOPMENT SKILLS */}
      <div>
        <section className="flexColCenter py-10" id="Services" >
          <h1 className="text-3xl">DEVELOPMENT SKILLS</h1>
          <div className="grid max-sm:grid-cols-4 sm:grid-flow-col grid-rows-1 gap-10 my-10 px-4">
            <SiHtml5 className="text-6xl text-red-400" />
            <SiCss3 className="text-6xl text-blue-400 " />
            <SiTailwindcss className="text-6xl text-sky-500 " />
            <SiJavascript className="text-6xl text-yellow-300" />
            <SiReact className="text-6xl text-blue-500" />
            <FaNodeJs className="text-6xl text-green-500" />
            <SiExpress className="text-6xl text-yellow-400" />
            <SiMongodb className="text-6xl text-green-400" />
          </div>
        </section>
      </div>
      <Projects />
    </>
  );
};

export default Entry;
