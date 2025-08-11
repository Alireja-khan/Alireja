import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <section id="about" className="text-white md:pt-36 md:pb-36 pb-10 px-6 md:px-40 relative">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co/gL32FMnh/Whats-App-Image-2025-04-04-at-5-11-35-AM-1.jpg"
            alt="Alireja"
            className="rounded-2xl shadow-lg w-80 md:w-96 object-cover relative z-10"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-orange-500">About</span> Me
          </h2>

          <p className="text-lg mb-4">
            Hello! I’m <span className="text-orange-500">{"</"}</span><span className="text-orange-500 font-semibold">Alireja</span><span className="text-orange-500">{">"}</span>, a passionate and self-driven web developer from Bangladesh. I specialize in building responsive, user-friendly, and performance-optimized web apps using modern tools like React, Firebase, and MongoDB.
          </p>

          <p className="text-lg mb-4">
            My journey into programming started with simple curiosity. That spark turned into a deep passion when I discovered Jhankar Mahbub Sir and started learning from his content. Since then, I’ve gone from building basic HTML pages to developing full-stack applications—and I’ve loved every moment of it.
          </p>

          <p className="text-lg mb-4">
            I genuinely enjoy working on meaningful projects that solve real problems or bring fun, creative ideas to life. I care a lot about clean UI, smooth animations, and creating a great user experience. I also challenge myself to keep learning and improving with every project.
          </p>

          <p className="text-lg mb-4">
            Outside of coding, I like sketching, watching movies, playing cricket and chess, and exploring new trends in technology. I believe staying curious—both in tech and in life—helps me stay inspired and grow.
          </p>

          <p className="text-lg">
            I’m not just here to code. I’m here to create, grow, and hopefully make a difference—one project at a time.
          </p>

          <p className="text-lg mb-4">
            Want to build something together? <a href="#contact" className="text-orange-500">Let’s connect!</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
