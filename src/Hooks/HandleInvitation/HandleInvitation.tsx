
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


type parameter = {
    children: React.ReactNode;
  };

const HandleInvitation = ({ children }: parameter) => {
    const {user, logOut, loading} = useContext(AuthContext);
  
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
      <Navigate to={"/login"}></Navigate>

      return;
    }

    return children;
};

export default HandleInvitation;