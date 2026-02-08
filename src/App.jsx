import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Education from "./components/Education/Education";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <section id="home">
        <Hero handleOrderPopup={handleOrderPopup} />
      </section>
      <section id="about">
        <About handleOrderPopup={handleOrderPopup} />
      </section>

      <section id="education">
        <Education handleOrderPopup={handleOrderPopup} />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
