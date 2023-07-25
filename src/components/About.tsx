import React from "react";
import Typewriter from "typewriter-effect";
import atule from "../../src/assets/atule.jpg";

const About = () => {
  return (
    <div
      className="bg-secondaryColorBg w-full lg:px-8 flex overflow-hidden"
      id="about"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col w-full h-full lg:flex-row lg:flex items-center justify-center m-auto lg:my-10">
        <div className="left w-full lg:w-3/5 gap-2 md:gap-5 lg:gap-7 flex flex-col items-center lg:items-start lg:justify-start px-3 md:px-11 md:py-5 lg:p-0">
          <Typewriter
            options={{
              strings: [
                "I’m Ojotule Benjamin",
                "Software Engineer",
                "Mobile Developer",
                "Technical Writer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName:
                "text-xl font-bold font-monserrat text-textWhite md:text-3xl lg:text-5xl",
              deleteSpeed: 100,
              cursorClassName: "text-primaryColor text-lg",
            }}
          />
          <div className="hidden md:flex gap-2 lg:gap-2 text-white font-montserrat font-bold text-sm md:text-xl lg:text-base">
            <h4>Software Engineer</h4>
            <span className=" hidden md:flex">|</span>
            <h4>Mobile Developer</h4>
            <span className=" hidden md:flex">|</span>
            <h4>Technical Writer</h4>
          </div>
          <p className="text-textColor font-montserrat font-normal text-sm pr-0 lg:pr-20 md:text-base lg:text-base text-justify">
            Software Developer in web and mobile application development, adept
            in Agile methodology, data analysis, automation, testing, and
            research. Possess a proven track record of delivering highly
            performant, scalable, and accessible applications that meet business
            needs. Passionate about technology and continuously learning with
            excellent communication skills.
          </p>

          <a
            href="#portfolio"
            className="text-textWhite font-montserrat font-medium text-sm bg-primaryColor w-40 h-10 md:w-56 md:h-12 mb-5 rounded-lg flex items-center justify-center hover:opacity-70 cursor-pointer"
          >
            Explore my work
          </a>
        </div>

        <div className="right w-full lg:w-2/5 flex items-center justify-center lg:py-0 ">
          <img
            //src={atule}
            src={require("../assets/profile.png")}
            alt=""
            className="w-full h-[250px] md:w-[600px] md:h-full lg:w-[500px] lg:h-[500px] rounded-sm object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
