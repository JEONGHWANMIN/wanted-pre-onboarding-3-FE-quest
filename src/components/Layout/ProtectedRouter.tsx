import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRouter() {
  const { authObj } = useAuth();

  if (authObj.auth === false) {
    return <Navigate to="/signup" replace />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
