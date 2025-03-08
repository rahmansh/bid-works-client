import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;