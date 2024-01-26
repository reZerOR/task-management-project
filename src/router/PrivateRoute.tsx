import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
type parameter={
    children:React.ReactNode;
}
const PrivateRoute = ({children}:parameter) => {
    const userContext=useContext(AuthContext);
    const location = useLocation();
    if(userContext.loading){
 return <progress className="progress progress-warning w-56" value="100" max="100"></progress>
    }
   if(userContext.user){
  return children
   }
   return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};
export default PrivateRoute;