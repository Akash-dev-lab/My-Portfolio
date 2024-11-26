import React from "react";
import ProjectCard from './ProjectCard';


const projectList = [
    {
      id: 1,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    {
      id: 2,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    {
      id: 3,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    {
      id: 4,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    {
      id: 5,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    {
      id: 6,
      title: "Product Cart",
      description: "A sleek and responsive website across all devices at each breakpoint",
      technologies: ["React", "tailwind css", "JavaScript"],
      link: "https://product-cart-ten-mauve.vercel.app/",
      image: "/project_Images/product-cart-image.jpg"
    },
    
    
  ];

const ProjectList = () => {

  return (
    <div className="overflow-x-auto whitespace-nowrap flex">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-10">
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    </div>
  );
};

export default ProjectList;
