import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import SmoothScroll from "../../Components/SmoothScroll/SmoothScroll";

const Root = () => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [isChecking, setIsChecking] = useState(true); // Add this line
  const location = useLocation();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
    }

    setIsChecking(false); // We are done checking
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setShowPreloader(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // 🛑 Don't render anything until checking is done
  if (isChecking) return null;

  return (
    <>
      {showPreloader ? (
        <Preloader onComplete={handlePreloaderComplete} />
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
