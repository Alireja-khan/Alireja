import React, { useEffect } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import projects from "../data/projectsData";
import navImg from "../assets/letter-a4.png";
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
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <RouterLink
          to="/"
          className="text-orange-500 mt-4 inline-block underline hover:text-orange-300"
        >
          Go back home
        </RouterLink>
      </div>
    );
  }

  // Function to navigate and scroll to #home after render
  const goToHomeAndScroll = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <motion.section
      className="bg-[#1a1a1a] text-white py-20 px-6 md:px-40"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-4 mb-6">
          <img
            className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform"
            src={navImg}
            alt="logo"
            onClick={goToHomeAndScroll}
          />
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>

        {project.subtitle && (
          <h2 className="text-gray-400 text-xl mb-6">{project.subtitle}</h2>
        )}

        {/* Screenshot Carousel with loop + autoplay */}
        <div className="mb-8 rounded-xl overflow-hidden">
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
                  className="w-full h-112 object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overview */}
        {project.overview && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Overview:</h3>
            <p className="text-gray-300">{project.overview}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Technology Stack:</h3>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <li
                key={i}
                className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Challenges Faced:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Solutions */}
        {project.solutions && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Solutions Implemented:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.solutions.map((solution, i) => (
                <li key={i}>{solution}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Improvements */}
        {project.improvements && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Future Improvements:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.improvements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-6 py-2 rounded-full flex items-center gap-2"
            >
              <FiExternalLink /> Live Site
            </a>
          )}
          {project.code?.client && (
            <a
              href={project.code.client}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-6 py-2 rounded-full flex items-center gap-2"
            >
              <FaGithub /> Client Repo
            </a>
          )}
          {project.code?.server && (
            <a
              href={project.code.server}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-6 py-2 rounded-full flex items-center gap-2"
            >
              <FaGithub /> Server Repo
            </a>
          )}
        </div>

        {/* Back to Projects */}
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
          className="inline-flex items-center gap-2 border border-orange-500 hover:bg-orange-600 bg-orange-500 text-black px-5 py-2 rounded-full transition-all duration-300 mt-4 text-sm"
        >
          <span className="text-lg">←</span>
          Back to Projects
        </RouterLink>

      </div>
    </motion.section>
  );
};

export default ProjectDetails;
