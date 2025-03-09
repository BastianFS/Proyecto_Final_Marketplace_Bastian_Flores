import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../assets/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if(!user || !user?.token){
    return <Navigate to="/login" state={{ from: location}} replace />;
  }

  return children;
};

export default ProtectedRoutes;
