import { Navigate } from "react-router-dom";
import { useAuth } from "../redux/auth/slice";


 const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const isAuthenticated  = !isLoggedIn && !isRefreshing;

  return isAuthenticated  ? <Navigate to={redirectTo} /> : Component;
}
export default PrivateRoute

