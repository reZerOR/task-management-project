
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


type parameter = {
    children: React.ReactNode;
  };

const HandleInvitation = ({ children }: parameter) => {
    const {user, loading, fTime} = useContext(AuthContext);
    // const navigate=useNavigation();
    const location = useLocation();
  
    if (loading) {
      return (
        <progress
          className="progress progress-warning w-56"
          value="100"
          max="100"
        ></progress>
      );
    }
    if (
      user?.email
    ) {
      if(fTime==true){
        return <Navigate state={location.pathname} to="/login" />;
      }

      
    }

    return children;
};

export default HandleInvitation;