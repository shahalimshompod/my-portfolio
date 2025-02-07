import React from "react";
import { motion } from "framer-motion";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import react from "../../assets/image/react.png";
import node from "../../assets/image/node.png";
import express from "../../assets/image/expressjs.png";
import mongodb from "../../assets/image/mongodb.png";
import tailwind from "../../assets/image/tailwind.png";
import javaScript from "../../assets/image/javascript.png";

const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: react, name: "React" },
    { img: node, name: "Node.js" },
    { img: javaScript, name: "JavaScript" },
    { img: mongodb, name: "MongoDB" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: express, name: "Express.js" },
];

const SkillSection = () => {
    return (
        <div className="flex flex-col items-center py-16">
            {/* Section Title */}
            <motion.h1
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="uppercase montserrat font-bold text-4xl text-[#424874] text-center mb-12">
                Skills & Technologies
            </motion.h1>

            {/* Skills Grid with Scroll Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 px-6">
                {skills.map((skill, index) => {

                    return (
                        <motion.div
                            key={index}
                            className="w-28 sm:w-32 md:w-36 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }} // Initial hidden state
                            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // Delay for sequential fade-in
                            viewport={{ once: true }}
                        >
                            <motion.img
                                className="w-full drop-shadow-lg"
                                src={skill.img}
                                alt={skill.name}
                                animate={{ y: index % 2 === 0 ? [-10, 10, -10] : [10, -10, 10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillSection;
