import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-[#DCD6F7] px-4 sm:px-8 md:px-12 lg:px-28 py-8">
            <div className="w-full md:w-2/3 xl:w-1/2 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        viewport={{ once: true }}
                        className="montserrat text-xl  font-semibold uppercase text-[#424874] text-center md:text-left"
                    >
                        Lets build something <br /> out of the world ;)
                    </motion.h1>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 text-[#424874]">
                        {[
                            { icon: <IoMdMail size={28} />, href: "mailto:shahalimsompod@gmail.com" },
                            { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/shahalimshompod/" },
                            { icon: <FaGithub size={24} />, href: "https://github.com/shahalimshompod" },
                            { icon: <FaFacebook size={24} />, href: "https://www.facebook.com/shahalimsompod.23" },
                            { icon: <BsTwitterX size={24} />, href: "https://x.com/AlimSompod" },
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

                {/* Copyright Text */}
                <p className="montserrat font-light text-xs sm:text-sm text-center mt-6 md:mt-8 text-[#424874]">
                    Copyright @ 2025 Shah Alim Shompod. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;