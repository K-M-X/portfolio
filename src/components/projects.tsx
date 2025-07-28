"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./projects/card";

export default function Projects() {
  // Project data
  const projects = [
    {
      image: "/images/project-3.jpg",
      name: "Lean Office",
      description: [
        "Web solution for managing production line requests",
        "Role-based access control",
        "Email-based communication features",
        "Real-time updates of requests progress",
        "Modern UI/UX design",
      ],
      technologies: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/your-repo/project1",
    },
    {
      image: "/images/project-2.jpg",
      name: "Travel",
      description: [
        "Web App for managing reservations and rentals",
        "Integrated booking system",
        "JWT authentication for secure access",
        "Real-time updates of bookings",
        "User-friendly navigation",
      ],
      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/your-repo/project2",
    },
    {
      image: "/images/project-1.jpg",
      name: "FSBM Calendar",
      description: [
        "Full stack App for Time and employee management",
        "Task scheduling with calendar",
        "Multi-role access control",
        "Easy tracking of employee tasks",
        "User-friendly interface",
      ],
      technologies: ["React", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/your-repo/project3",
    },
  ];

  // Intersection observer for animations
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Scroll functions
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Update selected index on scroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up event listener for scroll changes
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="flex p-6 xl:pb-[40px] scroll-mt-20 xl:scroll-mt-28 bg-slate-100 dark:bg-dark0 transition-colors duration-300"
    >
      <div className="w-full max-w-2xl md:max-w-3xl xl:max-w-6xl mx-auto items-center">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-center mb-8"
        >
          <h3 className="text-2xl xl:text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Projects
            <motion.span
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="block h-1 bg-gradient-to-r from-green-400 to-green-700 mt-2 rounded md:mx-auto"
            />
          </h3>
          <p className="text-sm xl:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Explore a selection of my work demonstrating problem-solving,
            development, and design skills.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          ref={projectRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 p-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[100%] sm:min-w-[49%] xl:min-w-[32%]"
                >
                  <Card project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex px-2 py-4 justify-between items-center">
            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollPrev}
                className="text-xl p-2 rounded-full bg-gray-200 dark:bg-dark1 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-dark2 transition-colors duration-300 disabled:opacity-40"
                disabled={selectedIndex === 0}
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line" />
              </button>
              <button
                onClick={scrollNext}
                className="text-xl p-2 rounded-full bg-gray-200 dark:bg-dark1 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-dark2 transition-colors duration-300 disabled:opacity-40"
                disabled={selectedIndex === projects.length - 1}
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line" />
              </button>
            </div>
            {/* Project Number */}
            <p className="text-sm px-4 py-2.5 rounded-full text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-dark1 transition-colors duration-300">
              {selectedIndex + 1} / {projects.length}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
