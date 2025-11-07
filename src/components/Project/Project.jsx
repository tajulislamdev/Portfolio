"use client";
import { FaCode, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";
import Project1 from "../../assets/project/project1.jpg";
import Project2 from "../../assets/project/project2.jpg";
import Project3 from "../../assets/project/project3.jpg";

const projectsData = [
  {
    id: 1,
    img: Project1,
    title: "Instagram MERN",
    live: "#",
    code: "#",
  },
  {
    id: 2,
    img: Project2,
    title: "Flipkart MERN",
    live: "#",
    code: "#",
  },
  {
    id: 3,
    img: Project3,
    title: "ResumeGen",
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold mb-3 gap-2">
            <FaLaptopCode className="text-indigo-600 dark:text-yellow-400 text-4xl" />
            <span className="text-sky-700 dark:text-sky-400">Projects</span>
            <span className="text-orange-800 dark:text-orange-300">Made</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-700 dark:bg-yellow-400 mx-auto rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(({ id, img, title, live, code }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 transition-transform transform hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover group-hover:opacity-80 transition duration-300"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-yellow-300 transition"
                >
                  <FaExternalLinkAlt /> View
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-blue-400 transition"
                >
                  <FaCode /> Code
                </a>
              </div>

              {/* Title Banner */}
              <div className="bg-indigo-600 dark:bg-yellow-500 text-white dark:text-black font-semibold text-center py-3">
                {title}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-indigo-700 dark:bg-yellow-500 text-white dark:text-black rounded-md font-semibold hover:bg-indigo-600 dark:hover:bg-yellow-400 transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
