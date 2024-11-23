import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
