import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn =
    window.localStorage.getItem("status") === "active" ? true : false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return children ? children : <Outlet />;
  }
};
export default ProtectedRoutes;
