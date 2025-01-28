import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user || !user.role || !allowedRoles.includes(user.role)) {
    console.warn("Access denied. Redirecting to login.");
    return <Navigate to="/log-in" replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }),
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
