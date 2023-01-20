import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

interface AuthProviderProps {
  children?: ReactNode;
}

const PrivateRoute = ({ children }: AuthProviderProps) => {
  const { user, loading }: any = useContext(AuthContext);
  console.log(loading);
  console.log(user);

  const location = useLocation();

  if (loading) {
    return <p>Loading..</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
