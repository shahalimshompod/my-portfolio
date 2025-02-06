// import { motion } from "framer-motion";
// import { FaAnglesDown } from "react-icons/fa6";
// import { useOutletContext } from "react-router-dom";

// const ProjectBanner = () => {
//     const fromOutlet = useOutletContext()
//     const textEnter = fromOutlet.headingEnter;
//     const textLeave = fromOutlet.headingLeave;
//     return (
//         <>
//             <div className="flex items-end justify-between">
//                 <motion.h1
//                     onMouseEnter={textEnter} onMouseLeave={textLeave}
//                     initial={{ opacity: 0, y: 100, letterSpacing: "0.2em" }}
//                     animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
//                     transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 100 }}
//                     className="slang text-[clamp(50px,10vw,200px)] uppercase text-[#A6B1E1] leading-tight w-8/12"
//                 >
//                     <span>My work</span> <br />
//                     <span>Speaks</span> <br />
//                     <span>Itself</span>
//                 </motion.h1>
//                 <div className="flex justify-center items-center">
//                     <motion.svg
//                         width="150"
//                         height="150"
//                         viewBox="0 0 200 200"
//                         animate={{ rotate: 360 }}
//                         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
//                     >
//                         {/* Circle Path */}
//                         <defs>
//                             <path
//                                 id="circlePath"
//                                 d="M 100, 100
//                                 m -75, 0
//                                 a 75,75 0 1,1 150,0
//                                 a 75,75 0 1,1 -150,0"
//                             />
//                         </defs>

//                         {/* Text on Path */}
//                         <text fill="black" fontSize="18" fontWeight="bold">
//                             <textPath href="#circlePath" startOffset="50%">
//                                 Front-end Developer and UI Designer
//                             </textPath>
//                         </text>

//                         {/* Center Circle */}
//                         <circle cx="100" cy="100" r="50" fill="black" />
//                     </motion.svg>
//                 </div>
//             </div>
//             <FaAnglesDown />
//         </>
//     );
// };

// export default ProjectBanner;


import { motion } from "framer-motion";
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

const ProjectBanner = () => {
    const fromOutlet = useOutletContext();
    const textEnter = fromOutlet.headingEnter;
    const textLeave = fromOutlet.headingLeave;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <div className="flex items-end justify-between">
                <motion.h1
                    initial={{ opacity: 0, y: 100, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
                    transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 100 }}
                    className="slang text-[clamp(50px,10vw,200px)] uppercase text-[#A6B1E1] leading-tight w-8/12"
                >
                    <span
                        onMouseEnter={() => {
                            textEnter();
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => {
                            textLeave();
                            setIsHovering(false);
                        }}
                    >My work</span> <br />
                    <span
                        onMouseEnter={() => {
                            textEnter();
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => {
                            textLeave();
                            setIsHovering(false);
                        }}
                    >Speaks</span> <br />
                    <span
                        onMouseEnter={() => {
                            textEnter();
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => {
                            textLeave();
                            setIsHovering(false);
                        }}
                    >Itself</span>
                </motion.h1>


                <div className="flex justify-center items-center relative">
                    <motion.svg
                        width="150"
                        height="150"
                        viewBox="0 0 200 200"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    >
                        {/* Circle Path */}
                        <defs>
                            <path
                                id="circlePath"
                                d="M 100, 100
                   m -70, 0  
                   a 70,70 0 1,1 150,0  
                   a 70,70 0 1,1 -150,0"
                            />
                        </defs>

                        {/* Text on Path */}
                        <text fill="black" fontSize="24" fontWeight="bold">
                            <textPath className="uppercase" href="#circlePath" startOffset="0%">
                                Scroll
                            </textPath>
                            <textPath className="uppercase" href="#circlePath" startOffset="25%">
                                down
                            </textPath>
                            <textPath className="uppercase" href="#circlePath" startOffset='50%'>
                                Scroll
                            </textPath>
                            <textPath className="uppercase" href="#circlePath" startOffset='75%'>
                                down
                            </textPath>
                        </text>
                    </motion.svg>

                    {/* Icon with Floating Effect */}
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

        </>
    );
};

export default ProjectBanner;