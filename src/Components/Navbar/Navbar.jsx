import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import logo from "../../assets/logo/my logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Track previous scroll position
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility

  console.log(isVisible)

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If scrolling down, hide the navbar
      if (currentScrollPos > prevScrollPos) {
        console.log(`current - ${currentScrollPos} prev- ${prevScrollPos}`)
        setIsVisible(false);
      }
      // If scrolling up, show the navbar
      else {
        setIsVisible(true);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    if(isDrawerOpen){
    setIsVisible(true)
  }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  

  return (
    <motion.div
      className="flex justify-between mx-3 md:mx-10 lg:mx-12 pt-6 sticky top-0 z-50"
      initial={{ y: 0 }} // Initial position
      animate={{ y: isVisible ? 0 : -150 }} // Animate based on visibility
      transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth spring animation
    >
      {/* Logo */}
      <a href="/">
        <div>
          <img
            className="w-12 md:w-16 h-12 md:h-16 lg:w-20 lg:h-20"
            src={logo}
            alt="Shah Alim Shompod logo"
          />
        </div>
      </a>

      {/* Hamburger Icon (Visible on small devices) */}
      <div className="lg:hidden cursor-pointer" onClick={toggleDrawer}>
        {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Regular Navigation (Visible on large devices) */}
      <div className="hidden lg:flex">
        <ul className="list-none flex items-center gap-5">
          <NavLink
            to="/"
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
          >
            Home
          </NavLink>

          <Link
            to="about_me"
            spy={true}
            smooth={true}
            offset={-50}
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
          >
            About Me
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="contact_me"
            spy={true}
            smooth={true}
            offset={-50}
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
          >
            Contact Me
          </Link>

          <NavLink
            to="/projects"
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
          >
            Projects
          </NavLink>

          <a
            href="https://drive.google.com/file/d/1uNCUeFhI2nl-GNwaV-WO11zGCM6X5Uyz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
          >
            Resume
          </a>
        </ul>
      </div>

      {/* Side Drawer (Visible on small devices) */}
      {isDrawerOpen && (
        <motion.div
          className="fixed inset-0  bg-opacity-50 z-[1200] lg:hidden"
          onClick={toggleDrawer} // Close drawer when clicking outside
        >
          <motion.div
            className="fixed top-0 right-0 h-full w-full bg-white shadow-lg"
            initial={{ x: "100%" }} // Start off-screen
            animate={{ x: 0 }} // Slide in
            exit={{ x: "100%" }} // Slide out
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Close Icon */}
            <div className="flex justify-end p-4">
              <FaTimes
                size={24}
                className="cursor-pointer"
                onClick={toggleDrawer}
              />
            </div>

            {/* Drawer Links */}
            <ul className="list-none flex flex-col items-start gap-6 p-4">
              <NavLink
                onClick={toggleDrawer}
                to="/"
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
              >
                Home
              </NavLink>

              <Link
                onClick={toggleDrawer}
                to="about_me"
                spy={true}
                smooth={true}
                offset={-50}
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
              >
                About Me
              </Link>

              <Link
                onClick={toggleDrawer}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
              >
                Skills
              </Link>

              <NavLink
                onClick={toggleDrawer}
                to="/projects"
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
              >
                Projects
              </NavLink>

              <Link
                onClick={toggleDrawer}
                to="contact_me"
                spy={true}
                smooth={true}
                offset={-50}
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors cursor-pointer"
              >
                Contact Me
              </Link>

              <a
                onClick={toggleDrawer}
                href="https://drive.google.com/file/d/1uNCUeFhI2nl-GNwaV-WO11zGCM6X5Uyz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="montserrat font-semibold text-[#424874] hover:text-[#A6B1E1] transition-colors"
              >
                Resume
              </a>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
