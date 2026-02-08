"use client";

import { motion } from "framer-motion";
import { Code2, Languages, BookOpen, School } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingIcon = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const cards = [
  {
    icon: Code2,
    title: "Ahmad's Education, Dhaka",
    desc: "Diploma in Computer Technology (MERN Stack Development).",
    color: "from-indigo-500 to-purple-600",
    bg: "bg-gray-900",
  },
  {
    icon: BookOpen,
    title: "Nibras Academy, Bangladesh",
    desc: "Diploma in Arabic Language and Literature.",
    color: "from-emerald-500 to-green-600",
    bg: "bg-gray-900",
  },
  {
    icon: Languages,
    title: "Ahmad's Education, Dhaka",
    desc: "Diploma in English Language.",
    color: "from-orange-500 to-pink-600",
    bg: "bg-gray-900",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3">
            <School className="w-10 h-10 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              EDUCATION
            </h2>
          </div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A journey of learning across technology and languages.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -14, scale: 1.05 }}
                className={`relative p-10 rounded-[2rem] ${card.bg} shadow-xl hover:shadow-2xl transition-all border border-white/10`}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <motion.div
                    variants={floatingIcon}
                    animate="animate"
                    className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg`}
                  >
                    <Icon className="w-11 h-11 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
