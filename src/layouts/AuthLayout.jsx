import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="min-h-screen max-w-screen-2xl mx-auto">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AuthLayout;