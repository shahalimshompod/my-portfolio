import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from 'react-icons/md';

const ProjectCard = () => {
    return (
        <div className='my-32 flex items-end gap-5'>
            {/* Image container with reveal animation */}
            <motion.div
                style={{
                    position: 'relative',
                    width: '100%', // Ensure the container takes full width
                    height: 'auto', // Maintain aspect ratio
                    overflow: 'hidden', // Hide the overflowing part
                }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }} // Fully clipped from the left
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} // Fully visible
                transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
                viewport={{ once: true }} // Animation happens only once
            >
                <img
                    src="https://i.ibb.co.com/PvBF7kdg/image.png"
                    alt="Project image"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </motion.div>

            {/* Project details */}
            <div className='w-7/12'>
                {/* Project Title and Live Button */}
                <motion.div
                    className='flex items-center gap-4'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className='montserrat font-bold uppercase text-5xl text-[#424874]'>Pet Promise</h1>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className='flex items-center gap-1 bg-[#A6B1E1] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'>
                            <span>View Live</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </motion.a>
                </motion.div>

                {/* Project Description */}
                <motion.h3
                    className='montserrat my-4 text-[#A6B1E1] font-black text-xl'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Pet Promise is a platform simplifying pet care, adoption, and donation campaigns, making it easy to adopt, donate, or support pet welfare.
                </motion.h3>

                {/* Technologies and GitHub Button */}
                <motion.div
                    className='flex items-center gap-6 mb-4'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className='montserrat font-semibold'>Technologies used:</h3>
                        <h4 className='montserrat font-semibold'>
                            <span>Reactjs</span> | <span>Nodejs</span> | <span>Expressjs</span> | <span>MongoDB</span>
                        </h4>
                    </div>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className='flex items-center gap-1 bg-[#A6B1E1] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'>
                            <span>View GitHub Repo</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </motion.a>
                </motion.div>

                {/* Project Details Button */}
                <motion.button
                    className='flex items-center gap-1 bg-[#A6B1E1] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Project Details
                </motion.button>
            </div>
        </div>
    );
};

export default ProjectCard;