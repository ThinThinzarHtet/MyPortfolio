import { Link } from "react-router-dom";
import "./about.css";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/ThinThinzarHtet-Frontend-Developer-CV.pdf";
import Skills from "../../components/skills/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/resume/ResumeItem";
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container">
          <p>
            My name is <span className="name">Thin Thinzar Htet</span> and I
            have recently completed a{" "}
            <span className="diploma">Level 4 Diploma in Computing</span> course
            of NCC Education. I am a passionate Front-end Web Developer on a
            mission to turn creative visions into interactive realities. With a
            blend of cutting-edge technology and pixel-perfect precision, I
            bring websites to life that not only look stunning but also deliver
            exceptional user experiences. I&apos;m always ready to learn more
            when it comes to new things and technologies. You can check out some
            of my work in the{" "}
            <Link to="/project">
              <span className="link">Projects</span>
            </Link>{" "}
            section or my{" "}
            <a
              href="https://github.com/ThinThinzarHtet"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link">Github</span>
            </a>{" "}
            and feel free to connect on my{" "}
            <a
              href="https://www.linkedin.com/in/thin-thinzar-htet-8b4821202/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link"> LinkedIn</span>
            </a>
            .
          </p>
          <p>
            Apart from coding, I really love the entertainment industry. So, I
            usually listen to music and watch movies and K-dramas in my free
            time too.
          </p>
        </div>
        <div>
          <a href={CV} download="" className="button">
            Download Cv{" "}
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
