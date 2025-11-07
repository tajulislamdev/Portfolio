"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users, School } from "lucide-react";

const cards = [
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-600 dark:text-purple-300" />,
    title: "Expert Mentors",
    desc: "Learn from industry leaders who bring real-world experience and passion for teaching.",
    bg: "bg-purple-50 dark:bg-purple-900/30",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-indigo-600 dark:text-indigo-300" />,
    title: "Rich Resources",
    desc: "Access a curated collection of books, tutorials, and digital learning tools.",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  {
    icon: <Award className="w-10 h-10 text-green-600 dark:text-green-300" />,
    title: "Achievements",
    desc: "Celebrate your success with certificates and recognition as you progress.",
    bg: "bg-green-50 dark:bg-green-900/30",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-600 dark:text-orange-300" />,
    title: "Global Community",
    desc: "Connect and collaborate with learners and educators across the world.",
    bg: "bg-orange-50 dark:bg-orange-900/30",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-2xl bottom-0 right-0" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Heading with Icon */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <School className="w-10 h-10 text-indigo-600 dark:text-indigo-300" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            EDUCATION 
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 ${card.bg}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white/70 dark:bg-gray-800/50 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 mx-auto w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
