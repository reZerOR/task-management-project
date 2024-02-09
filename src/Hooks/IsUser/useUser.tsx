import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useUser = () => {
  const userContext = useContext(AuthContext);
  return (
    userContext.user?.displayName !== "Unknown" &&
    userContext.user?.displayName !== null
  );
};

export default useUser;
