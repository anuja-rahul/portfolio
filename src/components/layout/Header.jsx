import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header
        className="sticky top-0 z-20 mx-auto flex w-full flex-wrap items-center 
    justify-between rounded-b-[2.5rem] border-b border-gray-500/25 bg-stone-900/25 p-6"
      >
        <Logo />
        <Nav />
      </header>
    </>
  );
}

export default Header;
