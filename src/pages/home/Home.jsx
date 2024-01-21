import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Profile from "../../assets/ttzh.jpg";
import HeroTypeWritter from "../../components/base/HeroTypeWritter";

import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        src={Profile}
        alt="myProfile"
        className="home__img"
      />

      <div className="home__content">
        <div className="home__data">
          <h3 className="home__title">Hello!</h3>
          <h3 className="hero__typeWritter">
            {/* And I&apos;m{" "} */}
            It&apos;s me,{" "}
            <HeroTypeWritter
              words={[
                "Thin Thinzar Htet..",
                "a Front-End Developer..",
                "a code lover..",
                "a cat lover..",
              ]}
              speed={100}
            />
          </h3>

          <p className="home__description">
            Crafting elegantly simple designs and translating them into flawless
            code is my forte, and I absolutely love the work I do.
            {/* A passionate frontend developer on a mission to turn creative
            visions into interactive realities. With a blend of cutting-edge
            technology and pixel-perfect precision, I bring websites to life
            that not only look stunning but also deliver exceptional user
            experiences. */}
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
