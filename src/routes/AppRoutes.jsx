import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} >
                <Route index element={<Home />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;