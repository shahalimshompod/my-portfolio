import React from "react";
import { FaFacebook, FaFirefox, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const AboutBanner = () => {
    return (
        <div>
            <div className="flex items-center gap-10">
                <div>
                    <motion.h1
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="slang font-light text-4xl text-[#424874]">Hii There, I'm</motion.h1>
                    <motion.h1
                        className="slang font-bold text-[clamp(50px,10vw,200px)] leading-tight uppercase text-[#424874]"
                    >
                        <motion.span
                            className="inline-block"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Shah
                        </motion.span>
                        <br />
                        <motion.span
                            className="inline-block"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        >
                            Alim
                        </motion.span>
                        <br />
                        <motion.span
                            className="inline-block"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        >
                            Shompod
                        </motion.span>
                    </motion.h1>

                    {/* Typewriter Animation Text */}
                    <p className="text-lg font-medium text-[#424874] montserrat">
                        <Typewriter
                            words={[
                                "A Passionate Web Developer who judges a book by its cover.",
                                "A Creative UI/UX Designer",
                                "A Problem Solver",
                                "A Tech Enthusiast",
                                "A Lifelong Learner",
                                "An Open-Source Contributor"

                            ]}
                            loop={true} // Text will loop infinitely
                            cursor
                            cursorStyle="_"
                            typeSpeed={40} // Speed of typing
                            deleteSpeed={20} // Speed of deleting text
                            delaySpeed={1500} // Delay before starting next word
                        />
                    </p>
                </div>
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        className="montserrat font-semibold mb-4 text-[#424874] ">I am a Frontend Web Developer specializing in the MERN Stack. I have a strong passion for creating responsive, user-friendly, and visually appealing web applications. With expertise in React, Tailwind CSS, and Node.js, I focus on building seamless user experiences while optimizing performance. I enjoy solving problems, learning new technologies, and constantly improving my skills to stay ahead in the ever-evolving web development landscape. 🚀</motion.p>

                    <div className="flex items-center gap-6">
                        <div>
                            <motion.h1
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="uppercase montserrat font-light text-3xl text-[#424874] ">Open to work</motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center montserrat text-[#424874] "><IoLocationSharp /> <span>Based in Pabna, Bangladesh</span></motion.p>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="text-[#424874]"
                        >
                            <FaFirefox size={40} />
                        </motion.div>
                    </div>

                    <div className="my-4 flex items-center gap-20">
                        <div>
                            <motion.h1
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="uppercase montserrat text-2xl text-[#424874] mb-3 ">Find me on-</motion.h1>
                            <h1 className="flex items-center gap-10 text-[#424874]">
                                <motion.a
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    href="mailto:shahalimsompod@gmail.com"><IoMdMail size={36} /></motion.a>
                                <motion.a
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    href="mailto:shahalimsompod@gmail.com"><FaLinkedin size={30} /></motion.a>
                                <motion.a
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                    href="mailto:shahalimsompod@gmail.com"><FaGithub size={30} /></motion.a>
                                <motion.a
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    href="mailto:shahalimsompod@gmail.com"><FaFacebook size={30} /></motion.a>
                                <motion.a
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.3 }}
                                    href="mailto:shahalimsompod@gmail.com"><BsTwitterX size={30} /></motion.a>
                            </h1>
                        </div>
                        <div>
                            <button>Download Resume</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
