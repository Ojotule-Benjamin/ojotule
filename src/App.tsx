import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./app.css";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-screen ">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      />
      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}

      <div className="sections">
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
