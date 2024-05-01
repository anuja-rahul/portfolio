import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHero from "../AnimatedHero/Index";
import "./index.scss";
import { useState, useEffect } from "react";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.5 });

    tl.fromTo(
      ".about-text",
      {
        opacity: 0,
        y: -50,
      },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "bounce.out",
      },
      [],
    );
  }, []);

  return (
    <section
      id="about-page"
      // className="h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh]"
      // h-200vh sm:h-[120vh] md:h-[120vh]
      className="about-page h-[120vh] sm:h-[120vh] md:h-[100vh] lg:h-[70vh]"
    >
      <div className="about-page container">
        <div className="text-zone left-[1rem] w-[70%] sm:left-[5rem] sm:w-[100%] md:left-[9rem] md:w-[60%] lg:left-[12rem] lg:w-[45%]">
          <h1 className="mt-[10%] sm:mt-[15%] md:mt-[10%] lg:mt-[10%] xl:mt-[10%]">
            <AnimatedHero
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="paragraphs">
            <p className="about-text text-1 text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
              Hi there! 👋 I{"'"}m a passionate junior frontend web developer, a
              Python enthusiast, and a computer science undergraduate student.
              {/* My
            journey in the tech world began with curiosity and a love for
            problem-solving. Whether it{"'"}s crafting pixel-perfect designs or
            diving into backend logic, I thrive on turning ideas into elegant
            code. */}
            </p>
            <p className="about-text text-2 text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
              Frontend Magic 🌐 : I specialize in creating delightful user
              experiences using HTML, CSS, and JavaScript.
              {/* From responsive layouts
            to interactive animations, I{"'"}m all about making the web come
            alive. */}
            </p>
            <p className="about-text text-3 text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
              Pythonic Adventures 🐍 : Python is my first language. I{"'"}ve
              tinkered with everything from web scraping to cryptography.
              {/* and I
            {"'"}m always eager to explore more. */}
            </p>
            <p className="about-text text-4 text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
              Learning Never Stops 🎓 : As a CS undergrad, I{"'"}m constantly
              learning and growing.
              {/* Algorithms, databases, software engineering, I
            devour it all like a code-hungry bookworm. */}
            </p>
            <p className="about-text text-5 text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
              Let{"'"}s Collaborate 🚀 : Whether it{"'"}s a cool project, a
              challenging problem, or just a chat about tech trends, I{"'"}m all
              ears. Let{"'"}s build something awesome together!
            </p>
          </div>
        </div>
        <div className="image-section">
          <p className="text-balance text-6xl text-white">Something1_ </p>
          <p className="text-balance text-6xl text-white">Something2_ </p>
          <p className="text-balance text-6xl text-white">Something3_ </p>
          <p className="text-balance text-6xl text-white">Something4_ </p>
          {/*  
          <img
            src="https://img.shields.io/badge/-react-191919?style=for-the-badge&logo=react"
            className="h-[3.5rem] w-[10rem] rounded-full"
            alt="react"
          />
          <img
            src="https://img.shields.io/badge/-tailwindcss-191919?style=for-the-badge&logo=tailwindcss"
            className="h-[3.5rem] w-[15rem] rounded-full"
            alt="tailwind"
          />
          <img
            src="https://img.shields.io/badge/html5-191919?style=for-the-badge&logo=html5"
            className="h-[3.5rem] w-[10rem] rounded-full"
            alt="html5"
          />
          <img
            src="https://img.shields.io/badge/css3-191919?style=for-the-badge&logo=css3&logoColor=264de4"
            className="h-[3.5rem] w-[9rem] rounded-full"
            alt="css3"
          />
          <img
            src="https://img.shields.io/badge/javascript-191919?style=for-the-badge&logo=javascript"
            className="h-[3.5rem] w-[15rem] rounded-full"
            alt="js"
          />
          <img
            src="https://img.shields.io/badge/-Git-191919?style=for-the-badge&logo=git"
            className="h-[3.5rem] w-[10rem] rounded-full"
            alt="git"
          />
          */}
        </div>
      </div>
    </section>
  );
}

export default About;
