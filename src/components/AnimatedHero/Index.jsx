import clsx from "clsx";
import "./index.scss";
import PropTypes from "prop-types";

const AnimatedHero = ({ letterClass, strArray, idx }) => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     `${letterClass}`,
  //     {
  //       opacity: 0,
  //       y: -100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 2,
  //       stagger: 0.05,
  //     },
  //   );
  // }, []);

  return (
    <span className="animated-container">
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={clsx(`${letterClass} _${i + idx}`, "each-char")}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedHero.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedHero;
