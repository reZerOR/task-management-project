/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "../../sharedComponents/Container";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import TitleHelmet from "../../sharedComponents/TitleHelmet";

const Login = () => {
     // const { signIn,googleSignIn } = useAuth()
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
     const location = useLocation();
     const handleLogin = (e :React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const formElements = (e.target as HTMLFormElement).elements;
 
   // Use namedItem method to access form controls by name
  // Use namedItem method to access form controls by name
  const emailInput = formElements.namedItem('email') as HTMLInputElement | null;
  const passwordInput = formElements.namedItem('password') as HTMLInputElement | null;
 
  // Check if the elements are not null before accessing their values
  if (emailInput && passwordInput) {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password);
  }
   
       // sign in user
     //   signIn(email, password)
     //     .then((result) => {
     //       console.log(result.user);
     //       toast("Successfully logged in");
     //       setTimeout(() => {
     //         navigate(location?.state ? location.state : "/");
     //       }, 2000);
     //     })
     //     .catch((error) => {
     //       console.error(error);
     //       toast.error("email or password don't match.please try again");
     //     });
     };
     //   // google sign in
     const handleGoogleSignIn = () => {
     //   googleSignIn()
     //     .then((result) => {
     //       console.log(result);
     //       toast("Successfully logged in");
     //       setTimeout(() => {
     //         navigate(location?.state ? location.state : "/");
     //       }, 2000);
     //     })
     //     .catch((error) => {
     //       console.error(error);
     //       toast.error("email or password don't match.please try again");
     //     });
     };
    return (
        <Container>
             
      <div>
        <TitleHelmet title="Login"></TitleHelmet>
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-primeColor">Login now!</h1>
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
            <div className="form-control">
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
            <div className="form-control relative mr-2">
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
              <button className="btn w-full bg-primeColor border-prtext-primeColor text-white p-2 rounded-lg">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center my-4">
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
          onClick={handleGoogleSignIn}
          className=" text-primeColor  font-semibold flex justify-center items-center gap-2"
        >
          <FaFacebook className="text-xl"></FaFacebook>
          <span className="text-3xl">
            {/* <FcGoogle></FcGoogle> */}
          </span>
        </button>
        <button
          onClick={handleGoogleSignIn}
          className=" text-primeColor  font-semibold flex justify-center items-center gap-2"
        >
          <FaGithub className="text-xl"></FaGithub>
          <span className="text-xl">
            {/* <FcGoogle></FcGoogle> */}
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
      </div>
        </Container>
    );
};

export default Login;