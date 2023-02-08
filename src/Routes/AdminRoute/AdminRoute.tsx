import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import Loading from "../../Shared/Loading/Loading";

interface adminProps {
  children?: any;
}

const AdminRoute = ({ children }: adminProps) => {
  const { user, loading }: any = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
