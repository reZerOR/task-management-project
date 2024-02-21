/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import Container from "../../sharedComponents/Container";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGithub, FaGoogle } from "react-icons/fa";
import TitleHelmet from "../../sharedComponents/TitleHelmet";
import { AuthContext } from "../../Providers/AuthProvider";
import { UserCredential } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const userContext = useContext(AuthContext);
  console.log("userContext", userContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = (e.target as HTMLFormElement).elements;

    // Use namedItem method to access form controls by name
    // Use namedItem method to access form controls by name
    const emailInput = formElements.namedItem("email") as HTMLInputElement;
    const passwordInput = formElements.namedItem(
      "password"
    ) as HTMLInputElement;

    // Check if the elements are not null before accessing their values

    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password);

    // sign in user
    userContext
      .signIn(email, password)
      .then((result: UserCredential) => {
        console.log(result.user);
        toast("Successfully logged in");
        // console.log("Successfully logged in")
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error: UserCredential) => {
        console.error(error);
        toast.error("email or password don't match.please try again");
        // console.log("email or password don't match.please try again")
      });
  };
  //   // google sign in
  const handleGoogleSignIn = () => {
    userContext
      .googleSignIn()
      .then((result: UserCredential) => {
        console.log(result);
        const userInfo = {
          displayName: result.user?.displayName,
          photoURL: result.user?.photoURL,
          email: result.user?.email,
        };

        // Assuming you want to send user information to the server
        return fetch("https://task-project-server-smoky.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      })
      .then((response: Response) => {
        if (response.ok) {
          console.log("User information posted to MongoDB");
        } else {
          throw new Error("Failed to post user information to MongoDB");
        }

        toast("Successfully logged in");
        // console.log("Successfully logged in")
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error: UserCredential) => {
        console.error(error);
        toast.error("email or password don't match.please try again");
        // console.log("email or password don't match.please try again")
      });
  };
  const handleGithubSignIn = () => {
    userContext
      .githubSignIn()
      .then((result: UserCredential) => {
        console.log(result);
        const userInfo = {
          displayName: result.user?.displayName,
          photoURL: result.user?.photoURL,
          email: result.user?.email,
        };

        // Assuming you want to send user information to the server
        return fetch("https://task-project-server-smoky.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      })
      .then((response: Response) => {
        if (response.ok) {
          console.log("User information posted to MongoDB");
        } else {
          throw new Error("Failed to post user information to MongoDB");
        }
        toast("Successfully logged in");
        // console.log("Successfully logged in")
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error: UserCredential) => {
        console.error(error);
        toast.error("email or password don't match.please try again");
        // console.log("email or password don't match.please try again")
      });
  };
  return (
    <div>
      <TitleHelmet title="Login"></TitleHelmet>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly h-screen items-center">
        {/* left side  */}
        <div className="w-1/2 relative h-full flex items-center justify-center bg-primeColor bg-opacity-25">
          <img
            className="w-2/5 opacity-15 absolute"
            src="/favicon.png"
            alt="logo"
          />
          <h2 className="text-9xl tracking-wider font-stylish">
            <span className="text-primeColor font-stylish ">Task</span>Flow
          </h2>
        </div>

        {/* right side */}
        <div className="w-1/2">
          <div className="mx-auto max-w-96">
            <div className="">
              <form onSubmit={handleLogin}>
                <h1 className="text-4xl font-stylish text-center mb-10">
                  Login
                </h1>
                {/* email */}
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="text-lg font-medium mr-2">
                      Email<sup className="text-primeColor">*</sup>
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="border-primeColor focus:outline-none focus:border-primeColor input input-bordered"
                    required
                  />
                </div>

                {/* password */}
                <div className="form-control mb-2 relative">
                  <label className="label">
                    <span className="text-lg font-medium mr-2">
                      Password<sup className="text-primeColor">*</sup>
                    </span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className=" border-primeColor w-full focus:outline-none focus:border-primeColor input input-bordered"
                    required
                  />
                  <span className="absolute bottom-4 right-3">
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEye className="text-xl"></AiOutlineEye>
                      ) : (
                        <AiOutlineEyeInvisible className="text-xl"></AiOutlineEyeInvisible>
                      )}
                    </span>
                  </span>
                  {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
                </div>

                {/* login button */}

                <div className="form-control mb-2 mt-6">
                  <button className=" w-full font-bold rounded-lg px-2 h-10 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-primeColor duration-300">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="divider before:bg-primeColor after:bg-primeColor">
              OR
            </div>
            {/* extra provider */}
            <div className="flex justify-center flex-col gap-2 items-center my-4">
              <button
                onClick={handleGoogleSignIn}
                className=" text-primeColor bg-primeColor bg-opacity-20 w-full py-2 rounded-lg font-semibold flex justify-center items-center gap-2"
              >
                <FaGoogle className="text-lg"></FaGoogle>Sign with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className=" text-primeColor bg-primeColor bg-opacity-20 w-full py-2 rounded-lg font-semibold flex justify-center items-center gap-2"
              >
                <FaGithub className="text-xl"></FaGithub>Sign with Github
              </button>
            </div>

            <p className=" text-center">
              New here? Please{" "}
              <Link to="/register">
                <button className=" text-primeColor font-semibold underline">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
