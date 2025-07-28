"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  // Contact items data
  const contactItems = [
    {
      icon: "ri-map-pin-line",
      label: "Address",
      value: "Casablanca, Morocco",
    },
    {
      icon: "ri-smartphone-line",
      label: "Phone",
      value: "(+212) 614 683 433",
    },
    {
      icon: "ri-mail-line",
      label: "Email",
      value: "khalil.marouane@outlook.com",
      link: "mailto:khalil.marouane@outlook.com",
    },
    {
      icon: "ri-linkedin-box-line",
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/khalil-marouane-b3b59b298/",
    },
  ];

  // Intersection Observer for animations
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      className="w-full p-6 xl:pb-[60px] bg-slate-100 dark:bg-dark0 scroll-mt-20 xl:scroll-mt-28 transition-colors duration-300"
    >
      <div className="w-full max-w-2xl md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-center space-y-4 mb-6 xl:mb-12"
        >
          <h3 className="text-2xl xl:text-4xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Contact
            <motion.span
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100px" } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="block h-1 bg-gradient-to-r from-green-400 to-green-700 mt-2 rounded md:mx-auto"
            />
          </h3>
          <h2 className="text-xl xl:text-2xl font-thin bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm xl:text-base lg:max-w-2xl md:max-w-xl mx-auto text-gray-600 dark:text-gray-300 transition-colors duration-300">
            If you have a project or idea I can help with, feel free to reach
            out. I&apos;m always open to new challenges and collaborations.
          </p>
        </motion.div>

        {/* Contact Items */}
        <div ref={contactRef} className="flex flex-col max-w-lg md:max-w-xl xl:max-w-2xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.4,
              }}
              className="group flex items-center justify-between gap-4 py-4"
            >
              {/* Icon + Text */}
              <div className="flex items-center gap-2">
                <i
                  className={`${item.icon} text-xl xl:text-2xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent`}
                />
                <h4 className="text-sm xl:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                  {item.label}
                </h4>
              </div>

              {/* Value */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm xl:text-base text-gray-600 dark:text-gray-300 hover:underline group-hover:text-emerald-500 dark:group-hover:text-green-500 transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm xl:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
