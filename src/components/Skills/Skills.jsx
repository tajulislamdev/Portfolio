"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="skill-icon text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="skill-icon text-blue-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="skill-icon text-teal-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="skill-icon text-yellow-400" /> },
  { name: "ReactJS", icon: <FaReact className="skill-icon text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="skill-icon text-white" /> },
  { name: "Redux", icon: <SiRedux className="skill-icon text-purple-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="skill-icon text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="skill-icon text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon text-green-700" /> },
  { name: "Git", icon: <FaGitAlt className="skill-icon text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="skill-icon text-white" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          My Skills & Abilities
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(99,102,241,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-900 p-6 rounded-xl text-center cursor-pointer border border-gray-800"
            >
              {/* Floating Icon */}
              <motion.div
                variants={floating}
                animate="animate"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>

              <p className="text-lg font-medium text-gray-200 mt-4">
                {skill.name}
              </p>

              {/* Gradient Border Glow */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition duration-300"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
