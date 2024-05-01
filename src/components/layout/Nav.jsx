import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./index.scss";
import CustomA from "./CustomA";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="nav-links my-1 mt-1">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-links my-1 mt-1">
        <CustomA />
      </NavLink>
      <NavLink to="/projects" className="nav-links my-1 mt-1">
        Projects
      </NavLink>
      <NavLink to="/contact" className="nav-links my-1 mt-1">
        Contact
      </NavLink>
    </>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="header-nav flex w-1/3 justify-end">
        <div className="hidden w-full justify-between text-xl text-white md:flex">
          <NavLinks />
        </div>
        <div className="text-white md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-nav flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
