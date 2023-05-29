import React from "react";

type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`absolute top-20 left-0 px-3 md:px-11 lg:hidden h-full w-3/4 z-20 bg-secondaryColorBg ${
        menuOpen ? "" : ""
      }`}
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col gap-8">
        <a
          href="#about"
          className="text-textWhite font-montserrat font-normal text-base leading-9 border-b border-gray-500"
        >
          About
        </a>

        <a
          href="#services"
          className="text-textWhite font-montserrat font-normal text-base leading-9 border-b border-gray-500"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="text-textWhite  font-montserrat font-normal text-base leading-9 border-b border-gray-500"
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          className="text-textWhite  font-montserrat font-normal text-base leading-9 border-b border-gray-500"
        >
          Testimonials
        </a>
        <a
          className="text-textWhite  font-montserrat font-normal text-base leading-9 border-b border-gray-500"
          href="https://drive.google.com/file/d/1xt6Gv0EQx6McG0EyXAuLy45QOaS_GVdP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="text-textWhite  font-montserrat font-normal text-base leading-9 border-b border-gray-500"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
