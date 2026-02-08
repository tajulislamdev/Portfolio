import { motion } from "framer-motion";
import logo from "../../assets/images/hero.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      id: "facebook",
      url: "https://facebook.com/profile.php?id=61579169183396",
      icon: <FaFacebook />,
    },
    {
      id: "linkedin",
      url: "https://linkedin.com/in/tajul-islam-b4803a378",
      icon: <FaLinkedin />,
    },
    {
      id: "github",
      url: "https://github.com/tajulislamdev",
      icon: <FaGithub />,
    },
    {
      id: "twitter",
      url: "https://x.com/TajulIslam43453",
      icon: <FaTwitter />,
    },
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 relative z-10">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo Section */}
          <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="mb-4">
            <img
              src={logo}
              alt="Tajul Islam Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg border-2 border-blue-500"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white mb-3 tracking-wide"
          >
            Md Tajul Islam
          </motion.h2>

          {/* Description */}
          <p className="text-gray-400 mb-4 max-w-md">
             Thank you for visiting my portfolio!
              I truly appreciate your time if my work inspires you,let's create
              something amazing together.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {quickLinks.map(({ name, link }) => (
              <li key={name}>
                <a
                  href={link}
                  className="hover:text-white transition duration-300 hover:translate-x-1 inline-block"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaLocationArrow className="text-blue-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMobileAlt className="text-blue-400" />
              <span>+880 1641739041</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span>developer.tajulislam@gmail.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            {socialLinks.map(({ id, url, icon }) => (
              <motion.a
                key={id} 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition shadow-md"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm relative z-10"
      >
        © {new Date().getFullYear()} Md Tajul Islam — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
