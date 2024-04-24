import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/about">Blog</NavLink>
      <NavLink to="/about">Project</NavLink>
    </>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-1/3">
      <div className="hidden justify-between text-white md:flex">
        <NavLinks />
      </div>
      <div className="text-white md:hidden">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
}

export default Nav;
