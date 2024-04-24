import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        className="sticky top-0 z-20 mx-auto flex w-full items-center 
    justify-between border-b border-gray-500 bg-slate-800 p-8"
      >
        <h1>Header</h1>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
