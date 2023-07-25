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
      name: "Sarah Daniel",
      title: "CEO of Dsarah Daniels",
      img: require("../assets/sarahDaniels.png"),
      desc: "Ojotule built my business website and since then I have gotten more online presence. I can easily send people a link to my website to get full details about my business.",
    },
    {
      id: 2,
      name: "John Opaluwa",
      title: "Product Designer",
      img: require("../assets/john.jpeg"),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Ojochoko Mary Ochuma",
      title: "Product Designer",
      img: require("../assets/ojochoko.jpeg"),
      desc: "Working with Ojotule is incredibly efficient and seamless",
    },
  ];
  return (
    <div
      className="bg-secondaryColorBg flex flex-col items-start justify-around px-3 md:px-11 lg:px-8 "
      id="testimonials"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div>
        <h1 className="flex font-montserrat font-semibold text-textWhite text-lg lg:text-3xl ">
          {" "}
          Feedback From <span className=" pl-2 text-primaryColor">Clients</span>
        </h1>
      </div>

      <div className="w-full flex flex-col h-full lg:h-[400px] gap-5 lg:gap-10 items-center justify-center lg:flex-row overflow-hidden py-0 lg:py-5">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className={
              item.featured
                ? "card featured bg-secondaryColor hover:border-2 w-[300px] h-[170px] md:w-[500px] md:h-60 lg:w-[300px] lg:h-[350px] rounded-xl flex items-center justify-center gap-1 md:gap-5 flex-col ease-in duration-300 hover:scale-110 "
                : "bg-secondaryColor hover:border-2 w-[290px] h-[160px] md:w-[450px] md:h-56 lg:w-[300px] lg:h-80 rounded-xl flex items-center justify-center gap-1 md:gap-5 flex-col  shadow-md ease-in duration-300  hover:scale-110"
            }
          >
            <div className="top flex items-center justify-center gap-3 overflow-hidden">
              <TurnRight className="left text-red-400 text-xs" />
              <img
                className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 object-cover rounded-full"
                src={item.img}
                alt=""
              />
              <TurnLeft className="right text-red-400" />
            </div>
            <div className="bg-secondaryColor text-textWhite p-1 text-center text-[10px] md:text-sm lg:text-sm font-montserrat font-normal overflow-hidden">
              {item.desc}
            </div>
            <div className="text-textWhite text-xs flex flex-col items-center justify-center">
              <h3 className="font-montserrat text-sm font-semibold overflow-hidden">
                {item.name}
              </h3>
              <h4 className="font-montserrat text-xs font-normal md:text-base overflow-hidden">
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
