"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  // State to manage download progress
  const [progress, setProgress] = useState<boolean>(false);

  // Intersection observers for animations
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: linkRef, inView: linkInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Handle CV download
  const handleDownload = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setProgress(true);

    try {
      const link = document.createElement("a");
      link.href = "/api/download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed\nPlease try again later.");
    } finally {
      setProgress(false);
    }
  };

  return (
    <section
      id="home"
      className="flex px-6 pt-28 xl:pt-0 h-screen md:h-[720px] xl:h-screen bg-slate-100 dark:bg-dark0 transition-colors duration-300"
    >
      {/* Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-2xl md:max-w-3xl xl:max-w-6xl mx-auto items-center">
        {/* Image block with animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center xl:justify-end order-1 xl:order-2"
        >
          <div className="relative rounded-full overflow-hidden p-1 border-4 border-green-600 animate-heartbeat">
            <Image
              src="/images/image-hacker.png"
              alt="profile image"
              width={220}
              height={220}
              priority
              className="md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] rounded-full"
            />
          </div>
        </motion.div>

        {/* Text block with animation */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4 xl:space-y-6 order-2 md:order-1"
        >
          <h2 className="text-xl xl:text-2xl font-medium text-gray-700 dark:text-gray-300 drop-shadow-sm transition-colors duration-300">
            Hi, I&apos;m Khalil
          </h2>

          <h1 className="text-3xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-sm transition-colors duration-300">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                4000,
                "Full Stack Developer",
                4000,
                "Project Manager",
                4000,
              ]}
              wrapper="span"
              cursor={true}
              speed={45}
              repeat={Infinity}
              className="inline-block"
            />
          </h1>
          <p className="text-base xl:text-lg text-gray-900 dark:text-gray-200 transition-colors duration-300">
            I am an IT engineer specialized in computer methods applied to
            business management (MIAGE), passionate about tech and software
            development. I build solutions prioritizing performance and
            scalability by leveraging the latest technologies & I&apos;m very
            excited to collaborate on projects that drive digital innovation.
          </p>
          <div>
            <motion.div
              ref={linkRef}
              initial={{ opacity: 0, y: 50 }}
              animate={linkInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex items-center space-x-4 xl:space-x-6 mt-8"
            >
              <button
                className="download"
                onClick={handleDownload}
                aria-label="Download"
                disabled={progress}
              >
                <span>Download CV</span>
                <i className="ri-download-line ml-2"></i>
              </button>
              <a
                href="https://github.com/K-M-X/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-2xl xl:text-3xl drop-shadow-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50 transition-colors duration-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/khalil-marouane-b3b59b298/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-box-fill text-2xl xl:text-3xl drop-shadow-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50 transition-colors duration-300"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
