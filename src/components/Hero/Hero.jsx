"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiHandRaised } from "react-icons/hi2";
import HeroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden flex items-center min-h-[90vh] py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-500">
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-12 lg:px-16">

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5 sm:space-y-6 md:space-y-8 mt-8 sm:mt-10 md:mt-0 w-full">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-snug sm:leading-tight"
          >
            <span className="flex justify-center md:justify-start items-center gap-2 mb-2">
              <motion.span
                animate={{ rotate: [0, 15, -10, 15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="inline-block origin-bottom"
              >
                <HiHandRaised className="text-3xl sm:text-4xl text-cyan-500" />
              </motion.span>

              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-500">
                Hi, I'm
              </span>
            </span>

            <span className="text-sky-600 dark:text-sky-400 block">
              TAJUL ISLAM
            </span>

            <span className="text-gray-800 dark:text-gray-100 block mt-1 text-2xl sm:text-3xl lg:text-4xl">
              <Typewriter
                words={["Frontend Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I build modern, performance-optimized web applications using React,
            Next.js, and TailwindCSS. I focus on creating smooth, elegant, and
            user-friendly interfaces for all devices.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start gap-6 mt-4"
          >
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sky-500 dark:hover:text-sky-300 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end w-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl
                       w-[85%] sm:w-[75%] md:w-[90%] lg:w-[80%]
                       max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                       aspect-[4/5] mt-8 sm:mt-10 md:mt-12"
          >
            <img
              src={HeroImage}
              alt="Tajul Islam"
              className="object-cover object-center w-full h-full rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent dark:from-black/50"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
