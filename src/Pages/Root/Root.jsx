import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import Cursor from "../../Components/Cursor/Cursor";

const Root = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
        },
        hover: {
            x: mousePosition.x,
            y: mousePosition.y,
            scale: 2,
            transition: { type: "spring", stiffness: 150 },
        },
    };

    const headingEnter = () => {
        setCursorVariant("hover");
        setIsHovering(true);
    };

    const headingLeave = () => {
        setCursorVariant("default");
        setIsHovering(false);
    };

    const enterAndLeaveFunc = { headingEnter, headingLeave };

    return (
        <>
            {showPreloader ? (
                <Preloader onComplete={() => setShowPreloader(false)} />
            ) : (
                <div
                >
                    <Cursor
                        mousePosition={mousePosition}
                        variants={variants}
                        cursorVariant={cursorVariant}
                        isHovering={isHovering}
                    />
                    <Navbar />
                    <Outlet context={enterAndLeaveFunc} />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Root;