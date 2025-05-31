import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for staggered reveal
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay between each child animation
        },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 }, // Start slightly below and invisible
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }, // Animate to original position and visible
};

const WorkFlowSection = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='mt-12 px-4 sm:px-8 md:px-12 lg:px-16'
        >
            {/* Section Title */}
            <h1 className='uppercase font-bold montserrat text-3xl sm:text-4xl md:text-5xl text-center text-[#424874]'>
                My Workflow
            </h1>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 sm:my-12 md:my-16'>
                {/* Card 1: Project Request */}
                <motion.div
                    variants={cardVariants}
                    className='border border-[#A6B1E1] px-4 sm:px-6 md:px-8 py-4 rounded-2xl flex flex-col items-center justify-center'
                >
                    <h1 className='mb-3 montserrat text-[#424874] text-lg sm:text-xl font-semibold text-center'>
                        Project Request
                    </h1>
                    <p className='montserrat text-[#424874] text-sm sm:text-base text-center'>
                        The first step in our collaboration is the project request. This gives me an idea of what you're looking for and helps me determine if I'm the right fit for your project.
                    </p>
                </motion.div>

                {/* Card 2: Meeting & Proposal */}
                <motion.div
                    variants={cardVariants}
                    className='border border-[#A6B1E1] px-4 sm:px-6 md:px-8 py-4 rounded-2xl flex flex-col items-center justify-center'
                >
                    <h1 className='mb-3 montserrat text-[#424874] text-lg sm:text-xl font-semibold text-center'>
                        Meeting & Proposal
                    </h1>
                    <p className='montserrat text-[#424874] text-sm sm:text-base text-center'>
                        Then we will talk in our initial meeting, we get to know each other and see if we are a good fit. After I have learned as much as possible about your project, I will create an individual proposal.
                    </p>
                </motion.div>

                {/* Card 3: Implementation & Launch */}
                <motion.div
                    variants={cardVariants}
                    className='border border-[#A6B1E1] px-4 sm:px-6 md:px-8 py-4 rounded-2xl flex flex-col items-center justify-center'
                >
                    <h1 className='mb-3 montserrat text-[#424874] text-lg sm:text-xl font-semibold text-center'>
                        Implementation & Launch
                    </h1>
                    <p className='montserrat text-[#424874] text-sm sm:text-base text-center'>
                        Once I have everything needed, I'm ready to start with the implementation. Ensuring transparent communication and regular updates is a priority for me. I'll keep you in the loop using convenient communication channels like Slack.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WorkFlowSection;