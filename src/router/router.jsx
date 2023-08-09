import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cities from '../pages/Cities';


const router = createBrowserRouter([
    { path: '/', 
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home />},
            { path: '/cities', element: <Cities />}
        ]
    },
])

export default router;