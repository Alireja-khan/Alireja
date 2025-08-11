import React, { useState } from "react";
import { Link } from "react-scroll";
import navImg from "../assets/letter-a4.png";
import { FiMenu, FiX } from "react-icons/fi";

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
        <nav className="bg-[#343434] sticky top-0 z-50 px-6 md:px-20 py-4 shadow-sm">
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
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer font-medium"
                    >
                        Decode Me
                    </Link>
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
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Decode Me
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;