import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = ({ data }) => {
    const projectData = data;

    return (
        <div className='my-32'>
            {/* Animated Text */}
            <motion.div
                className='w-1/3 mx-auto overflow-hidden'
                initial={{ opacity: 0, x: -100 }} // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Slide in to the center
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className='uppercase font-bold montserrat text-5xl text-center text-[#424874]'>
                    A Small selection of my work
                </h1>
            </motion.div>

            {/* Project Cards */}
            <div>
                {projectData.map((data, idx) => (
                    <ProjectCard key={idx} data={data} idx={idx} />
                ))}
            </div>
        </div>
    );
};

export default Projects;