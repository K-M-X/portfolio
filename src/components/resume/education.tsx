"use client";

const education = {
  eduItems: [
    {
      institution: "EMSI",
      degree: "Engineering Degree in Computer Science and Networks",
      specialization: "Computer Methods Applied to Business Management (MIAGE).",
      duration: "2022 - 2024",
    },
    {
      institution: "FSBM",
      degree: "Licentiate Degree in Mathematics and Computer Science",
      specialization: "Database",
      duration: "2019 - 2022",
    },
  ],
};

const EducationTab: React.FC = () => (
  <div className="h-[440px] xl:h-[460px] overflow-y-auto px-1 scrollbar-thin">
    <ul className="space-y-5">
      {education.eduItems.map((item, index) => (
        <li
          key={index}
          className="px-5 py-4 space-y-2 bg-gray-200 dark:bg-dark1 border border-transparent hover:border-green-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          aria-label={`Education at ${item.institution}`}
        >
          {/* Header: Institution and Duration */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="ri-bank-line text-lg text-green-600" />
              <h3 className="text-md xl:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {item.institution}
              </h3>
            </div>
            <span className="text-xs xl:text-sm font-medium text-green-600 dark:text-green-500 transition-colors duration-300">
              {item.duration}
            </span>
          </div>

          {/* Degree */}
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {item.degree}
          </h4>

          {/* Specialization */}
          <p className="text-sm italic text-gray-700 dark:text-gray-400 transition-colors duration-300">
            {item.specialization}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default EducationTab;
