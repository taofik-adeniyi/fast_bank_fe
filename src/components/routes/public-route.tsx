import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ()=>{
    const isAuthenticated = false;
	const authenticatedPath = "/dashboard";
	if (isAuthenticated) {
		return <Navigate replace to={`${authenticatedPath}`} />;
	}
	return <Outlet />;
}
export default PublicRoute