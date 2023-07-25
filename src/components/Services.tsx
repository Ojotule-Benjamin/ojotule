import React from "react";

interface ServiceDataProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const serviceData: ServiceDataProps[] = [
    {
      id: 1,
      img: require("../assets/servicesIcon2.png"),
      title: "Web Development",
      description:
        "Creating the look, layout, and functionality of a website which involves a combination of graphic design, user experience design, and front-end development",
      // description:
      //   "I specialize in crafting captivating online experiences. With expertise in front-end and back-end development, I bring websites to life, combining visually stunning designs with seamless functionality. From responsive layouts to dynamic interactions, I ensure that every aspect of your website engages and delights users.",
    },
    {
      id: 2,
      img: require("../assets/servicesIcon2.png"),
      title: "Mobile App Development",
      description:
        "Designing the visual and interactive elements of a user interface and creating a user-centered design that is easy to use and navigate.",
    },
    {
      id: 3,
      img: require("../assets/servicesIcon2.png"),
      title: "Technical Writer",
      description:
        "Creating a simplified version of a product or design, often with the goal of testing its functionality and usability.",
    },
    {
      id: 4,
      img: require("../assets/servicesIcon2.png"),
      title: "User Research",
      description:
        "Collecting and analyzing data about how users interact with a user interface, with the goal of improving the overall user experience.",
    },
  ];

  return (
    <div
      className="bg-secondaryColorBg flex gap-5 flex-col px-3 md:px-11 lg:px-8"
      id="services"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div>
        <h1 className="flex font-montserrat font-semibold text-textWhite text-lg lg:text-3xl ">
          {" "}
          My <span className=" pl-2 text-primaryColor">Services</span>
        </h1>
        <p className="w-full lg:w-1/2 text-textColor font-montserrat font-normal text-sm md:text-base lg:text-base text-justify">
          Harnessing the power of code, I provide tailored software solutions
          that drive growth, streamline processes, and enhance user experiences.
        </p>
      </div>

      <div className="flex  items-center justify-around lg:items-center lg:justify-center flex-wrap gap-3 lg:gap-7">
        {serviceData.map((item, index) => {
          const isMobile = window.innerWidth <= 640;
          if (isMobile && index > 2) {
            return null;
          }
          return (
            <div
              className={`bg-secondaryColor flex items-center justify-center w-full h-[150px] lg:w-[500px] lg:h-[200px] p-2 rounded-2xl overflow-hidden 
               `}
              key={index}
            >
              <div className="mr-3 lg:mr-5 w-1/5  ">
                <img
                  className="w-[74px] h-[74px] object-contain"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-textWhite font-montserrat font-medium text-base pb-2 lg:text-xl">
                  {item.title}
                </h1>
                <p className="text-textColor font-montserrat font-normal text-sm md:text-base lg:text-base ">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

// p-5 md:p-5 lg:p-5
