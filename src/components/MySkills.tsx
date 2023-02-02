import { SlDiamond } from "react-icons/sl";
import { HiOutlineCode } from "react-icons/hi";
import { MdComputer } from "react-icons/md";

const MySkills = () => {
  const skills = [
    {
      heading: "Design",
      logo: <SlDiamond className="text-5xl text-navy-100" />,
      paragraph:
        "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth.",
    },
    {
      heading: "DEVELOPMENT",
      logo: <HiOutlineCode className="text-5xl text-navy-100" />,
      paragraph:
        "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability.",
    },
    {
      heading: "BASIC SEO",
      logo: <MdComputer className="text-5xl text-navy-100" />,
      paragraph:
        "I can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money.",
    },
  ];
  return (
    <>
      <div className="bg-white text-black flexColCenter py-20 h-max font-DMSans">
        <h2 className="text-4xl font-outfit text-center" data-aos="zoom-in">
          My Skills
        </h2>
        <p className="my-10 text-xl px-2 text-center" data-aos="zoom-in">
          Web Development have been my bread and butter for more than 2 years.
        </p>
        <div className="flex max-sm:flex-col justify-center items-center">
          {skills.map((skill, index) => (
            <section
              key={index}
              className="flexColCenter gap-5 border-2 border-gray-300 m-4 p-6"
            >
              <span data-aos="fade-up">{skill.logo}</span>
              <h3 className="text-3xl font-outfit" data-aos="fade-up">
                {skill.heading}
              </h3>
              <p className="text-center" data-aos="fade-up">
                {skill.paragraph}
              </p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default MySkills;
