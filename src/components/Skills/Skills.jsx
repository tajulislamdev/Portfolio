import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="w-16 h-16 mx-auto mb-4 text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="w-16 h-16 mx-auto mb-4 text-blue-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-16 h-16 mx-auto mb-4 text-teal-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="w-16 h-16 mx-auto mb-4 text-yellow-400" /> },
  { name: "ReactJS", icon: <FaReact className="w-16 h-16 mx-auto mb-4 text-blue-500" /> },
  { name: "NodeJS", icon: <FaNodeJs className="w-16 h-16 mx-auto mb-4 text-green-600" /> },
  { name: "MongoDB", icon: <FaDatabase className="w-16 h-16 mx-auto mb-4 text-green-700" /> },
  { name: "Git", icon: <FaGitAlt className="w-16 h-16 mx-auto mb-4 text-red-500" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Skills & Abilities
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-700 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl"
            >
              {skill.icon}
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


