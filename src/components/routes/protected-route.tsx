import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const isAuthenticated = true;
	const unAuthenticatedPath = "/sign-in";
	if (!isAuthenticated) {
		return <Navigate replace to={`${unAuthenticatedPath}`} />;
	}
	return <Outlet />;
};
export default ProtectedRoute;
