import React from "react";
import { projects } from "../../data";
import ProjectItem from "../../components/project/ProjectItem";
import './project.css'
const Project = () => {
  return (
    <section className="project section">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>
      <div className="project__container container grid">
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
