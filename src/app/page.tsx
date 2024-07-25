"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    if (today === 5) {
      setMessage("It's Friday");
    } else {
      setMessage("It's not Friday yet!");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        {message}
      </h1>
      <div className="flex items-center">
        <FaSun className="text-yellow-500 dark:text-gray-400" />
        <label className="relative inline-flex items-center cursor-pointer mx-4">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <FaMoon className="text-gray-800 dark:text-yellow-400" />
      </div>
    </main>
  );
}
