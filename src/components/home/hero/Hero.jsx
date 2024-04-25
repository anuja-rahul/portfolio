import gsap from "gsap";
import "./index.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";

function Hero() {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".title-items");
    const tl = gsap.timeline({ repeat: -1});

    titles.forEach((title) => {
      // DO something
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 60,
          rotateX: -90,
          stagger: 0.02,
        },
        "<",
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -60,
          rotateX: 90,
          stagger: 0.02,
          delay: 1.5,
        },
        "<1",
      );
    });
  }, []);

  return (
    <div className="hero-page container">
      <div className="text-zone">
        <h1 className="pt-12 sm:pt-12 lg:pt-0">
          Hi, <br /> I{"'"}m Anuja
          <br />
          web developer
        </h1>
        <div className="roll-container pt-12 sm:pt-12 lg:pt-0">
          <div className="text-wrapper">
            <span className="title-items absolute">Frontend Developer</span>
            <span className="title-items absolute">Python Developer</span>
            <span className="title-items absolute">CS Undergraduate</span>
          </div>
        </div>
        <Link to="/contact" className="round-btn uppercase">
          contact me
        </Link>
      </div>
    </div>
  );
}

export default Hero;
