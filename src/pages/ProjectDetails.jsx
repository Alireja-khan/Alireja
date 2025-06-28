import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projectsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);

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

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-40">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-orange-400 text-xl mb-6">{project.subtitle}</h2>

        {/* Screenshot Carousel */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {project.screenshots.map((shot, index) => (
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
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Overview:</h3>
          <p className="text-gray-300">{project.overview}</p>
        </div>

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
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Challenges Faced:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Solutions Implemented:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.solutions.map((solution, i) => (
              <li key={i}>{solution}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Future Improvements:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {project.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

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

        {/* Back Button */}
        <RouterLink
          to="/"
          onClick={() => {
            setTimeout(() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }, 100); // delay to ensure route change
          }}
          className="text-orange-400 underline hover:text-orange-300 transition text-sm"
        >
          ← Back to Projects
        </RouterLink>

      </div>
    </section>
  );
};

export default ProjectDetails;
