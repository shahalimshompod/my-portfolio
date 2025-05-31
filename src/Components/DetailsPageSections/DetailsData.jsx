import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';

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

const childVariants = {
    hidden: { y: -20, opacity: 0 }, // Start slightly above and invisible
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }, // Animate to original position and visible
};

const imageVariants = {
    hidden: { clipPath: 'inset(0% 0 100% 0)' }, // Fully hidden (clipped from the top)
    visible: { clipPath: 'inset(0% 0 0% 0)', transition: { duration: 0.5, ease: 'easeInOut' } }, // Fully visible
};

const DetailsData = ({ data }) => {
    const { detailedDescription, githubRepo, liveDemo, technologies, name, challenges, futurePlans, cardImage } = data;

    return (
        <div className='relative'>
            {/* Image container */}
            <motion.div
                className="w-full lg:w-[80%] lg:-top-28 left-0 lg:left-[10%] flex justify-center lg:absolute mt-3 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-0"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <img src={cardImage} alt={name} className="rounded-none lg:rounded-b-4xl w-full h-auto" />
            </motion.div>

            {/* Content with staggered animations */}
            <motion.div
                className='pt-10 lg:pt-[400px] 2xl:pt-[700px] px-4 sm:px-8 md:px-12 lg:px-16'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Project Name and Buttons */}
                <div className='flex flex-col items-center justify-between gap-4 sm:gap-6'>
                    <motion.h1 variants={childVariants} className='montserrat text-[#424874] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left'>
                        {name}
                    </motion.h1>
                    <div className='flex items-center gap-3'>
                        <motion.a
                            href={githubRepo}
                            target='_blank'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-xs sm:text-sm font-bold text-[#F4EEFF] cursor-pointer'>
                                <span>View GitHub Repo</span>
                                <MdOutlineArrowOutward />
                            </button>
                        </motion.a>
                        <motion.a
                            href={liveDemo}
                            target='_blank'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-xs sm:text-sm font-bold text-[#F4EEFF] cursor-pointer'>
                                <span>View Live</span>
                                <MdOutlineArrowOutward />
                            </button>
                        </motion.a>
                    </div>
                </div>

                {/* Horizontal Line */}
                <motion.hr variants={childVariants} className='my-4 sm:my-6' />

                {/* Technology Used */}
                <motion.h3 variants={childVariants} className='montserrat text-lg sm:text-xl mt-4 sm:mt-5'>
                    <span className='font-bold'>Technology Used:</span> {technologies}
                </motion.h3>

                {/* About Project */}
                <motion.div variants={childVariants} className='my-4 sm:my-5'>
                    <h3 className='montserrat text-xl sm:text-2xl font-semibold'>About Project:</h3>
                    <p className='montserrat text-sm sm:text-base'>{detailedDescription}</p>
                </motion.div>

                {/* Challenges Faced */}
                <motion.div variants={childVariants} className='my-4 sm:my-5'>
                    <h3 className='montserrat text-xl sm:text-2xl font-semibold'>Challenges Faced:</h3>
                    <p className='montserrat text-sm sm:text-base'>{challenges}</p>
                </motion.div>

                {/* Future Plans */}
                <motion.div variants={childVariants} className='my-4 sm:my-5'>
                    <h3 className='montserrat text-xl sm:text-2xl font-semibold'>Future Plans:</h3>
                    <p className='montserrat text-sm sm:text-base'>{futurePlans}</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DetailsData;