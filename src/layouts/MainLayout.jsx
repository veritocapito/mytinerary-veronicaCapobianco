import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayer = ({ children }) => {
    return (
        <div className="w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayer;