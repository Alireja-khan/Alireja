import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress,
  SiMongodb, SiFirebase, SiJsonwebtokens, SiPostman
} from "react-icons/si";

const Skills = () => {
  const skillSet = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "REST API", icon: <SiPostman /> },
  ];

  return (
    <section id="skills" className="w-full text-white py-36 px-6 md:px-40">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 80, scale: 0.95, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} // 👈 re-animate every time
      >

        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-6 text-start">
            <span className="text-orange-500">My</span> Skills
          </h2>
          <p className="text-lg text-gray-400 mb-10 text-start max-w-xl">
            Here are the tools and technologies I use to bring ideas to life:
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillSet.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2a2a] px-4 py-4 rounded-lg shadow hover:bg-orange-500 hover:text-black transition flex flex-col items-center justify-center gap-2 text-orange-500"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.07, // 👈 stagger effect
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <div className="text-sm font-medium">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
