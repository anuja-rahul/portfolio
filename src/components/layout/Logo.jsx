import { NavLink } from "react-router-dom";
import "./index.scss";

function Logo() {
  return (
    <div className="logo block  h-[30px] w-[100px] mb-4">
      <NavLink to="/">
        <img src="../src/assets/images/logo-no-background.svg" alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
