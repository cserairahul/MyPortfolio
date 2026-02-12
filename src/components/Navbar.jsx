import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Navlinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-20 text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Rahul <span className="text-pink-500">Rai</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {Navlinks.map((item) => (
            <li key={item.name} className="relative group">
              <a href={item.link} className="transition">
                {item.name}
              </a>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/90 backdrop-blur-xl text-white flex flex-col items-center gap-8 py-8 font-medium"
        >
          {Navlinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
