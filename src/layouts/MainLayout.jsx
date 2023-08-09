import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full">
            <Navbar />
                <Outlet/>
            <Footer />
        </div>
    )
}

export default MainLayout;