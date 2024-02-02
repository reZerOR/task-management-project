import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPrivate from "../AxiosPrivate/useAxiosPrivate";

const useUserInfo = () => {
//     const {user}=useContext(AuthContext);
//     const axiosPrivate= useAxiosPrivate();
    
//   const {data: userInfo, refetch}= useQuery({
//     queryKey: ["userInfo", user?.email],
//     queryFn: async ()=>{
//         const res= await axiosPrivate.get(`/currentUserInfo/${user?.email}`);
//         console.log(res.data)
//         return res.data;
//     }
//   })

//   return [userInfo,refetch];
};

export default useUserInfo;