import { useLoaderData } from "react-router-dom";
import ProjectBanner from "../../Components/ProjectBanner/ProjectBanner";
import { motion } from "framer-motion";
import Projects from "../../Components/Projects/Projects";

const LandingPage = () => {
    // get projects data
    const projectData = useLoaderData();

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="mx-3 lg:mx-24 2xl:mx-36">
            <ProjectBanner />
            <Projects data={projectData} />

        </motion.div>
    );
};

export default LandingPage;