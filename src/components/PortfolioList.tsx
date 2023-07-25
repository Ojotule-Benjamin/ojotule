import React from "react";

interface PortfolioListProps {
  id: string;
  title: string;
  active: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const PortfolioList = ({
  id,
  title,
  active,
  setSelected,
}: PortfolioListProps) => {
  return (
    <li
      className="flex items-center justify-center p-3 lg:mb-3 lg:p-2 rounded-full hover:text-primaryColor "
      style={{
        color: active ? "#fff" : "",
        backgroundColor: active ? "#FF6363" : "#0F0E0E",
      }}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
