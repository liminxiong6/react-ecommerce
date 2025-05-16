import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ publicPage = false }) => {
    const { user } = useSelector((state) => state.auth);
    console.log(user);
    if (publicPage) {
        return user ? <Navigate to="/profile" /> : <Outlet />;
    }
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
