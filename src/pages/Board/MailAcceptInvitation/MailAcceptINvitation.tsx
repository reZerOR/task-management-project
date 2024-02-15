/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPrivate from "../../../Hooks/AxiosPrivate/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MailAcceptINvitation = () => {
  const {user}=useContext(AuthContext);
  const axiosPrivate=useAxiosPrivate();
    console.log("Rendering MailAcceptINvitation");
    const {boardId}=useParams();

    console.log(boardId);

    

    const {data: invitation=[]}= useQuery({
      queryKey: ["invitation"],
      queryFn: async()=>{
        const res= await axiosPrivate.patch(`/addMember/${boardId}/${user?.email}`);
        console.log(res.data);
        return res.data;
      }
    })

    console.log(invitation, "inviiiiiiiiiiii frm");

    const handleJoin=async(email:any)=>{
      console.log(email);
      // const res= await axiosPrivate.patch(`/addMember/${email}`)
    }
    return (
        <div>
        <h1>Invitation Accepted!</h1>
        <button onClick={()=>handleJoin(user?.email)}>Join Now</button>
        <p>Congratulations! You have successfully accepted the invitation.</p>
        {/* You can add more content or styling as needed */}
      </div>
    );
};

export default MailAcceptINvitation;