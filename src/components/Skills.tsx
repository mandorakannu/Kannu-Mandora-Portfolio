import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
const Skills = () => {
  return (
    <>
      {/* DEVELOPMENT SKILLS */}
      <section className="flexColCenter py-10" id="Services">
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
    </>
  );
};

export default Skills;
