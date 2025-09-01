import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark" // check saved theme
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 text-2xl text-white"
    >
      {dark ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default DarkModeToggle;
