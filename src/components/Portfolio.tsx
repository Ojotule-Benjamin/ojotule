import React, { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../data";

interface List {
  id: string;
  title: string;
}

const Portfolio: React.FC = () => {
  const [selected, setSelected] = useState<string>("featured");
  const [data, setData] = useState<any[]>([]);

  const list: List[] = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    if (selected === "featured") {
      setData(featuredPortfolio);
    } else if (selected === "web") {
      setData(webPortfolio);
    } else if (selected === "mobile") {
      setData(mobilePortfolio);
    } else {
      setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div
      className="bg-secondaryColorBg flex flex-col  gap-5 md:gap-5 lg:gap-7 px-3 md:px-11 lg:px-24"
      id="portfolio"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="flex font-montserrat font-bold lg:pb-4 text-textWhite text-xl md:text-3xl lg:text-4xl">
        Check Out My
        <span className="text-primaryColor pl-2 font-montserrat font-bold text-xl md:text-3xl lg:text-4xl ">
          Portfolio
        </span>
      </h1>
      {/* <p className="text-textWhite w-[500px] font-montserrat font-normal text-base text-justify">
        As a Software Engineer, I specialize in creating intuitive,
        user-centered designs for web and mobile applications. I have a strong
        understanding of design principles and a keen eye for aesthetics, and I
        am skilled at using a variety of design tools and software to create
        wireframes.
      </p> */}

      <div className="flex flex-col gap-3 mt-5 md:mt-5 lg:mt-5">
        <div className=" flex items-center justify-center  ">
          <ul className=" flex gap-3 md:gap-7 lg:gap-7   text-textWhite text-xs md:text-lg lg:text-base font-montserrat font-normal cursor-pointer ">
            {list.map((item) => (
              <PortfolioList
                key={item.id}
                id={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
              />
            ))}
          </ul>
        </div>

        <div className="w-full h-auto gap-3 md:gap-7 lg:gap-5 flex flex-wrap justify-center md:justify-between mt-3 md:mt-12 lg:mt-0 lg:justify-between rounded-lg">
          {data.map((d, index) => (
            <a
              href={d?.link}
              target="_blank"
              rel="noreferrer"
              className="item w-[150px] h-[140px]  md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[200px] rounded-3xl flex items-center justify-center text-white border border-gray-400 relative cursor-pointer  hover:bg-primaryColor"
              key={index}
            >
              <img
                src={d.img}
                alt=""
                className="w-full h-full object-cover z-10 hover:opacity-[0.2] rounded-lg"
              />
              <h3 className="absolute font-montserrat font-normal text-base lg:text-2xl text-textWhite ">
                {d.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
