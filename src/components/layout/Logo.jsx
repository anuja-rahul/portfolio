import { NavLink } from "react-router-dom";
import "./index.scss";
import LogoImg from "./../../assets/images/logo-no-background.svg";

function Logo() {
  return (
    <div className="logo mb-4  block h-[30px] w-[100px]">
      <NavLink to="/">
        <img src={LogoImg} alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
