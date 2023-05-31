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
      title: "User Research",
      description:
        "Collecting and analyzing data about how users interact with a user interface, with the goal of improving the overall user experience.",
    },
    {
      id: 4,
      img: require("../assets/servicesIcon2.png"),
      title: "Technical Writer",
      description:
        "Creating a simplified version of a product or design, often with the goal of testing its functionality and usability.",
    },
  ];

  return (
    <div
      className="bg-secondaryColorBg flex flex-col  gap-3 md:gap-5 lg:gap-7 px-3 md:px-11 lg:px-24"
      id="services"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="flex font-montserrat font-bold text-textWhite text-xl md:text-3xl lg:text-4xl">
        My{" "}
        <span className="text-primaryColor pl-2 font-montserrat font-bold text-xl md:text-3xl lg:text-4xl">
          Services
        </span>
      </h1>
      <p className="w-full lg:w-[500px] text-textColor font-montserrat font-normal text-xs md:text-sm lg:text-base text-justify">
        Harnessing the power of code, I provide tailored software solutions that
        drive growth, streamline processes, and enhance user experiences. From
        concept to deployment, I bring your ideas to life with precision and
        finesse, ensuring robust, scalable, and user-friendly products. Let's
        collaborate and embark on a remarkable journey of technological
        excellence.
      </p>

      <div className="flex items-center justify-center lg:items-start lg:justify-between flex-wrap  gap-2 md:gap-7 lg:gap-3 mt-7 md:mt-10 lg:mt-3">
        {serviceData.map((item, index) => (
          <div
            className=" bg-secondaryColor flex items-center justify-center w-[557px] h-[90px] md:h-[140px] lg:w-[500px] lg:h-[150px] rounded-2xl overflow-hidden"
            key={index}
          >
            <div className="ml-4 mr-3 lg:mr-5 w-1/5  ">
              <img
                className="w-[74px] h-[74px] object-contain"
                src={item.img}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-textWhite font-montserrat font-medium text-xs md:text-base lg:text-2xl">
                {item.title}
              </h1>
              <p className="text-textColor font-montserrat font-normal text-xs md:text-sm lg:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// p-5 md:p-5 lg:p-5
