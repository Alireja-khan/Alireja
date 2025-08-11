import React from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div
            id="home"
            className="w-full py-20 px-6 md:px-16 lg:px-28 xl:px-40 flex flex-col-reverse lg:flex-row items-center justify-between text-white relative overflow-hidden"
        >
            {/* Left Content */}
            <div className="z-10 w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
                <h1 className="text-4x  sm:text-5xl font-bold mb-3 font-mono flex justify-center lg:justify-start items-center gap-1">
                    <Typewriter
                        words={["Alireja Khan"]}
                        loop={false}
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    <span className="animate-blink text-orange-500 cursor-animation">_</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-xl mx-auto lg:mx-0 leading-snug">
                    A Passionate Full Stack Developer.
                </p>

                <div className='flex items-center gap-5'>
                    <Link to="projects" smooth={true} duration={500} spy={true} offset={-70}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 uppercase font-semibold tracking-wide">
                            ✦ Projects
                        </motion.button>
                    </Link>


                    {/* Here need to make this button into anchor and need attach an Resume */}
                    <motion.button
                        // href="/resume.pdf"
                        // download="Alireza_Khan_Resume.pdf"
                        className="flex items-center gap-2 bg-orange-500 text-black font-semibold px-6 py-2 rounded-full  transition uppercase tracking-wide"
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
                        <span>Resume</span>
                    </motion.button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                    <a href="https://github.com/Alireja-khan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/alireja-khan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaFacebook size={24} />
                    </a>
                </div>

                <div className="mt-10 flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-400">
                    <span>Take a Tour</span>
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[620px] h-[400px] sm:h-[480px] md:h-[560px] lg:h-[720px] z-0 rounded-xl overflow-hidden mb-10 lg:mb-0">
                <img
                    src="https://i.ibb.co/8LKYRfTN/IMG-20241206-WA0250.jpg"
                    alt="Alireja Khan"
                    className="object-cover w-full h-full rounded-xl shadow-lg"
                />
            </div>

            {/* Blinking Cursor Animation */}
            <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                .cursor-animation {
                  animation: blink 1.2s steps(2, start) infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;