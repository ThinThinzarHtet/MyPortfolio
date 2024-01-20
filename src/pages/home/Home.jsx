import Profile from "../../assets/ttzh.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="myProfile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Thin Thinzar Htet. </span> Front End Developer
          </h1>
          <p className="home__description">
            Front-End Developer with a proven ability to collaborate effectively
            with senior developers and a quick learner when it comes to learning
            new things and technologies. Specializes in ReactJS and has a strong
            passion for creating websites that provide quality user experience
            through responsive web design. Ready to apply my passion for coding
            to the team to develop quality solutions.
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
