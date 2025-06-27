import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Efficiency.", "Scalability.", "Maintainability."];

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if (index < words.length) {
            const timeout = setTimeout(() => setIndex(index + 1), 2000);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setExpand(true); // Start expanding
                setTimeout(() => {
                    onComplete && onComplete();
                }, 1000); // Call onComplete after expand
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [index, onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: expand ? 0 : 1 }}
            transition={{ duration: 1 }}
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
                overflow: "hidden", // prevent scrollbars during expansion
            }}
        >
            <motion.div className="flex items-center relative">
                <motion.div
                    className="bg-[#A6B1E1] rounded-full"
                    style={{
                        width: 40,
                        height: 40,
                        position: "relative",
                        zIndex: 10,
                    }}
                    animate={
                        expand
                            ? {
                                  scale: 100, // expand huge to cover screen
                                  transition: { duration: 1, ease: "easeInOut" },
                              }
                            : {
                                  scale: [1, 1.2, 1],
                                  transition: {
                                      duration: 1,
                                      repeat: Infinity,
                                      repeatType: "reverse",
                                  },
                              }
                    }
                />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
