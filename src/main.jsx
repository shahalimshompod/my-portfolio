import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root/Root.jsx";
import About from "./Pages/About/About.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails.jsx";
import { param } from "motion/react-client";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UnderConstruction />,
    // children: [
    //   {
    //     path: '/',
    //     element: <About />
    //   },
    //   // projects page
    //   {
    //     path: '/projects',
    //     element: <LandingPage />,
    //     loader: () => fetch("/projects.json")
    //   },
    //   {
    //     path: '/project-details/:id',
    //     loader: () => fetch("/projects.json"),
    //     element: <ProjectDetails />
    //   }
    // ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
