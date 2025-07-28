"use client";

import Image from "next/image";

const skills = {
  skillList: [
    { icon: "HTML5.svg", name: "HTML" },
    { icon: "CSS3.svg", name: "CSS" },
    { icon: "JavaScript.svg", name: "JavaScript" },
    { icon: "TypeScript.svg", name: "TypeScript" },
    { icon: "React.svg", name: "React" },
    { icon: "Next.js.svg", name: "Next.js" },
    { icon: "Tailwind CSS.svg", name: "Tailwind CSS" },
    { icon: "Node.js.svg", name: "Node.js" },
    { icon: "Python.svg", name: "Python" },
    { icon: "Java.svg", name: "Java" },
    { icon: "Spring.svg", name: "Spring" },
    { icon: "NET.svg", name: ".NET" },
    { icon: "MongoDB.svg", name: "MongoDB" },
    { icon: "MySQL.svg", name: "MySQL" },
    { icon: "PostgresSQL.svg", name: "PostgreSQL" },
    { icon: "Git.svg", name: "Git" },
  ],
};

const SkillsTab: React.FC = () => (
  <div className="h-[440px] xl:h-[460px] overflow-y-auto px-1 scrollbar-thin">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {skills.skillList.map((skill, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center p-6 bg-gray-200 dark:bg-dark1 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-300 dark:hover:bg-dark2 transition-all duration-300"
          aria-label={skill.name}
        >
          <div className="relative w-12 h-12 xl:w-14 xl:h-14 grayscale group-hover:grayscale-0 transition duration-300">
            <Image
              src={`/icons/${skill.icon}`}
              alt={`${skill.name} icon`}
              fill
              className="object-contain"
            />
          </div>
          <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsTab;
