import { Navigate, Outlet } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";

const AdminProtectedRoute = ({ user }) => {
  return user.admin ? <Outlet /> : <Navigate to="/login" />;
}

const ConnectedAdminProtectedRoute = (props) => (
  <AuthConsumer>
    { value => <AdminProtectedRoute {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedAdminProtectedRoute;
