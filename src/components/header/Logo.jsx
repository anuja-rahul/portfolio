import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo h-[30px] w-[75px]">
      <NavLink to="/">
        <img src="./src/assets/images/logo-no-background.svg" alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
