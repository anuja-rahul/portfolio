import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="nav-links my-1">
        Home
      </NavLink>
      <NavLink to="/projects" className="nav-links my-1">
        Projects
      </NavLink>
      <NavLink to="/about" className="nav-links my-1">
        About
      </NavLink>
      <NavLink to="/blog" className="nav-links my-1">
        Blog
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
        <div className="hidden w-full justify-between text-white md:flex">
          <NavLinks />
        </div>
        <div className="text-white md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
