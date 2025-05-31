import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F4EEFF] px-4 sm:px-8 md:px-12 overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="slang font-bold text-[clamp(40px,8vw,100px)] text-[#424874]"
        >
          Under Construction
        </motion.h1>

        <p className="montserrat text-[#424874] text-lg sm:text-xl mt-4">
          <Typewriter
            words={[
              "Our website is currently under construction.",
              "We're working hard to bring you a great experience!",
              "Stay tuned for something amazing. 🚀",
              "Thank you for your patience. 🙏",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={1500}
          />
        </p>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[#A6B1E1] mt-10"
        >
          <FaTools size={60} />
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 160 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[#A6B1E1] mt-10"
        >
          <FaTools size={60} />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[#A6B1E1] mt-10"
        >
          <FaHelmetSafety size={60} />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 260 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[#A6B1E1] mt-10"
        >
          <FaHelmetSafety size={60} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-8 text-[#424874]"
        >
          <p className="montserrat font-semibold text-sm sm:text-base">
            🚧 Site is being updated.
          </p>
          <p className="montserrat font-semibold text-sm sm:text-base">
            👷‍♂️ New features are on the way.
          </p>
          <p className="montserrat font-semibold text-sm sm:text-base">
            📅 Estimated completion: Soon!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <a
            href="/"
            className="bg-[#A6B1E1] py-2 px-4 rounded text-[#F4EEFF] montserrat font-semibold text-sm sm:text-base"
          >
            Back to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
