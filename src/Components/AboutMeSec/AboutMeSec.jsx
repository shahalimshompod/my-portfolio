import React from 'react';
import shompod from "../../assets/image/sompod.png";
import { motion } from "framer-motion";

const AboutMeSec = () => {
    return (
        <div className='my-28 border border-[#A6B1E1] px-11'>
            <div className='flex items-center justify-around'>
                {/* About text */}
                <div className='w-1/2'>
                    <h1 className='montserrat text-4xl text-center text-[#424874] underline mb-3 '>About Me</h1>
                    <div className='w-9/12 mx-auto montserrat'>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Hi, I'm <span className='slang text-xl font-bold text-[#424874] '>Shah Alim Shompod</span>. I'm a Passionate Front-end Web Developer expertise with MERN stack technologies based in Pabna, Bangladesh. My journey into programming began in June 2024, driven by a deep curiosity about how websites and applications work. At first, everything felt overwhelming—variables, loops, and functions seemed like a foreign language. But with dedication and countless hours of practice, I gradually unlocked the logic behind coding.
                        </motion.p>

                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Over time, I found my passion in frontend development, where creativity meets functionality. Learning React, Tailwind CSS, and JavaScript, I built my first projects, each one improving my skills and confidence. As I delved deeper, I explored the MERN stack, expanding my knowledge with Node.js, Express.js, and MongoDB, which allowed me to develop dynamic and interactive web applications.
                        </motion.p>

                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            But my learning never stops. Right now, I'm diving into Three.js to bring 3D elements to the web, Next.js for optimized and scalable applications, and Python to broaden my problem-solving abilities. Every day, I push myself to learn, experiment, and create something new.

                            Beyond coding, I have a passion for movies and love immersing myself in different stories and genres. I’m also an avid traveler, always eager to explore new places, experience different cultures, and gain fresh perspectives.

                            What started as a simple interest has now become a passion, and I'm excited to see where this journey takes me next! 🚀
                        </motion.p>
                    </div>
                </div>

                {/* Image with background mask */}
                <div className='w-1/3 relative'>
                    {/* Background mask */}
                    <div className='absolute inset-0 bg-[#A6B1E1] opacity-30'></div>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='relative z-10 rounded-lg'>
                        <img
                            src={shompod}
                            alt="Shah Alim Shompod"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSec;