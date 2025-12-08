import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import contactImg from "../../assets/contact.jpg";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    
        "YOUR_TEMPLATE_ID",     
        form.current,
        "YOUR_PUBLIC_KEY"      
      )
      .then(
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, please try again!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
           <h2
  className="text-4xl font-bold text-center mb-12"
  style={{
    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
   CONTACT ME
</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project or idea? Let’s connect — I’d love to collaborate and build something amazing together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-sm h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={contactImg}
                alt="Contact"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md font-semibold shadow-md transition-all duration-300"
              >
                Send Message ✉️
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

