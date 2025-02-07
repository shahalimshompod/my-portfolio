import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectCard = ({ data, idx }) => {
    const { name, description, technologies, githubRepo, liveDemo, cardImage } = data;

    // Determine flex direction based on index (only for large devices)
    const flexDirection = idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

    return (
        <div className={`my-28 flex flex-col items-center lg:items-end gap-5 ${flexDirection}`}>
            {/* Image container with reveal animation */}
            <motion.div
                className="w-full"
                style={{
                    position: 'relative',
                    height: 'auto', // Maintain aspect ratio
                    overflow: 'hidden', // Hide the overflowing part
                }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }} // Fully clipped from the left
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} // Fully visible
                transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
                viewport={{ once: true }} // Animation happens only once
            >
                <img
                    src={cardImage}
                    alt="Project image"
                    className="w-full h-auto block"
                />
            </motion.div>

            {/* Project details */}
            <div className='w-full lg:w-1/2 px-4 lg:px-0'>
                {/* Project Title and Live Button */}
                <motion.div
                    className='flex flex-col lg:flex-row items-start lg:items-center gap-4'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className='montserrat font-bold uppercase text-3xl lg:text-5xl text-[#424874]'>{name}</h1>
                    <motion.a
                        href={liveDemo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'>
                            <span>View Live</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </motion.a>
                </motion.div>

                {/* Project Description */}
                <motion.h3
                    className='montserrat my-4 text-[#A6B1E1] font-black text-lg lg:text-xl'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >{description}</motion.h3>

                {/* Technologies and GitHub Button */}
                <motion.div
                    className='flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-4'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className='montserrat font-semibold'>Technologies used:</h3>
                        <h4 className='montserrat font-semibold'>{technologies}</h4>
                    </div>
                    <motion.a
                        href={githubRepo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'>
                            <span>View GitHub Repo</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </motion.a>
                </motion.div>

                {/* Project Details Button */}
                <Link to={''}>
                    <motion.button
                        className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Project Details
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;