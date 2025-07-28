"use client";

import React, { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme from local storage (if any)
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Dark mode + save on local storage
  const toggleDarkMode = useCallback(() => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !darkMode);
  }, [darkMode]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  // Close menu (when a link is clicked)
  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Navigation links
  const navLinks = ["Home", "Resume", "Projects", "Contact"];
  const renderLinks = navLinks.map((link) => (
    <a
      key={link}
      href={`#${link.toLowerCase()}`}
      onClick={handleLinkClick}
      className="text-gray-700 dark:text-gray-200 hover:text-green-600 hover:dark:text-green-500 transition-colors duration-300"
    >
      {link}
    </a>
  ));

  return (
    <header
      className={`fixed top-0 z-10 w-full p-6 backdrop-blur-lg bg-slate-100 dark:bg-dark0 transition-colors duration-300 ${
        menuOpen ? "" : "bg-opacity-80 dark:bg-opacity-80"
      }`}
    >
      {/* Container */}
      <div className="flex max-w-6xl mx-auto items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <a href={"/"}>
            KMX
            <span
              className="inline-block w-2 h-2 rounded-full ml-2 bg-green-600"
              aria-hidden="true"
            />
          </a>
        </h1>
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:space-x-8 -ml-10">
          {renderLinks}
        </nav>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`py-2 px-3 rounded-full focus:outline-none bg-slate-200 dark:bg-dark1 transition-transform duration-300 ${
              darkMode ? "rotate-45" : ""
            }`}
          >
            <i
              className={
                darkMode
                  ? "ri-sun-line text-yellow-500"
                  : "ri-moon-line text-gray-900"
              }
            />
          </button>
          {/* Menu */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`md:hidden py-2 px-3 rounded-full focus:outline-none bg-slate-200 dark:bg-dark1 transition-transform duration-300 ${
              menuOpen ? "rotate-90" : ""
            }`}
          >
            <i
              className={
                menuOpen
                  ? "ri-close-line text-gray-900 dark:text-gray-100"
                  : "ri-menu-line text-gray-900 dark:text-gray-100"
              }
            />
          </button>
        </div>
      </div>
      {/* Mobile navigation */}
      <div
        className={`${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden absolute top-full left-0 z-10 w-full shadow-md ease-in-out backdrop-blur-lg overflow-hidden bg-slate-100 dark:bg-dark0 transition-all duration-300`}
      >
        <div className="flex flex-col pb-6 pt-2 px-7 space-y-3 text-lg">
          {renderLinks}
        </div>
      </div>
    </header>
  );
}
