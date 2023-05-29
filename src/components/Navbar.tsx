import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  toggleMenu,
}) => {
  return (
    <div className=" fixed w-full top-0 z-10 h-20 px-3 md:px-11 lg:px-24 flex items-center justify-between bg-secondaryColorBg">
      <h1 className="text-textWhite font-montserrat font-bold text-xl md:text-3xl lg:text-3xl leading-9">
        <a
          href="#about"
          className="font-monserrat font-bold text-xl md:text-3xl lg:text-4xl"
        >
          Ojotule Benjamin
          <span className="text-primaryColor">.</span>
        </a>
      </h1>
      <div className="lg:flex gap-7 md:hidden items-center hidden">
        <a
          href="#about"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          About
        </a>
        <a
          href="#services"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          Testimonials
        </a>
        <a
          href="https://drive.google.com/file/d/1xt6Gv0EQx6McG0EyXAuLy45QOaS_GVdP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9"
        >
          Contact
        </a>
      </div>

      <div
        className="lg:hidden bg-primaryColor rounded-md h-7 w-7 z-30 flex items-center justify-center"
        onClick={toggleMenu}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;
