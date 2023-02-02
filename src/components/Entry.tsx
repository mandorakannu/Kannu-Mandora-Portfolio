import { Suspense, lazy } from "react";
import { IoMdPerson } from "react-icons/io";
import { SlDiamond } from "react-icons/sl";
import { HiOutlineCode } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/tsx/Projects"));

const Entry = () => {
  return (
    <>
      <main>
        <div className="max-sm:h-[50vh] h-screen flex flex-col justify-center items-center">
          <h1 className="text-center max-sm:text-4xl text-5xl font-outfit px-10" data-aos="fade" >
            I love to create beautiful and efficient websites
          </h1>
          <div className="flex items-center my-5 gap-5" data-aos="fade" >
            <button className="bg-twitter hover:bg-navy-200  p-3 rounded font-DMSans">
              Discover
            </button>
            <button className="flex items-center gap-1 font-DMSans hover:text-instagram">
              <IoMdPerson /> Contact Me
            </button>
          </div>
        </div>
      </main>
      <section id="About" className="flexColCenter bg-twitter py-20 px-2 gap-3" >
        <h2 className="text-center text-3xl font-semibold" data-aos="zoom-in" >
          Hi there I'm Kannu Mandora
        </h2>
        <p className="text-center sm:w-1/2" data-aos="zoom-in" >
          And I love to create beautiful and efficient websites for my
          customers. I love going through the entire process with the customer
          from concept, to design and then development and launch.
        </p>
      </section>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {/* Skills */}
        <div className="bg-white text-black flexColCenter py-20 h-max font-DMSans">
          <h2 className="text-4xl font-outfit text-center" data-aos="zoom-in">My Skills</h2>
          <p className="my-10 text-xl px-2 text-center" data-aos="zoom-in">
            Web Development have been my bread and butter for more than 2 years.
          </p>
          <div className="flex max-sm:flex-col justify-center items-center">
            <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
              <SlDiamond className="text-5xl text-navy-100" data-aos="fade-up" />
              <h3 className="text-3xl font-outfit" data-aos="fade-up">Design</h3>
              <p className="text-center" data-aos="fade-up">
                Successful online projects start with good design. It
                establishes a solid foundation for future development and allows
                for long term growth.
              </p>
            </section>
            <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
              <HiOutlineCode className="text-5xl text-navy-100" data-aos="fade-up" />
              <h3 className="text-3xl font-outfit" data-aos="fade-up">DEVELOPMENT</h3>
              <p className="text-center" data-aos="fade-up">
                I can code my own designs or even use the customer's design as
                base. My focus is to generate clean code that's well structured
                for reliability.
              </p>
            </section>
            <section className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6">
              <MdComputer className="text-5xl text-navy-100" data-aos="fade-up" />
              <h3 className="text-3xl font-outfit" data-aos="fade-up">BASIC SEO</h3>
              <p className="text-center" data-aos="fade-up">
                I can setup your project to use basic SEO principles which will
                push your project to the first page on search engines and save
                you ads money.
              </p>
            </section>
          </div>
        </div>
        <Skills />
        <Projects />
      </Suspense>
    </>
  );
};

export default Entry;
