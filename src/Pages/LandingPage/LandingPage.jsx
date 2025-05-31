import { useLoaderData } from "react-router-dom";
import ProjectBanner from "../../Components/ProjectBanner/ProjectBanner";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "../../Components/Projects/Projects";
import WorkFlowSection from "../../Components/WorkFlow/WorkFlowSection";

const LandingPage = () => {
    // get projects data
    const projectData = useLoaderData();

    return (
        <AnimatePresence>
            <motion.div
                key="landing-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                exit={{ opacity: 0 }}
                className="mx-3 md:mx-12 2xl:mx-36"
            >
                <ProjectBanner />
                <WorkFlowSection />
                <Projects data={projectData} />
            </motion.div>
        </AnimatePresence>
    );
};

export default LandingPage;