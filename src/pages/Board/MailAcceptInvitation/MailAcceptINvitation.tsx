import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MailAcceptINvitation = () => {
    console.log("Rendering MailAcceptINvitation");
    const {user}=useContext(AuthContext)
    const mail=user?.email
    console.log(mail,"mail")
    
    
    const handlesubmit=({mail}:{mail:string})=>{
      console.log(mail)
    }
    return (
        <div>
        <h1>Invitation Accepted!</h1>
        <button onClick={()=>handlesubmit(mail)} className="my-10 btn-primary">join now</button>
        <p>Congratulations! You have successfully accepted the invitation.</p>
        {/* You can add more content or styling as needed */}
      </div>
    );
};

export default MailAcceptINvitation;