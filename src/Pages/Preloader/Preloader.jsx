import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Efficiency.", "Scalability.", "Maintainability."]; // Sequential words

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < words.length) {
            const timeout = setTimeout(() => setIndex(index + 1), 2000); // Show next word after 2s
            return () => clearTimeout(timeout); // Cleanup timeout
        } else {
            const timeout = setTimeout(() => onComplete && onComplete(), 1000); // Hide preloader after last word
            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [index, onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: words.length * 2 }} // Fade out after all words
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <motion.div className="flex items-center relative">
                {/* Animated Circle */}
                <motion.div
                    className="w-10 h-10 bg-[#A6B1E1] rounded-full relative"
                    initial={{ x: -100, scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                {/* Animated Text */}
                <AnimatePresence mode="wait">
                    <motion.h1
                        className="montserrat font-light uppercase text-[#A6B1E1] text-xl absolute -left-10"
                        key={words[index]}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 10 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {words[index]}
                    </motion.h1>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;