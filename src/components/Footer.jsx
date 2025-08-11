import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link, Link as ScrollLink } from "react-scroll";
import navImg from "../assets/letter-a4.png"

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-8 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        {/* Left Side - Logo & Title */}
        <div className="text-center md:text-left order-1 md:order-none">
          <div className="flex items-center justify-center md:justify-start lg:mr-0 md:mr-10 gap-2 sm:gap-3">
            <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>
              <img className="w-8 h-8 lg:mr-0 md:mr-10 sm:w-10 sm:h-10 cursor-pointer" src={navImg} alt="logo" />
            </Link>
            <Link
              className="text-xl sm:text-2xl text-white font-semibold cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              Alireja
            </Link>
          </div>
          <p className="text-xs sm:text-sm mt-1">Full Stack Developer</p>
        </div>

        {/* Center Navigation - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium order-3 md:order-none w-full sm:w-auto justify-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 px-2 py-1 sm:px-0 sm:py-0 text-center"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 px-2 py-1 sm:px-0 sm:py-0 text-center"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 px-2 py-1 sm:px-0 sm:py-0 text-center"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 px-2 py-1 sm:px-0 sm:py-0 text-center"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-orange-500 cursor-pointer transition-colors duration-200 px-2 py-1 sm:px-0 sm:py-0 text-center"
          >
            Contact
          </ScrollLink>
        </div>

        {/* Social Icons - Always centered on mobile */}
        <div className="flex justify-center gap-3 sm:gap-4 order-2 md:order-none">
          <a href="https://github.com/Alireja-khan" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1">
            <FaGithub size={18} className="sm:w-5 sm:h-5"/>
          </a>
          <a href="https://www.linkedin.com/in/alireja-khan/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1">
            <FaLinkedin size={18} className="sm:w-5 sm:h-5"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1">
            <FaTwitter size={18} className="sm:w-5 sm:h-5"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1">
            <FaFacebook size={18} className="sm:w-5 sm:h-5"/>
          </a>
        </div>
      </div>

      {/* Copyright - Always at bottom */}
      <div className="mt-8 sm:mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4 sm:pt-6">
        &copy; {new Date().getFullYear()} Alireja Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;