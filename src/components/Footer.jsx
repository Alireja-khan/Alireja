import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link, Link as ScrollLink } from "react-scroll";
import navImg from "../assets/letter-a4.png"

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-10 px-6 md:px-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3">
            <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>
              <img className="w-10 h-10 cursor-pointer" src={navImg} alt="logo" />
            </Link>
            <Link
              className="text-2xl text-white font-semibold cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              Alireja
            </Link>
          </div>
          <p className="text-sm mt-1">Full Stack Developer</p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Alireja-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-orange-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Alireja Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
