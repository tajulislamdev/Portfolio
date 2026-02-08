import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AboutImage from "../../assets/images/about.jpg";

const AboutSection = ({ handleOrderPopup }) => {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 px-6 md:px-12">

        {/* Left Image */}
        <motion.div
          className="order-2 sm:order-1 md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-shadow duration-500">
            <motion.img
              src={AboutImage}
              alt="About Me"
              className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-auto object-cover rounded-3xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="order-1 sm:order-2 md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-8"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT ME
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Hello! I'm <strong className="text-white">Tajul Islam</strong>, a professional web developer with a passion for creating beautiful, responsive, and user-friendly web applications. I specialize in modern web technologies and love solving complex problems with simple, intuitive solutions.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            My goal is not just to write code, but to craft experiences that are enjoyable, efficient, and visually appealing. Whether it’s front-end design or full-stack development, I aim to deliver quality work every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default AboutSection;
