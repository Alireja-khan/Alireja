import React, { useEffect } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub, FaRunning } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import projects from "../data/projectsData";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((proj) => proj.id.toString() === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white p-6">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <RouterLink
          to="/"
          className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2"
        >
          <FiArrowLeft /> Return Home
        </RouterLink>
      </div>
    );
  }

  return (
    <motion.main
      className="min-h-screen bg-[#343434] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-2"
            >
              <RouterLink
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
                className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <FiArrowLeft /> All Projects
              </RouterLink>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">{project.title}</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl text-orange-500 md:text-5xl font-bold mb-2"
            >
              <span className="mr-5 text-white">The</span>
              {project.title}
            </motion.h1>

            {project.subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400"
              >
                {project.subtitle}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {project.link && (
              <motion.a
                className="flex items-center gap-2 bg-orange-500 text-black font-semibold px-6 py-2 rounded-lg transition uppercase tracking-wide"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink /> Live Demo
              </motion.a>
            )}
            {project.code?.client && (
              <a
                href={project.code.client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-orange-500 hover:text-black border border-orange-500 text-white px-5 py-2.5 rounded-lg transition-all"
              >
                <FaGithub /> Client Code
              </a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Carousel (unchanged as requested) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {project.screenshots?.map((shot, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={shot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto max-h-[600px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Overview */}
            {project.overview && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.overview}
                </p>
              </motion.section>
            )}

            {/* Features */}
            {project.features && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="bg-[#1e1e1e] p-4 rounded-lg border border-[#2a2a2a] hover:border-orange-500/30 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-orange-500 mt-0.5">▹</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {project.challenges && (
                  <div>
                    <h3 className="text-xl text-orange-500 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="text-gray-400 before:content-['-'] before:mr-2 before:text-orange-500">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.solutions && (
                  <div>
                    <h3 className="text-xl text-orange-500 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="text-gray-400 before:content-['-'] before:mr-2 before:text-green-500">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


              </motion.section>
            )}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="lg:flex items-center lg:block md:hidden hidden ml-55 gap-4 mb-10"
            >
              <RouterLink
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
                className="text-white border bg-[#2a2a2a] border-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-black hover:font-semibold transition-colors flex items-center gap-2"
              >
                <FaRunning className="transform -scale-x-100" /> <span><FiArrowLeft className="text-orange-500 hover:text-black" /></span> Go Back to All Projects
              </RouterLink>
            </motion.div>
          </div>

          {/* Sidebar (1/3 width) */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#2a2a2a] text-orange-500 px-3 py-1 rounded-full text-sm font-medium border border-[#3a3a3a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Future Improvements */}
            {project.improvements && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  Future Roadmap
                </h3>
                <ul className="space-y-3">
                  {project.improvements.map((item, i) => (
                    <li key={i} className="text-gray-400 before:content-['•'] before:mr-2 before:text-orange-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.code?.client && (
                  <a
                    href={project.code.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    <FaGithub /> Client Repository
                  </a>
                )}
                {project.code?.server && (
                  <a
                    href={project.code.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    <FaGithub /> Server Repository
                  </a>
                )}
              </div>

            </motion.div>

            {/* Project Metrics Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a]"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Project Metrics
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Development Scope */}
                <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a]">
                  <div className="text-orange-500 text-2xl font-bold mb-1">
                    {project.features.length}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Key Features
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a]">
                  <div className="text-orange-500 text-2xl font-bold mb-1">
                    {project.technologies.length}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Technologies
                  </div>
                </div>

                {/* Challenges Overcome */}
                <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a]">
                  <div className="text-orange-500 text-2xl font-bold mb-1">
                    {project.challenges.length}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Challenges Solved
                  </div>
                </div>

                {/* Future Plans */}
                <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#3a3a3a]">
                  <div className="text-orange-500 text-2xl font-bold mb-1">
                    {project.improvements.length}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Future Plans
                  </div>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="mb-6">
                <h4 className="text-orange-500 text-sm font-semibold mb-2">
                  Technical Highlights
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.solutions.slice(0, 3).map((solution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      {solution.split('.').shift()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Impact */}
              <div>
                <h4 className="text-orange-500 text-sm font-semibold mb-2">
                  Project Impact
                </h4>
                <p className="text-gray-300 text-sm">
                  This {project.subtitle.toLowerCase()} serves {project.title.includes('Aaponaloi') ? 'building residents and managers' :
                    project.title.includes('Food') ? 'food donors and recipients' :
                      project.title.includes('Hobby') ? 'hobby enthusiasts' : 'bill payers'} by {project.overview.split('.').shift().toLowerCase()}.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className=" lg:hidden block md:block text-center mx-auto gap-4 mb-10"
            >
              <RouterLink
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
                className="text-white border bg-[#2a2a2a] border-orange-500 py-2 px-4 pl-10 md:pl-45 rounded-lg hover:bg-orange-500 hover:text-black hover:font-semibold transition-colors flex items-center gap-2"
              >
                <FaRunning className="transform -scale-x-100" /> <span><FiArrowLeft className="text-orange-500 hover:text-black" /></span> Go Back to All Projects
              </RouterLink>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectDetails;