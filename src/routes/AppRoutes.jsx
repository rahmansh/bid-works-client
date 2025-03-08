import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;