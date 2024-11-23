import React from "react";

const ProjectCard = ({ title, description, imageUrl, liveUrl }) => (
  <div className="shadow-lg rounded-lg border p-4">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    <h3 className="mt-2 text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline mt-2 inline-block"
    >
      View Live
    </a>
  </div>
);

export default ProjectCard;
