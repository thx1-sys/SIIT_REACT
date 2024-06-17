import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, element }) => {
  const location = useLocation();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
