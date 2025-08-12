import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="text-white md:pt-24 md:pb-24 pt-10 pb-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-40 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Side - Image */}
        <motion.div
          className="relative flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src="https://i.ibb.co/gL32FMnh/Whats-App-Image-2025-04-04-at-5-11-35-AM-1.jpg"
            alt="Alireja"
            className="rounded-2xl shadow-lg w-64 sm:w-72 md:w-80 lg:w-120 object-cover relative z-10"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="overflow-y-auto min-h-full md:max-h-[40vh] lg:max-h-130 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 pr-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-white">
            <span className="text-orange-500">About</span> Me
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-base sm:text-lg md:line-clamp-none">
              Hello! I'm <span className="text-orange-500">{"</"}</span><span className="text-orange-500 font-semibold">Alireja</span><span className="text-orange-500">{">"}</span>, a passionate and self-driven web developer from Bangladesh. I specialize in building responsive, user-friendly, and performance-optimized web apps using modern tools like React, Firebase, and MongoDB.
            </p>

            <p className="text-base sm:text-lg md:line-clamp-none">
              My journey into programming started with simple curiosity. That spark turned into a deep passion when I discovered Jhankar Mahbub Sir and started learning from his content. Since then, I've gone from building basic HTML pages to developing full-stack applications—and I've loved every moment of it.
            </p>

            <p className="text-base sm:text-lg md:line-clamp-none">
              I genuinely enjoy working on meaningful projects that solve real problems or bring fun, creative ideas to life. I care a lot about clean UI, smooth animations, and creating a great user experience. I also challenge myself to keep learning and improving with every project.
            </p>

            <p className="text-base sm:text-lg md:line-clamp-none">
              Outside of coding, I like sketching, watching movies, playing cricket and chess, and exploring new trends in technology. I believe staying curious—both in tech and in life—helps me stay inspired and grow.
            </p>

            <p className="text-base sm:text-lg md:line-clamp-none">
              I'm not just here to code. I'm here to create, grow, and hopefully make a difference—one project at a time.
            </p>

            <p className="text-base sm:text-lg">
              Want to build something together? <a href="#contact" className="text-orange-500 hover:underline">Let's connect!</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;