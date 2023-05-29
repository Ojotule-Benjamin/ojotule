import React from "react";
import { TurnRight, TurnLeft } from "@mui/icons-material";

interface TestimonialsDataProps {
  id: number;
  name: string;
  title: string;
  img: string;
  desc: string;
  featured?: boolean;
}

const Testimonials = () => {
  const testimonialsData: TestimonialsDataProps[] = [
    {
      id: 1,
      name: "Onogu Ojonugwa Martins",
      title: "Senior Developer",
      img: "https://avatars.githubusercontent.com/u/18556742?v=4",
      desc: "Ojotule built my business website and since then I have gotten more online presence. I can easily send people a link to my website to get full details about my business.",
    },
    {
      id: 2,
      name: "Ojochoko Mary Ochuma",
      title: "Product Designer",
      img: "https://avatars.githubusercontent.com/u/18556742?v=4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "John Opaluwa",
      title: "CEO of Regenate",
      img: "https://avatars.githubusercontent.com/u/18556742?v=4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
  ];
  return (
    <div
      className="bg-secondaryColorBg flex flex-col gap-3 md:gap-5 lg:gap-7 px-3 md:px-11 lg:px-24 "
      id="testimonials"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="flex font-montserrat font-bold  text-textWhite text-xl md:text-3xl lg:text-4xl overflow-hidden">
        Feedback From
        <span className="text-primaryColor pl-2 overflow-hidden font-montserrat font-bold text-xl md:text-3xl lg:text-4xl ">
          Clients
        </span>
      </h1>
      <p className="w-full lg:w-[500px] text-textColor font-montserrat font-normal text-xs md:text-sm lg:text-base text-justify overflow-hidden">
        As a UI/UX designer, I specialize in creating intuitive, user-centered
        designs for web and mobile applications.
      </p>

      <div className="flex flex-col h-full lg:h-[400px] lg:flex-row items-center gap-3 lg:gap-0 justify-center md:justify-around lg:justify-center overflow-hidden py-3 lg:p-2 ">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className={
              item.featured
                ? "card featured bg-secondaryColor hover:border-2 w-[310px] h-[150px] md:w-[500px] md:h-60 lg:w-[500px] lg:h-[350px] rounded-xl my-0 mx-[30px] flex items-center justify-around flex-col lg:px-3 lg:py-3 ease-in duration-300 hover:scale-110 "
                : "bg-secondaryColor hover:border-2 w-[290px] h-[170px] md:w-[450px] md:h-56 lg:w-[400px] lg:h-80 rounded-xl mx-3 flex items-center justify-around flex-col lg:px-3 lg:py-3 shadow-md ease-in duration-300  hover:scale-110"
            }
          >
            <div className="top flex items-center justify-center gap-5">
              <TurnRight className="left text-red-400 text-xs" />
              <img
                className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 object-cover rounded-full"
                src={item.img}
                alt=""
              />
              <TurnLeft className="right text-red-400" />
            </div>
            <div className="bg-secondaryColor text-textWhite p-3 text-center text-[10px] md:text-sm lg:text-sm font-montserrat font-normal">
              {item.desc}
            </div>
            <div className="text-textWhite text-xs flex flex-col items-center justify-center">
              <h3 className="font-montserrat text-sm font-semibold">
                {item.name}
              </h3>
              <h4 className="font-montserrat text-xs font-normal md:text-base ">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
