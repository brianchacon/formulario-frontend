import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import { Roles } from '../models/roles';


interface Props {
  role: Roles;
}

function RoleGuard({ role }: Props) {
  
  const roleStore = localStorage.getItem("role");
  return roleStore === role ? <Outlet /> : <Navigate replace to={PrivateRoutes.APP} />;
}
export default RoleGuard;
