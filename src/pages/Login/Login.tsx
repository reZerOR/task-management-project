/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "../../sharedComponents/Container";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import TitleHelmet from "../../sharedComponents/TitleHelmet";
import { AuthContext } from "../../Providers/AuthProvider";
import { UserCredential } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
     const userContext = useContext(AuthContext)
     console.log("userContext",userContext)
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
     const location = useLocation();
     const handleLogin = (e :React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const formElements = (e.target as HTMLFormElement).elements;
 
   // Use namedItem method to access form controls by name
  // Use namedItem method to access form controls by name
  const emailInput = formElements.namedItem('email') as HTMLInputElement ;
  const passwordInput = formElements.namedItem('password') as HTMLInputElement ;
 
  // Check if the elements are not null before accessing their values
   
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password);
  
   
       // sign in user
       userContext.signIn(email, password)
         .then((result:UserCredential) => {
           console.log(result.user);
           toast("Successfully logged in");
          // console.log("Successfully logged in")
           setTimeout(() => {
             navigate(location?.state ? location.state : "/");
           }, 2000);
         })
         .catch((error:UserCredential) => {
           console.error(error);
           toast.error("email or password don't match.please try again");
          // console.log("email or password don't match.please try again")
         });
     };
     //   // google sign in
     const handleGoogleSignIn = () => {
       userContext.googleSignIn()
         .then((result:UserCredential) => {
           console.log(result);
           const userInfo = {
            displayName: result.user?.displayName,
            photoURL: result.user?.photoURL,
            email: result.user?.email,
          };
    
          // Assuming you want to send user information to the server
          return fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          });
        })
        .then((response: Response) => {
          if (response.ok) {
            console.log('User information posted to MongoDB');
          } else {
            throw new Error('Failed to post user information to MongoDB');
          }

           toast("Successfully logged in");
          // console.log("Successfully logged in")
           setTimeout(() => {
             navigate(location?.state ? location.state : "/");
           }, 2000);
         })
         .catch((error:UserCredential) => {
           console.error(error);
           toast.error("email or password don't match.please try again");
          // console.log("email or password don't match.please try again")
         });
     };
     const handleGithubSignIn = () => {
       userContext.githubSignIn()
         .then((result:UserCredential) => {
           console.log(result);
           const userInfo = {
            displayName: result.user?.displayName,
            photoURL: result.user?.photoURL,
            email: result.user?.email,
          };
    
          // Assuming you want to send user information to the server
          return fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          });
        })
        .then((response: Response) => {
          if (response.ok) {
            console.log('User information posted to MongoDB');
          } else {
            throw new Error('Failed to post user information to MongoDB');
          }
           toast("Successfully logged in");
          // console.log("Successfully logged in")
           setTimeout(() => {
             navigate(location?.state ? location.state : "/");
           }, 2000);
         })
         .catch((error:UserCredential) => {
           console.error(error);
           toast.error("email or password don't match.please try again");
          // console.log("email or password don't match.please try again")
         });
     };
    return (
        <Container>
             
      <div>
        <TitleHelmet title="Login"></TitleHelmet>
       <div className="mt-6">
          <Link to="/">
            <button className="text-2xl font-bold rounded-lg px-8 h-16 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-none duration-300">
           Taskflow</button>
           </Link>
            </div>
      <div className="text-center mt-8 mb-14">
        <h1 className="text-4xl font-bold text-primeColor">Login now!</h1>
      </div>
            <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center items-center">
              
                <div className="flex-1">
                <img src="https://i.ibb.co/7CKcLrn/undraw-Login-re-4vu2.png" alt="" />
            </div>
            <div className="flex-1">
          <div className="hero-content flex-col  ">
      
      <div className="card flex-shrink-0 w-full bg-slate-200 rounded-lg max-w-sm shadow-2xl p-10">
        <div className="card-body ">
          <form 
          onSubmit={handleLogin}
          >
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text mr-2">
                  Email<sup className="text-primeColor">*</sup>
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border-primeColor input input-bordered p-2"
                required
              />
            </div>
            <div className="form-control mb-2 relative mr-2">
              <label className="label">
                <span className="label-text mr-2">
                  Password<sup className="text-primeColor">*</sup>
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className=" border-primeColor input input-bordered p-2"
                required
              />
              <span className="absolute bottom-2 right-2">
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <AiOutlineEye></AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                  )}
                </span>
              </span>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn w-full bg-primeColor border-prtext-primeColor text-white p-2 rounded-lg">
                Login
              </button> */}
              <button className=" w-full font-bold rounded-lg px-2 h-10 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-primeColor duration-300">
           Login</button>
            </div>
          </form>
        </div>
        <div className="flex  justify-center items-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className=" text-primeColor  font-semibold flex justify-center items-center gap-2"
        >
          <FaGoogle className="text-lg"></FaGoogle>
          <span className="text-2xl">
            {/* <FcGoogle></FcGoogle> */}
          </span>
        </button>
        <button
          onClick={handleGithubSignIn}
          className=" text-primeColor  font-semibold flex justify-center items-center gap-2"
        >
           <FaGithub className="text-xl"></FaGithub>
          <span className="text-xl">
            
          </span>
        </button>
        </div>

        <p className="p-3 text-center">
          New here? Please 
          <Link to="/register">
            <button className="btn btn-link text-primeColor ml-1 font-semibold underline"> Register</button>
          </Link>
        </p>
      </div>
   
    </div>
          </div>
            </div>
            <ToastContainer/>
      </div>
        </Container>
    );
};

export default Login;