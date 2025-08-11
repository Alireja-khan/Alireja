import React, { useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_r28enj9",
                "template_vqgxz3l",
                form.current,
                "wkLmEE87aqOf86SJh"
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "We'll get back to you soon.",
                        timer: 3000,
                        showConfirmButton: false,
                    });
                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong. Please try again later.",
                    });
                }
            );
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 md:pt-36 pb-10 md:pb-36 text-white">
            <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Get in <span className="text-orange-500">Touch</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                    To Hire please complete the form below, or use the contact details to get in touch directly.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <motion.div
                    className="space-y-5 mt-10 text-gray-400"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex items-start gap-4">
                        <div className="text-orange-500 mt-1">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2 text-white">Email</h4>
                            <p>alirejakhan18@.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="text-orange-500 mt-1">
                            <FaPhone className="text-xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2 text-white">Phone</h4>
                            <p>+880 1733428976</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="text-orange-500 mt-1">
                            <FaWhatsapp className="text-xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2 text-white">WhatsApp</h4>
                            <p>+880 1733428976</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="text-orange-500 mt-1">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2 text-white">Location</h4>
                            <p>Habiganj Sadar, Sylhet, Bangladesh</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-[#1e1e1e] shadow-lg rounded-xl p-8 space-y-6"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Your Name
                        </label>
                        <motion.input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="mt-1 w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Email Address
                        </label>
                        <motion.input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Message
                        </label>
                        <motion.textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Write your message here..."
                            className="mt-1 w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="bg-orange-500 text-black font-semibold px-6 py-2 rounded-md transition uppercase tracking-wide"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;