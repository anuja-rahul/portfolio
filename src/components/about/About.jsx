import AnimatedHero from "../AnimatedHero/Index";
import "./index.scss";
import { useState, useEffect } from "react";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section
      id="about-page"
      // className="h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh]"
      className="about-page h-200vh sm:h-[120vh] md:h-[120vh]"
    >
      <div className="about-page container">
        <div className="text-zone">
          <h1 className="mt-[35%] sm:mt-[20%] md:mt-[15%] lg:mt-[5%]">
            <AnimatedHero
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p className="text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
            👋 Hi there! I{"'"}m a passionate junior frontend web developer, a
            Python enthusiast, and a computer science undergraduate student. My
            journey in the tech world began with curiosity and a love for
            problem-solving. Whether it{"'"}s crafting pixel-perfect designs or
            diving into backend logic, I thrive on turning ideas into elegant
            code.
          </p>
          <p className="text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
            🌐 Frontend Magic: I specialize in creating delightful user
            experiences using HTML, CSS, and JavaScript. From responsive layouts
            to interactive animations, I{"'"}m all about making the web come
            alive.
          </p>
          <p className="text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
            🐍 Pythonic Adventures: Python is my first language. I{"'"}ve
            tinkered with everything from web scraping to cryptography, and I
            {"'"}m always eager to explore more.
          </p>
          <p className="text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
            🎓 Learning Never Stops: As a CS undergrad, I{"'"}m constantly
            learning and growing. Algorithms, databases, software engineering, I
            devour it all like a code-hungry bookworm.
          </p>
          <p className="text-balance text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.7rem]">
            🚀 Let{"'"}s Collaborate: Whether it{"'"}s a cool project, a
            challenging problem, or just a chat about tech trends, I{"'"}m all
            ears. Let{"'"}s build something awesome together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
