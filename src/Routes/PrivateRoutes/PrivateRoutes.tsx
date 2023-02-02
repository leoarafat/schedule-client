// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
// import Loading from "../../Shared/Loading/Loading";

// interface PrivateProps {
//   element: any;
//   path: string;
//   exact?: boolean;
// }

// const PrivateRoute = ({ element, path, ...rest }: PrivateProps) => {
//   const { user, loading }: any = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <Loading />;
//   }
//   if (user) {
//     return rest;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };
// export default PrivateRoute;
import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
// interface ContextProps {
  // children?: ReactNode;
// }
// 
const PrivateRoute = ({ children } : any) => {
  const { user, loading }: any = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
