"use client";

const highlight = "bg-gray-300 dark:bg-gray-200 text-gray-700 p-0.5 rounded-sm";

const about = [
  {
    html: `I'm an IT engineer specialized in <mark class="${highlight}">Computer Methods Applied to Business Management (MIAGE)</mark>. My profile bridges technical expertise with a strategic business perspective, combining tools, systems, and techniques to create impactful solutions.`,
  },
  {
    html: `My academic journey began at <mark class="${highlight}">Hassan II University (FSBM)</mark> in Casablanca, where I earned a <mark class="${highlight}">Licentiate degree</mark> in Mathematics and Computer Science from 2018 to 2022.`,
  },
  {
    html: `I then pursued my engineering studies at the <mark class="${highlight}">Moroccan School of Engineering Sciences (EMSI)</mark>, also in Casablanca, and graduated in 2024.`,
  },
  {
    html: `Throughout my academic years, I developed a <mark class="${highlight}">diverse skill set</mark> and worked on various projects in software development, data science, and AI/Machine Learning. This versatility enables me to tackle different aspects of IT challenges with flexibility and a well-rounded perspective.`,
  },
  {
    html: `Recently, I completed an internship at <mark class="${highlight}">Spirit AeroSystems</mark> (April 2024 - September 2024), where I designed and developed a <mark class="${highlight}">web solution</mark> for production line request management using Next.js, React, Tailwind CSS, and MongoDB.`,
  },
  {
    html: `I'm currently <mark class="${highlight}">seeking new opportunities</mark> where I can contribute to <mark class="${highlight}">innovative projects</mark> and continue growing as a developer.`,
  },
];

const AboutTab: React.FC = () => (
  <div className="h-[440px] xl:h-[460px] overflow-y-auto px-1 scrollbar-thin">
    <ul className="space-y-5">
      {about.map((item, index) => (
        <li
          key={index}
          className="p-5 bg-gray-200 dark:bg-dark1 rounded-lg hover:shadow-md transition-all duration-300"
        >
          <p
            className="text-sm xl:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default AboutTab;
