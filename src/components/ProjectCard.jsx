import React from "react";

const ProjectCard = ({ project }) => {
  
  // const { title, description, technologies, link, image } = project;

  return (
    <div className="bg-[#212121] hover:bg-[#181818] hover:transition hover:duration-700 bg w-2/3 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-700">
      <div className="p-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded"
      />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-xl font-semibold  text-white">{project.title}</h2>
        <div className="w-full">
        <p className="text-white mt-2 break-words whitespace-normal flex-wrap">{project.description}
          <span><a href="https://www.frontendmentor.io/profile/Akash-dev-lab/solutions">@Frontend-Mentor</a></span>
        </p>
        </div>
        <div className="flex flex-wrap mt-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-medium rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-center  shadow-xl text-[#212121] bg-white hover:bg-[#0d0d0d] hover:text-white hover:transition duration-700 rounded-md transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
