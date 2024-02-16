/* eslint-disable @typescript-eslint/no-unused-vars */

import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import TitleHelmet from "../../sharedComponents/TitleHelmet";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { UserCredential } from "firebase/auth";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const imageFile = {
      image: form.img.files[0],
    };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const formElements = (e.target as HTMLFormElement).elements;
      const displayNameInput = formElements.namedItem(
        "name"
      ) as HTMLInputElement;
      const photoURLInput = res.data.data.display_url;
      const emailInput = formElements.namedItem("email") as HTMLInputElement;
      const passwordInput = formElements.namedItem(
        "password"
      ) as HTMLInputElement;

      const displayName = displayNameInput.value;
      const photoURL = photoURLInput;
      const email = emailInput.value;
      const password = passwordInput.value;
      console.log(displayName, photoURL, email, password);

      // password validation
      if (password.length < 6) {
        return toast("Password should be at least 6 characters long.");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        return toast("Include at least one uppercase letter.");
      } else if (!/(?=.*[!@#$%^&*()_+{}|:<>?])/.test(password)) {
        return toast("Include at least one special characters.");
      }

      // sign in user

      await userContext
        .createUser(displayName, photoURL, email, password)
        .then(async (result: UserCredential) => {
          console.log(result);
          const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ displayName, photoURL, email }),
          });
          if (response.ok) {
            console.log("User information posted to MongoDB");
          } else {
            throw new Error("Failed to post user information to MongoDB");
          }
        })
        .catch((error: UserCredential) =>
          console.log("error from sign up", error)
        );
      toast("Congratulations,registration successful");
      // console.log("Congratulations,registration successful");
      setTimeout(() => {
        userContext.logOut();
        navigate("/login");
      }, 1000);
    }
  };
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
          console.log("User information posted to MongoDB");
        } else {
          throw new Error("Failed to post user information to MongoDB");
        }

        toast("Successfully logged in");
        // console.log("Successfully logged in")
        setTimeout(() => {
          navigate("/");
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
          console.log("User information posted to MongoDB");
        } else {
          throw new Error("Failed to post user information to MongoDB");
        }
        toast("Successfully logged in");
        // console.log("Successfully logged in")
        setTimeout(() => {
          navigate("/");
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
      <TitleHelmet title="Registration" />

      {/* register page starts here */}
      <div className="flex flex-col-reverse lg:flex-row justify-evenly h-screen items-center">
        <div className="w-1/2 relative h-full flex items-center justify-center bg-primeColor bg-opacity-25">
          <img
            className="w-2/5 opacity-15 absolute"
            src="/favicon.png"
            alt="logo"
          />
          <h2 className="text-9xl tracking-wider font-thin font-stylish">
            <span className="text-primeColor font-stylish ">Task</span>Flow
          </h2>
        </div>
        {/* register div starts here */}
        <div className="w-1/2">
          <div className="mx-auto max-w-96">
            <div className="">
              <form onSubmit={handleRegister}>
                <h1 className="text-4xl font-stylish text-center mb-10">
                  Register
                </h1>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="text-lg font-medium mr-2">
                      Name<sup className="text-primeColor">*</sup>
                    </span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="border-primeColor focus:outline-none focus:border-primeColor input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="text-lg font-medium mr-2">Image</span>
                  </label>
                  <input
                    type="file"
                    name="img"
                    placeholder="Image"
                    className="border-primeColor focus:outline-none focus:border-primeColor input input-bordered p-2"
                    required
                  />
                </div>
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
                    className="border-primeColor input input-bordered p-2"
                    required
                  />
                </div>
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
                    className="border-primeColor w-full focus:outline-none focus:border-primeColor input input-bordered"
                    required
                  />

                  <span className="absolute bottom-3 right-3">
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEye className="text-xl"></AiOutlineEye>
                      ) : (
                        <AiOutlineEyeInvisible className="text-xl"></AiOutlineEyeInvisible>
                      )}
                    </span>
                  </span>
                </div>
                <div className="form-control mb-2 mt-6">
                  <button className=" w-full font-bold rounded-lg px-2 h-10 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-primeColor duration-300">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="divider before:bg-primeColor after:bg-primeColor">
              OR
            </div>
            <div className="flex  justify-center flex-col gap-2 items-center my-4">
              <button
                onClick={handleGoogleSignIn}
                className=" text-primeColor bg-primeColor bg-opacity-20 w-full py-2 rounded-lg font-semibold flex justify-center items-center gap-2"
              >
                <FaGoogle className="text-lg"></FaGoogle>
                <span>Register with Google</span>
              </button>
              <button
                onClick={handleGithubSignIn}
                className=" text-primeColor bg-primeColor bg-opacity-20 w-full py-2 rounded-lg font-semibold flex justify-center items-center gap-2"
              >
                <FaGithub className="text-xl"></FaGithub>
                <span>Register with Github</span>
              </button>
            </div>
            <p className="text-center">
              Already have an account? Please
              <Link to="/login">
                {" "}
                <button className="text-primeColor font-semibold underline">
                  login
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

export default Register;
