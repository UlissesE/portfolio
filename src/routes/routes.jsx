import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/sobre',
                element: <AboutPage/>
            },
            {
                path: '/projetos',
                element: <ProjectsPage/>
            }
        ]
    }
])

export default router