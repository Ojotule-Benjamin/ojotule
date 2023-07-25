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
      className="bg-secondaryColorBg flex flex-col gap-10 pb-5 px-3 md:px-11 lg:px-8"
      id="portfolio"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="">
        <h1 className="flex font-montserrat font-semibold text-textWhite text-lg lg:text-3xl ">
          {" "}
          Check Out My{" "}
          <span className=" pl-2 text-primaryColor">Portfolio</span>
        </h1>
      </div>

      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-center">
          <ul className=" flex gap-3 text-textWhite text-sm md:text-base lg:text-base font-montserrat font-normal cursor-pointer ">
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

        <div className="w-full h-auto gap-3 md:gap-7 lg:gap-5 flex flex-wrap justify-center md:justify-center mt-3 md:mt-12 lg:mt-0 lg:justify-center rounded-lg ">
          {data.map((d, index) => (
            <a
              href={d?.link}
              target="_blank"
              rel="noreferrer"
              className="item w-[180px] h-[150px]  md:w-[300px] md:h-[200px] lg:w-[320px] lg:h-[200px] rounded-3xl flex items-center justify-center text-white border border-gray-400 relative cursor-pointer  hover:bg-primaryColor"
              key={index}
            >
              <img
                src={d.img}
                alt=""
                className="w-full h-full object-cover z-10 hover:opacity-0 rounded-lg"
              />
              <div className="absolute left-0 right-0 transform p-3">
                <h3 className="font-montserrat font-bold text-base lg:text-xl text-green-800 text-center">
                  {d.title}
                </h3>
                <p className=" font-montserrat font-normal text-[10px] text-textWhite">
                  {d?.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
