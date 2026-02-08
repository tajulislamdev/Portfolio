"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/80 shadow-lg"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-13 h-10 object-contain rounded-full"
          />
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-bold absolute left-1/2 transform -translate-x-1/2 text-xl">
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div
          className="md:hidden text-3xl cursor-pointer text-white"
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
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col justify-center items-center space-y-6 text-xl font-semibold text-gray-100"
          >
            {["home", "about", "skills", "projects", "contact"].map((link) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-md hover:opacity-90 transition"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
