import React from "react";
import { useParams, Link as RouterLink  } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projectsData";
import { Link } from "react-scroll";

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
        <section className="text-white py-20 px-6 md:px-40">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover rounded-xl mb-8"
                />

                {/* Description */}
                <p className="text-lg mb-6 text-gray-300">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Technology Stack:</h3>
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

                {/* Challenges */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Challenges Faced:</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {project.challenges || "Handled authentication, state management, and cross-device responsiveness."}
                    </p>
                </div>

                {/* Future Plans */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Future Improvements:</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {project.improvements || "Planning to add dark mode, optimize performance, and implement testing."}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-6 py-2 rounded-full flex items-center gap-2"
                    >
                        <FiExternalLink /> Live Site
                    </a>
                    <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-6 py-2 rounded-full flex items-center gap-2"
                    >
                        <FaGithub /> GitHub Repo
                    </a>
                </div>

                {/* Back Button */}
                <RouterLink
                    to="/#projects"
                    className="text-orange-400 underline hover:text-orange-300 transition text-sm"
                >
                    ← Back to Projects
                </RouterLink>
            </div>
        </section>
    );
};

export default ProjectDetails;
