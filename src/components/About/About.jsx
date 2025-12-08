import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AboutImage from "../../assets/images/ABOUT .jpg"; 

const AboutSection = ({ handleOrderPopup }) => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          className="order-2 sm:order-1 md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <motion.img
              src={AboutImage}
              alt="About Me"
              className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[450px] h-auto object-cover rounded-3xl"
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
            className="text-4xl font-bold text-center mb-12"
            style={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT ME
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Hello! I'm <strong>Tajul Islam</strong>, a professional web developer with a passion for creating beautiful, responsive, and user-friendly web applications. I specialize in modern web technologies and love solving complex problems with simple, intuitive solutions.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            My goal is not just to write code, but to craft experiences that are enjoyable, efficient, and visually appealing. Whether it’s front-end design or full-stack development, I aim to deliver quality work every time.
          </p>

          <div className="pt-6">
            <button
              onClick={handleOrderPopup}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:opacity-90 transition"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ PropTypes (optional নয়, তাই parent থেকে পাঠাতে হবে)
AboutSection.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default AboutSection;
