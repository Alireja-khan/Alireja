import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaComments
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiReactrouter,
  SiReacthookform,
  SiFramer,
  SiDaisyui,
  SiChakraui,
  SiReactquery,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Skills = () => {
  // Custom Surge Icon (lightning bolt)
  const SurgeIcon = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 1L3 14h9l-2 9 10-12h-9l2-9z" />
    </svg>
  );

  // Custom AOS Icon (animated scroll)
  const AosIcon = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
      <path d="M8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z" />
    </svg>
  );

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React Router", icon: <SiReactrouter /> },
        { name: "React Hook Form", icon: <SiReacthookform /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
        { name: "Chakra UI", icon: <SiChakraui /> },
        { name: "Tanstack Query", icon: <SiReactquery /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "REST API", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Surge", icon: <SurgeIcon /> },
        { name: "AOS", icon: <AosIcon /> },
      ]
    },
    {
      title: "Other",
      skills: [
        { name: "Full-Stack Development", icon: <FaCode /> },
        { name: "Communication", icon: <FaComments /> },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full text-white md:pt-36 pb-10 md:pb-36 px-6 md:px-40">
      <div
      >
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-6 text-start">
            <span className="text-orange-500">My</span> Skills
          </h2>
          <p className="text-lg text-gray-400 mb-10 text-start max-w-xl">
            Here are the tools and technologies I use to bring ideas to life:
          </p>
        </div>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-start border-b border-orange-500 pb-2 inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {category.title}
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-[#2a2a2a] px-4 py-4 rounded-lg shadow hover:bg-orange-500 hover:text-black transition flex flex-col items-center justify-center gap-2 text-orange-500"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;