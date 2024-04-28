import gsap from "gsap";
import "./index.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";
import AnimatedHero from "../../AnimatedHero/Index";
import { useEffect, useState } from "react";
import Logo from "../logo/Logo";

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useGSAP(() => {
    const titles = gsap.utils.toArray(".title-items");
    const tl = gsap.timeline({ repeat: -1, delay: 2.4 });

    titles.forEach((letter) => {
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
    <section id="hero" className="sm:h-[120vh] md:h-[120vh] lg:h-[80vh]">
      <div id="hero-div" className="hero-page container h-[85vh] w-full">
        <div className="text-zone">
          <h1 className="title pt-8 sm:pt-8">
            <span
              className={`${letterClass} each-char text-[4.5rem] md:text-[5rem] lg:pt-0 lg:text-[5.5rem]`}
            >
              H
            </span>
            <span
              className={`${letterClass}  _12 each-char text-[4.5rem] md:text-[5rem] lg:pt-0 lg:text-[5.5rem]`}
            >
              i,
            </span>
            {/* <br /> I{"'"}m{" "} */}
            <br />
            <span
              className={`${letterClass}  _13 each-char text-[4.5rem] md:text-[5rem] lg:pt-0 lg:text-[5.5rem]`}
            >
              I
            </span>
            <span
              className={`${letterClass}  _14 each-char text-[4.5rem] md:text-[5rem] lg:pt-0 lg:text-[5.5rem]`}
            >
              {"'"}m
            </span>{" "}
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
          <div className="roll-container mb-4 pt-8 lg:pt-0">
            <div className="text-wrapper pointer-events-none">
              <span className="title-items absolute">Frontend Developer</span>
              <span className="title-items absolute">Python Developer</span>
              <span className="title-items absolute">CS Undergraduate</span>
            </div>
          </div>
          <br />
          <Link to="/contact" className="round-btn mt-3 uppercase">
            contact me
          </Link>
        </div>
        <Logo />
      </div>
    </section>
  );
}

export default Hero;
