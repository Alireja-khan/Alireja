import React from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div
            id="home"
            className="w-full min-h-[80vh] md:min-h-[25vh] py-8 md:py-12 lg:py-16 xl:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-40 flex flex-col-reverse md:flex-row items-center justify-between text-white relative overflow-hidden"
        >
            {/* Left Content */}
            <div className="z-10 w-full md:w-[55%] lg:w-1/2 mt-6 md:mt-0 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold mb-3 md:mb-4 font-mono flex justify-center md:justify-start items-center gap-1">
                    <Typewriter
                        words={["Alireja Khan"]}
                        loop={false}
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    <span className="animate-blink text-orange-500 cursor-animation">_</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-xl lg:text-xl text-gray-400 mb-4 md:mb-6 max-w-xl mx-auto md:mx-0 leading-snug">
                    A Passionate Full Stack Developer.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 lg:gap-5'>
                    <Link to="projects" smooth={true} duration={500} spy={true} offset={-70}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-orange-500 text-orange-500 px-5 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 uppercase font-semibold tracking-wide text-sm md:text-base"
                        >
                            ✦ Projects
                        </motion.button>
                    </Link>

                    <motion.a
                        href="/Resume.pdf" // place your resume in the public folder and name it resume.pdf
                        download="Alireja_Khan_Resume.pdf"
                        className="flex items-center gap-2 bg-orange-500 text-black font-semibold px-5 md:px-6 py-1.5 md:py-2 rounded-full transition uppercase tracking-wide text-sm md:text-base"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <FaDownload className="text-xs md:text-sm" />
                        <span>Resume</span>
                    </motion.a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-3 md:gap-4 mt-6 md:mt-6 lg:mt-8">
                    <a href="https://github.com/Alireja-khan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/alireja-khan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>

                <div className="mt-2 md:mt-3 flex items-center justify-center md:justify-start gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                    <span>Take a Tour</span>
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[620px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] z-0 rounded-xl overflow-hidden mb-6 md:mb-0">
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