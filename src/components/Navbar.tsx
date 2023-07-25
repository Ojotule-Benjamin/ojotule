import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type MenuItem = {
  id: string;
  label: string;
  href: string;
  isResume?: boolean;
};

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
};

const menuItems: MenuItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  {
    id: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1iUO8V9B42Ey2dBo6mxGctExHR_SpEwOi/view?usp=drive_link",
    isResume: true,
  },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  setMenuOpen,
  toggleMenu,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelected = (id: string) => {
    setSelected(id);
  };

  return (
    <div className="fixed w-full top-0 z-10 h-20 px-3 md:px-11 lg:px-8 flex items-center justify-between bg-secondaryColorBg ">
      <h1 className="text-textWhite font-montserrat font-bold text-xl md:text-3xl lg:text-3xl leading-9">
        <a
          href="#about"
          className="font-montserrat font-bold text-xl md:text-3xl lg:text-4xl"
        >
          Ojotule Benjamin
          <span className="text-primaryColor">.</span>
        </a>
      </h1>
      <div className="lg:flex gap-3 md:hidden items-center hidden">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`font-montserrat font-normal text-base text-textWhite hover:text-primaryColor leading-9 ${
              selected === item.id
                ? "rounded-2xl bg-primaryColor p-1 hover:text-textWhite"
                : ""
            }`}
            {...(item.isResume && {
              target: "_blank",
              rel: "noreferrer",
            })}
            onClick={() => handleSelected(item.id)}
          >
            {item.label}
          </a>
        ))}
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
