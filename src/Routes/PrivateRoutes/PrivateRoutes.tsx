import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }: any) => {
  const { user, loading }: any = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div></div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
