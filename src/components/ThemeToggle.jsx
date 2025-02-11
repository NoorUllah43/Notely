// src/components/ThemeToggle.js
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { AppContext } from "../context/context";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  // Check for saved theme preference in localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button onClick={toggleTheme} className={`text-xl h-8 w-8 rounded-full border-2 border-gray-500 flex items-center justify-center ${isDarkMode ? 'text-amber-300 ' : ''}`}>
      {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;