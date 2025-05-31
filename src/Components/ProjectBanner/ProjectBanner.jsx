import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

const ProjectBanner = () => {
  // Animation settings for each span
  const spanAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: (delay) => ({
      duration: 0.8,
      ease: "easeOut",
      delay: delay,
    }),
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Text Section */}
      <motion.h1 className="slang text-[clamp(40px,8vw,150px)] uppercase text-[#424874] leading-tight w-full md:w-11/12 text-center md:text-left">
        <motion.span
          initial={spanAnimation.initial}
          animate={spanAnimation.animate}
          transition={spanAnimation.transition(0.1)}
          className="inline-block"
        >
          My work
        </motion.span>{" "}
        <br />
        <motion.span
          initial={spanAnimation.initial}
          animate={spanAnimation.animate}
          transition={spanAnimation.transition(0.3)}
          className="inline-block"
        >
          Speaks
        </motion.span>{" "}
        <motion.span
          initial={spanAnimation.initial}
          animate={spanAnimation.animate}
          transition={spanAnimation.transition(0.5)}
          className="inline-block"
        >
          Itself
        </motion.span>
      </motion.h1>

      {/* Spinner Section */}
      <div className="flex justify-center items-center relative w-32 h-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:w-36 lg:h-36">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                   m -70, 0  
                   a 70,70 0 1,1 150,0  
                   a 70,70 0 1,1 -150,0"
            />
          </defs>

          <text fill="#A6B1E1" fontSize="24" fontWeight="bold">
            <textPath className="uppercase" href="#circlePath" startOffset="0%">
              Scroll
            </textPath>
            <textPath
              className="uppercase"
              href="#circlePath"
              startOffset="25%"
            >
              down
            </textPath>
            <textPath
              className="uppercase"
              href="#circlePath"
              startOffset="50%"
            >
              Scroll
            </textPath>
            <textPath
              className="uppercase"
              href="#circlePath"
              startOffset="75%"
            >
              down
            </textPath>
          </text>
        </motion.svg>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaAnglesDown className="text-[#A6B1E1] text-2xl sm:text-3xl md:text-4xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBanner;
