"use client";

import Image from "next/image";

interface Project {
  image: string;
  name: string;
  description: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const Card: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group flex flex-col w-full h-[460px] bg-gray-200 dark:bg-dark1 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    {/* Project image */}
    <div className="relative h-40 bg-gray-300 dark:bg-dark1 overflow-hidden transition-colors duration-300">
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
        aria-label="Project Image"
      /> 
    </div>

    {/* Project details */}
    <div className="p-4 space-y-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300">
        {project.name}
      </h3>

      {/* Description */}
      <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-outside pl-5 space-y-1 pr-1 transition-colors duration-300">
        {project.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Technologies list */}
    <div className="flex flex-wrap px-4 py-3 gap-1 xl:gap-2">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="text-xs px-2 py-1 rounded-md font-medium text-gray-900 dark:text-gray-300 bg-gray-300 dark:bg-dark0 transition-colors duration-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex items-center justify-between px-4 py-2 border-t mx-2 border-gray-300/50 dark:border-dark2 transition-colors duration-300">
      {/* GitHub */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-600 transition-colors duration-300"
          aria-label="GitHub Repository"
        >
          <i className="ri-github-line text-lg"></i>
        </a>
      )}
      {/* Live Demo */}
      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-600 transition-colors duration-300"
          aria-label="Live Demo"
        >
          <i className="ri-external-link-line text-lg"></i>
        </a>
      )}
    </div>
  </div>
);

export default Card;
