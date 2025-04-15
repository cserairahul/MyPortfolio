import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side - Links */}
        <div className="hidden md:flex gap-6 font-semibold">
          <a href="#about" className="hover:text-gray-300">About Me</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#certificates" className="hover:text-gray-300">Certificates</a>
          <a href="#contact" className="hover:text-gray-300">Contact Me</a>
        </div>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-white">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-3 text-center">
          <a href="#about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#projects" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certificates" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


