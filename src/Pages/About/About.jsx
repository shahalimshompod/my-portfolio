import { motion } from "framer-motion";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import AboutMeSec from "../../Components/AboutMeSec/AboutMeSec";
import SkillSection from "../../Components/Skills/SkillSection";
import ContactForm from "../../Components/ContactForm/ContactForm";


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="mx-3 md:mx-12 2xl:mx-36">

            <AboutBanner />
            <AboutMeSec />
            <SkillSection />
            <ContactForm />

        </motion.div>
    );
};

export default About;