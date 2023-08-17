import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cities from '../pages/Cities';
import CityDetails from "../pages/CityDetails";
import NotFound from '../components/NotFound';


const router = createBrowserRouter([
    { path: '/', 
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home />},
            { path: '/cities', element: <Cities />},
            { path: '/cities/:id', element: <CityDetails />},
            { path: '/*', element: <NotFound />},
        ]
    },
])

export default router;