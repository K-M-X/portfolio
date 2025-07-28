"use client";

export default function Footer() {
  return (
    <footer className="flex px-6 py-4 bg-slate-100 dark:bg-dark0 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto border-t-2 border-gray-300 dark:border-dark2 pt-4 transition-colors duration-300">
        {/* Copyright */}
        <h3 className="text-xs xl:text-sm font-thin md:ml-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          &copy; 2025 All Rights Reserved
        </h3>
        {/* Creator */}
        <span className="text-xs xl:text-sm font-thin md:mr-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          Made by KMX
          <span
            className="inline-block w-1 h-1 bg-green-600 rounded-full ml-1"
            aria-hidden="true"
          ></span>
        </span>
      </div>
    </footer>
  );
}
