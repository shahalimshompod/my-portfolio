import ProjectBanner from "../../Components/ProjectBanner/ProjectBanner";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <motion.div

            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0, y: 800 }}
            className="mx-28">
            <ProjectBanner />
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
            <div className="mx-20">
                <ProjectCard />
            </div>
        </motion.div>
    );
};

export default LandingPage;