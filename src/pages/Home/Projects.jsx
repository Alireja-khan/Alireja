import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Aaponaloi",
    description:
      "Rental Management System - Full-stack platform for apartment listings, tenant applications, payments, and announcements with secure auth & responsive design.",
    image: "https://i.ibb.co.com/c77K4ys/Screenshot-2025-08-12-005520.png",
    link: "https://aaponaloi.web.app/",
    code: "https://github.com/Alireja-khan/Food-Circle-Client?tab=readme-ov-file",
    technologies: ["react", "javascript", "firebase", "mongodb", "motion", "framer-motion", "node-js", "firebase-auth", "express-js", "tailwindcss", "chakra-ui", "aos-animation", "tanstack-react-query"],
  },
  {
    id: 2,
    title: "Food-Circle",
    description:
      "A full-stack web app to donate and request food, reducing waste and helping the community. Users can add, manage, and request food with secure auth and responsive UI.",
    image: "https://i.ibb.co/tTXW25HC/Screenshot-2025-06-28-232042.png",
    link: "https://utter-waste.surge.sh/",
    code: "https://github.com/Alireja-khan/Food-Circle-Client?tab=readme-ov-file",
    technologies: ["react", "javascript", "firebase", "mongodb", "node-js", "firebase-auth", "express-js", "tailwindcss", "daisyUI", "framer-motion"],
  },
  {
    id: 3,
    title: "Hobby-Hub",
    description:
      "A social web app built with React, Firebase & MongoDB, where users can create, join, and manage hobby groups with authentication and role-based access.",
    image: "https://i.ibb.co/Y7PCFj5c/Screenshot-2025-06-28-235213.png",
    link: "https://hobbyhub-app.web.app/",
    code: "https://github.com/Alireja-khan/Hobby-Hub-Clint?tab=readme-ov-file",
    technologies: ["react", "javascript", "firebase", "mongodb", "node-js", "firebase-auth", "express-js", "tailwindcss", "daisyUI", "framer-motion"],
  },
  {
    id: 4,
    title: "Pay-Tracker",
    description:
      "A React bill pay manager web app that uses Firebase to track your bills and daily habits.",
    image: "https://i.ibb.co/yxKDwLQ/Screenshot-2025-06-29-002109.png",
    link: "http://expensive-peace.surge.sh/",
    code: "https://github.com/Alireja-khan/Pay-Tracker?tab=readme-ov-file",
    technologies: ["react", "javascript", "firebase", "node-js", "firebase-auth", "tailwindcss", "daisyUI"],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <motion.section
      id="projects"
      className="pb-15 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 bg-[#343434]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className=" bg-clip-text bg-gradient-to-r text-orange-500">Featured</span> Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            A curated selection of my recent work, showcasing innovative solutions and clean implementations.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Project selector */}
          <motion.div
            className="w-full  lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 px-6 py-3 lg:min-h-full rounded-lg transition-all duration-300 ${activeProject === index
                  ? "bg-orange-500 text-black font-medium"
                  : "bg-[#1e1e1e] hover:bg-[#2a2a2a] text-gray-300"
                  }`}
              >
                {project.title}
              </button>
            ))}

            {/* Contact Call-to-Action Card */}
            <div className="p-6 border rounded-xl border-orange-500/30 bg-[#2a2a2a] flex flex-col justify-between h-full">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-orange-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-medium text-white mb-2">Have a project in mind?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  I'm currently available for new opportunities and collaborations.
                </p>
              </div>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="w-full text-center border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-colors px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get In Touch
              </ScrollLink>
            </div>
          </motion.div>

          {/* Active project display */}
          <motion.div
            className="w-full lg:w-3/4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
            key={activeProject}
          >
            <div className="relative group h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[#2a2a2a]">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {projects[activeProject].title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4 max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {projects[activeProject].description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  {projects[activeProject].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#1e1e1e] border border-[#2a2a2a] text-orange-400 px-3 py-1.5 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <a
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-all duration-300 font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                  <Link
                    to={`/project/${projects[activeProject].id}`}
                    className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-2.5 rounded-lg hover:bg-orange-500/10 transition-all duration-300 font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Case Study
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          className="mt-10 mr-40 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: false }}
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-medium group"
          >
            <span>Let's Build Something Together</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </ScrollLink>
        </motion.div> */}

      </div>
    </motion.section>
  );
};

export default Projects;