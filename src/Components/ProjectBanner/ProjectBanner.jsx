import { motion } from "framer-motion";
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

const ProjectBanner = () => {
    const fromOutlet = useOutletContext();
    const textEnter = fromOutlet.headingEnter;
    const textLeave = fromOutlet.headingLeave;
    const [isHovering, setIsHovering] = useState(false);

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
        <div className="flex justify-between">
            <motion.h1
                className="slang text-[clamp(50px,10vw,200px)] uppercase text-[#424874] leading-tight w-11/12"
            >
                <motion.span
                    initial={spanAnimation.initial}
                    animate={spanAnimation.animate}
                    transition={spanAnimation.transition(0.1)}
                    className="inline-block"
                    onMouseEnter={() => {
                        textEnter();
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        textLeave();
                        setIsHovering(false);
                    }}
                >
                    My work
                </motion.span> <br />

                <motion.span
                    initial={spanAnimation.initial}
                    animate={spanAnimation.animate}
                    transition={spanAnimation.transition(0.3)}
                    className="inline-block"
                    onMouseEnter={() => {
                        textEnter();
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        textLeave();
                        setIsHovering(false);
                    }}
                >
                    Speaks
                </motion.span>
                <span> </span>
                <motion.span
                    initial={spanAnimation.initial}
                    animate={spanAnimation.animate}
                    transition={spanAnimation.transition(0.5)}
                    className="inline-block"
                    onMouseEnter={() => {
                        textEnter();
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        textLeave();
                        setIsHovering(false);
                    }}
                >
                    Itself
                </motion.span>
            </motion.h1>

            <div className="flex justify-center items-center relative">
                <motion.svg
                    width="150"
                    height="150"
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

                    <text fill="black" fontSize="24" fontWeight="bold">
                        <textPath className="uppercase" href="#circlePath" startOffset="0%">
                            Scroll
                        </textPath>
                        <textPath className="uppercase" href="#circlePath" startOffset="25%">
                            down
                        </textPath>
                        <textPath className="uppercase" href="#circlePath" startOffset="50%">
                            Scroll
                        </textPath>
                        <textPath className="uppercase" href="#circlePath" startOffset="75%">
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
                    <FaAnglesDown className="text-black text-2xl" />
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectBanner;
