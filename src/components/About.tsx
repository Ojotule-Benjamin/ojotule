import React from "react";
import Typewriter from "typewriter-effect";
import david from "../../src/assets/david.png";

const About = () => {
  return (
    <div
      className="bg-secondaryColorBg w-full lg:px-24 flex"
      id="about"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col-reverse w-full lg:flex-row lg:flex lg:items-center lg:justify-center my-0 md:my-10 lg:my-10">
        <div className="left gap-5 md:gap-5 lg:gap-7 flex flex-col flex-[0.5] items-center lg:items-start lg:justify-start px-3 md:px-11 md:py-5 lg:p-0">
          <Typewriter
            options={{
              strings: [
                "I’m Ojotule Benjamin",
                "Front-End Engineer",
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
          <div className="flex gap-3 lg:gap-2 text-white font-montserrat font-normal text-xs md:text-xl lg:text-base">
            <h4>Web Developer</h4>
            <span>|</span>
            <h4>Mobile Developer</h4>
            <span>|</span>
            <h4>UX Researcher</h4>
          </div>
          <p className="text-textColor font-montserrat font-normal text-xs md:text-base lg:text-base text-justify">
            Hi! My name is Ojochoko Mary. A self taught product designer based
            in Abuja, Nigeria. Fun fact about me I have a background in food
            science and technology, which gives me a strong research foundation.
            I became interested in design because it made me happy to understand
            people's aspirations and desires, as well as to assist them in
            resolving issues and improving their quality of life.
          </p>

          <a
            href="#portfolio"
            className="text-textWhite font-montserrat font-normal text-sm  bg-primaryColor w-56 h-12 mb-2 rounded-lg flex items-center justify-center cursor-pointer"
          >
            Explore my work
          </a>
        </div>

        <div className="right  flex-[0.5] flex items-center justify-center md:py-20 md:overflow-hidden lg:py-0 ">
          <img
            src={david}
            alt=""
            className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] rounded-full  object-cover border-4 border-red-400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
