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
      title: "Web Design",
      description:
        "Creating the look, layout, and functionality of a website which involves a combination of graphic design, user experience design, and front-end development",
    },
    {
      id: 2,
      img: require("../assets/servicesIcon2.png"),
      title: "UI Design",
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
      title: "Prototyping",
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
      <h1 className="flex font-montserrat font-bold lg:pb-4 text-textWhite text-xl md:text-3xl lg:text-4xl">
        My{" "}
        <span className="text-primaryColor pl-2 font-montserrat font-bold text-xl md:text-3xl lg:text-4xl">
          Services
        </span>
      </h1>
      <p className="w-full lg:w-[500px] text-textColor font-montserrat font-normal text-xs md:text-sm lg:text-base text-justify">
        As a UI/UX designer, I specialize in creating intuitive, user-centered
        designs for web and mobile applications. I have a strong understanding
        of design principles and a keen eye for aesthetics, and I am skilled at
        using a variety of design tools and software to create wireframes,
        prototypes, and high-fidelity designs.
      </p>

      <div className="flex flex-wrap  gap-3 md:gap-7 lg:gap-5 mt-7 md:mt-10 lg:mt-5">
        {serviceData.map((item, index) => (
          <div
            className=" bg-secondaryColor flex items-center justify-center p-5 md:p-5 lg:p-3 w-full h-[90px] md:h-[140px] lg:w-[500px] lg:h-[140px] rounded-2xl overflow-hidden"
            key={index}
          >
            <div className="mr-3 lg:mr-5 ">
              <img className="w-28 h-28 object-contain" src={item.img} alt="" />
            </div>
            <div className="">
              <h1 className="text-textWhite font-montserrat font-medium text-xs md:text-xl lg:text-2xl">
                {item.title}
              </h1>
              <p className="text-textColor font-montserrat font-normal text-xs md:text-base lg:text-base">
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
