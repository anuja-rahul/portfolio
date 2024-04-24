import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header
        className="sticky top-0 z-20 mx-auto flex w-full items-center 
    justify-between rounded-b-lg border-b border-gray-500 bg-slate-800/70 p-6"
      >
        <Logo />
        <Nav />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
