import { skills } from "../../data";

import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, icon }, index) => {
        return (
          <div className="skill__ItemBox" key={index}>
            <span>{icon}</span>
            <p>{title}</p>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
