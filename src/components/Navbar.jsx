import React, { useState } from "react";
import { Link } from "react-scroll";
import navImg from "../assets/letter-a4.png";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    const navLinks = (
        <>
            {["home", "about", "skills", "projects", "contact"].map((section) => (
                <Link
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="block lg:inline-block mr-5 linkClass text-white text-lg hover:text-orange-500 cursor-pointer"
                    onClick={() => setIsOpen(false)} // close on mobile click
                >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                </Link>
            ))}
        </>
    );

    return (
        <nav className="bg-[#343434] sticky top-0 z-50 px-6 md:px-25 py-4 shadow-sm">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>
                        <img className="w-10 h-10 cursor-pointer" src={navImg} alt="logo" />
                    </Link>
                    <p className="text-2xl text-white font-semibold cursor-pointer">Alireja</p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks}
                    
                    <a
                        href="/Resume.pdf"
                        download="Alireja_Khan_Resume.pdf"
                    >
                        <motion.button
                            className="flex items-center gap-2 hover:bg-orange-500 bg-[#2a2a2a] hover:text-black text-white border border-orange-500 hover:font-semibold px-6 py-2 rounded-full transition uppercase tracking-wide"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <FaDownload className="text-sm" />
                            <span>Decode Me</span>
                        </motion.button>
                    </a>


                </div>

                {/* Mobile menu toggle button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden mt-4 space-y-4 text-center">
                    {navLinks}
                    <a
                        href="/Resume.pdf"
                        download="Alireja_Khan_Resume.pdf"
                        className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Decode Me
                    </a>
                </div>
            )}

        </nav>
    );
};

export default Navbar;