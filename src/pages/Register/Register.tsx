/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "../../sharedComponents/Container";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import TitleHelmet from "../../sharedComponents/TitleHelmet";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { createUser } = useAuth()
    const navigate = useNavigate();
  
    const handleRegister = async (e :React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formElements = (e.target as HTMLFormElement).elements;
  const displayNameInput = formElements.namedItem('name') as HTMLInputElement ;
  const photoURLInput = formElements.namedItem('img') as HTMLInputElement ;
  const emailInput = formElements.namedItem('email') as HTMLInputElement ;
  const passwordInput = formElements.namedItem('password') as HTMLInputElement ;

      const displayName = displayNameInput.value;
      const photoURL = photoURLInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
  console.log(displayName,photoURL,email,password)
      
      // password validation
      if (password.length < 6) {
        return toast("Password should be at least 6 characters long.");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        return toast("Include at least one uppercase letter.");
      } else if (!/(?=.*[!@#$%^&*()_+{}|:<>?])/.test(password)) {
        return toast("Include at least one special characters.");
      }
  
      // sign in user
  
    //   const result = await createUser(displayName,photoURL, email, password)
    //     .then(async (result) => {
    //       console.log(result);
    //       const response=await fetch("http://localhost:5000/user",{
    //         method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ displayName,photoURL, email, password })
    //       })
    //       if (response.ok) {
    //         console.log('User information posted to MongoDB');
    //       } else {
    //         throw new Error('Failed to post user information to MongoDB');
    //       }
    //     })
    //     .catch((error) => console.log("error from sign up", error));
    //   toast("Congratulations,registration successful");
      
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 1000);
    };
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
                    <TitleHelmet title="Registration" />
         <div className="text-center ">
            <h1 className="text-5xl font-bold text-primeColor mb-4">Register now!</h1>
          </div>
         <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center items-center">    
                <div className="flex-1">
                <img src="https://i.ibb.co/qnM6wcH/undraw-Sign-up-n6im.png" alt="" />
            </div>
            <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full bg-slate-200 rounded-lg max-w-sm shadow-2xl p-10">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text mr-2">
                      Name<sup className="text-primeColor">*</sup>
                    </span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="border-primeColor input input-bordered p-2"
                    required
                  />
                </div>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text mr-2">Image</span>
                  </label>
                  <input
                    type="photoURL"
                    name="img"
                    placeholder="Image"
                    className="border-primeColor input input-bordered p-2"
                  />
                </div>
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
                    className="border-primeColor input input-bordered p-2 relative"
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
                </div>
                <div className="form-control mb-2 mt-6">
                  <button className="btn w-full bg-primeColor border-primeColor text-white p-2 rounded-lg">
                    Register
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
              Already have an account? Please
              <Link to="/login">
                <button className="btn btn-link text-primeColor ml-1 font-semibold underline">login</button>
              </Link>
            </p>
          </div>
        </div>
         </div>
       
        <ToastContainer />
      </div>

        </Container>
    );
};

export default Register;