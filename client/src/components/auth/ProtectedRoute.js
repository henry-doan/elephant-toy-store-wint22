import { Navigate, Outlet } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";

const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
}

const ConnectedProtectedRoute = (props) => (
  <AuthConsumer>
    { value => <ProtectedRoute {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProtectedRoute;
