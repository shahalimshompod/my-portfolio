import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import SmoothScroll from "../../Components/SmoothScroll/SmoothScroll";

const Root = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const location = useLocation(); // Get current route location

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {showPreloader ? (
                <Preloader onComplete={() => setShowPreloader(false)} />
            ) : (
                <div>
                    <SmoothScroll />
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Root;
