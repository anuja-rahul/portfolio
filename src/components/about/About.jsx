import AnimatedHero from "../AnimatedHero/Index";
import "./index.scss";

function About() {
  return (
    <section
      id="about-page"
      className="h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh]"
    >
      <div className="about-page container">
        <div className="text-zone">
          <h1>
            <AnimatedHero
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
          👋 Hi there! I{"'"}m a passionate junior frontend web developer, a Python enthusiast, 
          and a computer science undergraduate student. 
          My journey in the tech world began with curiosity and a love for problem-solving. 
          Whether it{"'"}s crafting pixel-perfect designs or diving into backend logic, 
          I thrive on turning ideas into elegant code.
          </p>
          <p>
          🌐 Frontend Magic: I specialize in creating delightful user experiences using HTML, CSS, and JavaScript. 
          From responsive layouts to interactive animations, I{"'"}m all about making the web come alive.
          </p>
          <p>
          🐍 Pythonic Adventures: Python is my second language. 
          I{"'"}ve tinkered with everything from web scraping to cryptography, 
          and I{"'"}m always eager to explore more.
          </p>
          <p>
          🎓 Learning Never Stops: As a CS undergrad, I{"'"}m constantly learning and growing. 
          Algorithms, databases, software engineering, I devour it all like a code-hungry bookworm.
          </p>
          <p>
          🚀 Let{"'"}s Collaborate: Whether it{"'"}s a cool project, a challenging problem, 
          or just a chat about tech trends, I{"'"}m all ears. Let{"'"}s build something awesome together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
