import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Course from "./Course"

const Courses = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses