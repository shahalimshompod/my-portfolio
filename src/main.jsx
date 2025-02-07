import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import About from './Pages/About/About.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <About />
      },
      // projects page
      {
        path: '/projects',
        element: <LandingPage />,
        loader: () => fetch("/projects.json")
      },
      {
        path: '/resume',
        element: <>resume</>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
