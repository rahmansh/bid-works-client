import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} >
                <Route index element={<Home />} />
                <Route path="jobs" element={<Jobs />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;