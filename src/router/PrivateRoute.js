import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const userID = localStorage.getItem("user_id");

  return !userID ? <Navigate to="/login" replace={true} /> : children;
}

export default PrivateRoute;
