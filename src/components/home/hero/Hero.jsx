import gsap from "gsap";
import "./index.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";
import AnimatedHero from "../../AnimatedHero/Index";
import { useState } from "react";

function Hero() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const letterArray = ["A", "n", "u", "j", "a"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useGSAP(() => {
    const titles = gsap.utils.toArray(".title-items");
    const tl = gsap.timeline({ repeat: -1, delay: 2.4 });

    titles.forEach((letter) => {
      // DO something
      const splitTitles = new SplitTextJS(letter);

      tl.from(
        splitTitles.chars,
        {
          opacity: 0,
          y: 15,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.6,
          ease: "bounce.out",
        },
        "<",
      ).to(
        splitTitles.chars,
        {
          opacity: 0,
          y: -15,
          rotateX: 90,
          stagger: 0.05,
          delay: 1.5,
        },
        "<1",
      );
    });
    tl.fromTo(
      ".round-btn",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      [],
    );
  }, []);

  return (
    <div className="hero-page container">
      <div className="text-zone">
        <h1 className="title pt-12 sm:pt-12 lg:pt-0">
          <span className={`${letterClass} each-char`}>H</span>
          <span className={`${letterClass}  _12 each-char`}>i,</span>
          {/* <br /> I{"'"}m{" "} */}
          <br />
          <span className={`${letterClass}  _13 each-char`}>I</span>
          <span className={`${letterClass}  _14 each-char`}>{"'"}m</span>{" "}
          <AnimatedHero
            letterClass={letterClass}
            strArray={letterArray}
            idx={15}
          />
          <br />
          <AnimatedHero
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
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
