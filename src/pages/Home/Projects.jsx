// Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Food-Circle",
    description:
      "A React Food Share and Donating web app that uses Firebase, MongoDB, CRUD operations to add and find foods.",
    image: "https://i.ibb.co/tTXW25HC/Screenshot-2025-06-28-232042.png",
    link: "https://food-circle-a4f01.web.app/",
    code: "https://github.com/Alireja-khan/Food-Circle-Client?tab=readme-ov-file",
    technologies: ["React", "Firebase", "MongoDB", "CRUD"],
  },
  {
    id: 2,
    title: "Hobby-Hub",
    description:
      "A social web app built with React, Firebase & MongoDB, where users can create, join, and manage hobby groups with authentication and role-based access.",
    image: "https://i.ibb.co/Y7PCFj5c/Screenshot-2025-06-28-235213.png",
    link: "https://hobbyhub-app.web.app/",
    code: "https://github.com/Alireja-khan/Hobby-Hub-Clint?tab=readme-ov-file",
    technologies: ["React", "Firebase", "MongoDB", "Auth", "RBAC"],
  },
  {
    id: 3,
    title: "Pay-Tracker",
    description:
      "A React bill pay manager web app that uses Firebase to track your bills and daily habits.",
    image: "https://i.ibb.co/yxKDwLQ/Screenshot-2025-06-29-002109.png",
    link: "http://expensive-peace.surge.sh/",
    code: "https://github.com/Alireja-khan/Pay-Tracker?tab=readme-ov-file",
    technologies: ["React", "Firebase"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <motion.section
      id="projects"
      className="py-36 px-6 md:px-16 xl:px-40 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.8 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="max-w-4xl mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="text-orange-500">My</span> Projects
        </h2>
        <p className="text-gray-400 text-lg">
          A showcase of my recent work and practical applications of my skills,
          crafted to solve real-world problems.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between">
        <div className="relative w-full lg:w-2/3 h-[420px] flex items-center justify-center overflow-hidden">
          {projects.map((project, index) => {
            const offset = (index - currentIndex + projects.length) % projects.length;
            let zIndex = 0, scale = 1, opacity = 1, translateX = 0;
            const isTopCard = offset === 0;

            if (isTopCard) {
              zIndex = 20;
              scale = 1;
              opacity = 1;
              translateX = 0;
            } else if (offset === 1) {
              zIndex = 10;
              scale = 0.9;
              opacity = 0.4;
              translateX = 140;
            } else if (offset === 2 || (offset === -1 && projects.length === 3)) {
              zIndex = 10;
              scale = 0.9;
              opacity = 0.4;
              translateX = -140;
            } else {
              opacity = 0;
              scale = 0.8;
              zIndex = 0;
              translateX = 0;
            }

            return (
              <motion.div
                key={project.id}
                onClick={nextCard}
                className="absolute transition-all duration-700 ease-in-out group cursor-pointer w-full sm:w-[660px] h-[360px] rounded-xl overflow-hidden shadow-xl bg-[#2a2a2a] text-white"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {isTopCard && (
                    <div className="absolute inset-0 bg-[#000000] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-orange-500 text-black px-2 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-3">
                        <Link to={`/project/${project.id}`}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-70}
                          className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer text-center"
                        >
                          <button className="">View More</button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-3xl text-white font-semibold mb-4">
            Hover Over Any Project to Learn More..
          </h3>
          <p className="text-gray-400 text-lg mb-6">
            These builds are the foundation of my creative work and engineering discipline.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer text-center"
          >
            Keep in Touch
          </ScrollLink>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
