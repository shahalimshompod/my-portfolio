import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({ data, idx }) => {
  const {
    name,
    description,
    technologies,
    liveDemo,
    cardImage,
    id,
  } = data;

  // flex direction based on index
  const flexDirection = idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div
      className={` my-10 md:my-12 lg:my-20 2xl:my-28 flex flex-col items-center lg:items-end gap-5  ${flexDirection}`}
    >
      {/* Image container with reveal animation */}
      <motion.div
        className="w-full"
        style={{
          position: "relative",
          height: "auto",
          overflow: "hidden",
        }}
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
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
      <div className="w-full lg:w-1/2">
        {/* Project Title and Live Button */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="montserrat font-bold uppercase text-3xl 2xl:text-5xl text-[#424874]">
            {name}
          </h1>
        </motion.div>

        {/* Project Description */}
        <motion.h3
          className="montserrat my-4 text-[#A6B1E1] font-black 2xl:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.h3>

        {/* Technologies and GitHub Button */}
        <motion.div
          className="flex flex-col 2xl:flex-row items-start 2xl:items-center gap-4 2xl:gap-6 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="montserrat font-semibold">Technologies used:</h3>
            <h4 className="montserrat font-semibold text-xs">{technologies}</h4>
          </div>

          {/* <motion.a
                        href={githubRepo}
                        target='_blank'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className='flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF] cursor-pointer'>
                            <span>View GitHub Repo</span>
                            <MdOutlineArrowOutward />
                        </button>
                    </motion.a> */}
        </motion.div>

        <div className="flex items-center gap-3">
          {/* Project Details Button */}
          <Link to={`/project-details/${id}`}>
            <motion.button
              className="flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF] cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              Project Details
            </motion.button>
          </Link>

          <motion.a
            href={liveDemo}
            target="_blank"
            initial={{ opacity: 0, y: 50, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center gap-1 bg-[#424874] py-2 px-3 montserrat text-sm font-bold text-[#F4EEFF] cursor-pointer">
              <span>View Live</span>
              <MdOutlineArrowOutward />
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
