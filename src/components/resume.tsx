"use client";

import { Tab, TabGroup, TabList } from "@headlessui/react";
import ExperienceTab from "./resume/experience";
import EducationTab from "./resume/education";
import SkillsTab from "./resume/skills";
import AboutTab from "./resume/about";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Resume() {
  // State to manage the currently selected tab index
  const [tabIndex, setTabIndex] = useState(0);

  // Intersection observer for animations
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: tabRef, inView: tabInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Array of tabs
  const Tabs = ["Experience", "Education", "Skills", "About"];

  // Function to render the content of the selected tab
  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return <ExperienceTab />;
      case 1:
        return <EducationTab />;
      case 2:
        return <SkillsTab />;
      case 3:
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <section
      id="resume"
      className="flex p-6 xl:pb-[60px] scroll-mt-20 xl:scroll-mt-28 bg-slate-100 dark:bg-dark0 transition-colors duration-300"
    >
      <div className="w-full max-w-2xl md:max-w-3xl xl:max-w-6xl mx-auto items-center">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-center mb-6"
        >
          <h3 className="text-2xl xl:text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Resume
            <motion.span
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="block h-1 bg-gradient-to-r from-green-400 to-green-700 mt-2 rounded md:mx-auto"
            />
          </h3>
          <p className="text-sm xl:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Explore my professional background, academic path, and technical
            expertise
          </p>
        </motion.div>

        {/* Tab group */}
        <TabGroup selectedIndex={tabIndex} onChange={setTabIndex}>
          {/* Tab list */}
          <motion.div
            ref={tabRef}
            initial={{ opacity: 0, y: 50 }}
            animate={tabInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <TabList className="flex p-1 mb-8 w-fit mx-auto bg-gray-200 dark:bg-dark1 rounded-full transition-colors duration-300">
              {Tabs.map((tab, index) => (
                // Each tab
                <Tab key={index}>
                  {({ selected }) => (
                    <div className="relative px-3 py-1 xl:px-6 xl:py-2 text-sm xl:text-base font-medium rounded-full cursor-pointer">
                      {/* Highlight background */}
                      {selected && (
                        <motion.div
                          layoutId="tab-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                          }}
                          className="absolute inset-0 bg-green-600 rounded-full z-0"
                        />
                      )}
                      {/* Tab label */}
                      <span
                        className={`relative z-0 ${
                          selected
                            ? "text-white"
                            : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                        }`}
                      >
                        {tab}
                      </span>
                    </div>
                  )}
                </Tab>
              ))}
            </TabList>

            {/* Tab panel animation */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tabIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTabContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </TabGroup>
      </div>
    </section>
  );
}
