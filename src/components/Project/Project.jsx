"use client";

import { FaCode, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    img: "/public/project/project1.jpg",
    title: "Books-store",
    live: "https://books-store-chi.vercel.app/",
    code: "https://github.com/tajulislamdev/Books-Store",
  },
  {
    id: 2,
    img: "/public/project/project2.jpg",
    title: "Madrasha",
    live: "https://madrasha-three.vercel.app/",
    code: "https://github.com/tajulislamdev/madrasha",
  },
  {
    id: 3,
    img: "/public/project/project3.jpg",
    title: "Portfolio",
    live: "https://tajul-islam-portfolio-one.vercel.app/",
    code: "https://github.com/tajulislamdev/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold mb-3 gap-2">
            <FaLaptopCode className="text-indigo-500 text-4xl" />
            <span className="text-sky-400">Projects</span>
            <span className="text-orange-400">Made</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(({ id, img, title, live, code }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-900 border border-gray-700 transition-transform hover:-translate-y-2"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover group-hover:opacity-80 transition duration-300"
                loading="lazy"
              />

              {/* Overlay */}
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

              {/* Title */}
              <div className="bg-indigo-600 text-white font-semibold text-center py-3">
                {title}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/tajulislamdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-500 transition inline-block"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
