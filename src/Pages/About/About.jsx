import ProjectBanner from "../../Components/ProjectBanner/ProjectBanner";
import { motion } from "framer-motion";
import Projects from "../../Components/Projects/Projects";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import AboutMeSec from "../../Components/AboutMeSec/AboutMeSec";


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="mx-3 lg:mx-24 2xl:mx-36">

            <AboutBanner />
            <AboutMeSec />

        </motion.div>
    );
};

export default About;