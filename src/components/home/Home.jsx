import "./index.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page container">
      <div className="text-zone">
        <h1 className="pt-12 sm:pt-12 lg:pt-0">
          Hi, <br /> I{"'"}m Anuja
          <br />
          web developer
        </h1>
        <h2 className="pt-12 sm:pt-12 lg:pt-0">
          Frontend Developer / Python Developer / CS Undergraduate
        </h2>
        <Link to="/contact" className="round-btn uppercase">
          contact me
        </Link>
      </div>
    </div>
  );
}

export default Home;
