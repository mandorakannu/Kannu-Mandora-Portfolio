import { Suspense, lazy } from "react";
import { IoMdPerson } from "react-icons/io";
const MySkills = lazy(() => import("../components/MySkills"));
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
        <MySkills />
        <Skills />
        <Projects />
      </Suspense>
    </>
  );
};

export default Entry;
