import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo/my logo.png";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Track previous scroll position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // If scrolling down, hide the navbar
            if (currentScrollPos > prevScrollPos) {
                setIsVisible(false);
            }
            // If scrolling up, show the navbar
            else {
                setIsVisible(true);
            }

            // Update previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <motion.div
            className="flex justify-between mx-3 md:mx-10 lg:mx-12 pt-6 sticky top-0 z-50"
            initial={{ y: 0 }} // Initial position
            animate={{ y: isVisible ? 0 : -150 }} // Animate based on visibility
            transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth spring animation
        >
            <a href="/">
                <div>
                    <img className="w-20 h-20" src={logo} alt="Shah Alim Shompod logo" />
                </div>
            </a>
            <div>
                <ul className="list-none flex flex-col items-center gap-2">
                    <NavLink className="montserrat font-semibold text-[#424874]">Projects</NavLink>
                    <NavLink className="montserrat font-semibold text-[#424874]">About me</NavLink>
                    <NavLink className="montserrat font-semibold text-[#424874]">Resume</NavLink>
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;