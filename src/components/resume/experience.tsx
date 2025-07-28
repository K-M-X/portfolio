"use client";

import { useState } from "react";

const experience = {
  expItems: [
    {
      company: "Spirit AeroSystems",
      position: "Full Stack Developer",
      duration: "Apr 2024 - Sep 2024",
      description:
        "During this internship, I was responsible for building a web application to replace the traditional paperwork used by production line supervisors to communicate their requests and reports to various departments. The goal was to provide a convenient and efficient digital solution. I collaborated closely with stakeholders to gather requirements throughout the development process, ensuring a solid and effective outcome. I used Next.js for its ability to handle both frontend and backend logic, which allowed me to build a high-performing, modern, and user-friendly application. I also implemented JWT for secure operations. This experience strengthened my problem-solving abilities and gave me valuable insight into enterprise-level project management.",
    },
    {
      company: "EMSI",
      position: "Full Stack Developer",
      duration: "Aug 2023 - Oct 2023",
      description:
        "As part of an academic initiative, I developed a full-stack web application that allows users to manage their reservations and accommodations (similar to Airbnb) using the MERN stack. The app featured a modern UI, smooth user experience, and integrated JWT-based authentication. This project deepened my development expertise by challenging me with new technical problems and significantly enhanced my skill set—preparing me for more advanced professional projects.",
    },
    {
      company: "FSBM",
      position: "Full Stack Developer",
      duration: "Mar 2022 - Jul 2022",
      description:
        "As a final-year university project, I participated in the development of a web application designed to manage class schedules and professor assignments at my university, using MERN stack technologies. This project marked my entry into full-stack web development, where I applied my skills in designing and building complete web solutions. It deepened my understanding of software architecture, improved my problem-solving and collaboration skills, and gave me the opportunity to deliver practical solution.",
    },
  ],
};

const ExperienceTab: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="h-[440px] xl:h-[460px] overflow-y-auto px-1 scrollbar-thin">
      <ul className="space-y-5">
        {experience.expItems.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <li
              key={index}
              className="group px-5 py-4 space-y-2 bg-gray-200 dark:bg-dark1 border border-transparent hover:border-green-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              aria-label={`Experience at ${item.company}`}
            >
              {/* Header: Position and Duration */}
              <div className="flex justify-between items-center">
                <h3 className="text-md xl:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  {item.position}
                </h3>
                <span className="text-xs xl:text-sm font-medium text-green-600 dark:text-green-500 transition-colors duration-300">
                  {item.duration}
                </span>
              </div>

              {/* Sub-header: Company */}
              <div className="flex items-center">
                <span
                  className="w-2 h-2 bg-green-600 rounded-full mr-2"
                  aria-hidden
                />
                <h4 className="text-sm font-medium italic text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {item.company}
                </h4>
              </div>

              {/* Description */}
              <div className="mt-4 text-sm leading-relaxed text-gray-800 dark:text-gray-400 transition-colors duration-300">
                <p className={`${isExpanded ? "" : "line-clamp-3"} mt-4`}>
                  {item.description}
                </p>
                {item.description.length > 200 && (
                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                    className="mt-4 inline-block hover:underline text-sm font-medium text-green-600 dark:text-green-500 transition-colors duration-300"
                  >
                    {isExpanded ? "Show less" : "Continue reading"}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceTab;
