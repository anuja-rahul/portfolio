import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header
        className="sticky top-0 z-20 mx-auto my-auto pr-10 flex w-full flex-wrap items-center 
    justify-between rounded-b-[2.5rem] border-b-2 border-l-2 border-r-2 border-emerald-500/40 bg-stone-900/25 p-6"
      >
        <Logo />
        <Nav />
      </header>
    </>
  );
}

export default Header;
