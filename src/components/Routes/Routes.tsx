import appLogo from "assets/images/app-logo-placeholder.svg";
import AppFrame from "components/AppFrame";
import { useUserContext } from "contexts";
import Auth from "pages/Auth";
import Home from "pages/Home/Home";
import Job from "pages/Jobs/Job";
import {
  Navigate,
  Outlet,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<AppFrame />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs/:id" element={<Job />} />
        </Route>
      </Route>
      <Route path="auth" element={<Auth />} />
    </ReactRouterRoutes>
  );
};

const ProtectedRoutes = () => {
  const { user } = useUserContext();
  if (!user.accountName) return <Navigate to="/auth" />;

  return <Outlet />;
};

export default Routes;
