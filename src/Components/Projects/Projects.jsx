import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = ({ data }) => {
    const projectData = data;

    return (
        <div className='my-16 sm:my-20 md:my-24 lg:my-32 px-4 sm:px-8 md:px-12 lg:px-16'>
            {/* Animated Text */}
            <motion.div
                className='w-full md:w-2/3 lg:w-1/2 mx-auto overflow-hidden'
                initial={{ opacity: 0, x: -100 }} // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Slide in to the center
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className='uppercase font-bold montserrat text-3xl sm:text-4xl md:text-5xl text-center text-[#424874]'>
                    A Small selection of my work
                </h1>
            </motion.div>

            {/* Project Cards */}
            <div className='mt-8 sm:mt-12 md:mt-16'>
                {projectData.map((data, idx) => (
                    <ProjectCard key={idx} data={data} idx={idx} />
                ))}
            </div>
        </div>
    );
};

export default Projects;