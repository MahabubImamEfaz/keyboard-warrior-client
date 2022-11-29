import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();
  if (user && isAdmin) {
    return children;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#e9c46a]"></div>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
