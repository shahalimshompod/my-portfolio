import React from "react";
import { FaFacebook, FaFirefox, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const AboutBanner = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="slang font-light text-3xl sm:text-4xl text-[#424874]"
          >
            Hii There, I'm
          </motion.h1>
          <motion.h1 className="slang font-bold text-[clamp(40px,8vw,150px)] leading-tight uppercase text-[#424874]">
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Shah
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Alim
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              Shompod
            </motion.span>
          </motion.h1>

          {/* Typewriter Animation Text */}
          <p className="text-base sm:text-lg font-medium text-[#424874] montserrat mt-4">
            <Typewriter
              words={[
                "A Passionate Web Developer who judges a book by its cover.",
                "A Creative UI/UX Designer",
                "A Problem Solver",
                "A Tech Enthusiast",
                "A Lifelong Learner",
                "An Open-Source Contributor",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={1500}
            />
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="montserrat font-semibold mb-4 text-[#424874] text-sm sm:text-base"
          >
            I am a Frontend Web Developer specializing in the MERN Stack. I have
            a strong passion for creating responsive, user-friendly, and
            visually appealing web applications. With expertise in React,
            Tailwind CSS, and Node.js, I focus on building seamless user
            experiences while optimizing performance. I enjoy solving problems,
            learning new technologies, and constantly improving my skills to
            stay ahead in the ever-evolving web development landscape. 🚀
          </motion.p>

          {/* Open to Work Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div>
              <motion.h1
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="uppercase montserrat font-light text-2xl sm:text-3xl text-[#424874]"
              >
                Open to work
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center montserrat text-[#424874] text-sm sm:text-base"
              >
                <IoLocationSharp /> <span>Based in Pabna, Bangladesh</span>
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center montserrat text-[#424874] text-sm sm:text-base"
              >
                <FaPhone size={14} /> <span>+8801724680597</span>
              </motion.p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="text-[#424874]"
            >
              <FaFirefox size={40} />
            </motion.div>
          </div>

          {/* Social Links and Resume Button */}
          <div className="my-4 flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-20">
            <div>
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="uppercase montserrat text-xl sm:text-2xl text-[#424874] mb-3"
              >
                Find me on-
              </motion.h1>
              <div className="flex items-center gap-4 sm:gap-10 text-[#424874]">
                {[
                  {
                    icon: <IoMdMail size={28} />,
                    href: "mailto:shahalimsompod@gmail.com",
                  },
                  {
                    icon: <FaLinkedin size={24} />,
                    href: "https://www.linkedin.com/in/shahalimshompod/",
                  },
                  {
                    icon: <FaGithub size={24} />,
                    href: "https://github.com/shahalimshompod",
                  },
                  {
                    icon: <FaFacebook size={24} />,
                    href: "https://www.facebook.com/shahalimsompod.23",
                  },
                  {
                    icon: <BsTwitterX size={24} />,
                    href: "https://x.com/AlimSompod",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    className="inline-block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/uc?export=download&id=18MmPqA8SelC3aoW1rtHKt2buUWlAkjSQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A6B1E1] py-2 px-4 rounded text-[#F4EEFF] montserrat font-semibold text-sm sm:text-base"
                download
              >
                <button className="cursor-pointer">Download Resume</button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
