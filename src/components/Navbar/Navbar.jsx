"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dark mode toggle
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Animated Toggle Component
  const AnimatedToggle = () => (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        darkMode ? "bg-yellow-400" : "bg-gray-300 dark:bg-gray-600"
      }`}
      title={darkMode ? "Light Mode" : "Dark Mode"}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center`}
      >
        {darkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </motion.div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-13 h-10 object-contain rounded-full"
          />
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-bold absolute left-1/2 transform -translate-x-1/2 text-xl">
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-600 dark:hover:text-yellow-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Resume
          </a>
          <AnimatedToggle />
        </div>

        {/* Mobile Menu Icon with Animation */}
        <motion.div
          className="md:hidden text-3xl cursor-pointer text-gray-800 dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.8, rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex flex-col justify-center items-center space-y-6 text-xl font-semibold text-gray-800 dark:text-gray-100"
          >
            {["home", "about", "skills", "projects", "contact"].map((link) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-md hover:opacity-90 transition"
            >
              Resume
            </a>

            <AnimatedToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
