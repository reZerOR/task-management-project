/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "../../sharedComponents/Container";
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
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

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

    }

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });

    if (res.data.success) {

      const formElements = (e.target as HTMLFormElement).elements;
      const displayNameInput = formElements.namedItem("name") as HTMLInputElement;
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
          const response = await fetch(
            "https://task-project-server-smoky.vercel.app/user",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ displayName, photoURL, email }),
            }
          );
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
    <Container>
      <div>
        <TitleHelmet title="Registration" />
        <div className="mt-6">
          <Link to="/">
            <button className="text-4xl font-stylish rounded-lg px-8 h-16 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-none duration-300">
              Taskflow
            </button>
          </Link>
        </div>
        <div className="text-center mt-8 mb-14">
          <h1 className="text-4xl font-bold text-primeColor mb-4">
            Register now!
          </h1>
        </div>
        {/* register page starts here */}
        <div className="flex flex-col-reverse lg:flex-row gap-5 justify-evenly items-center">
          <div className="">
            <img
              src="https://i.ibb.co/qnM6wcH/undraw-Sign-up-n6im.png"
              alt=""
              className="max-w-[700px]"
            />
          </div>
          {/* register div starts here */}
          <div className="">
            <div className="w-full bg-slate-200 rounded-lg shadow-2xl p-10">
              <div className="">
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
                      type="file"
                      name="img"
                      placeholder="Image"
                      className="border-primeColor input input-bordered p-2"
                      required
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
                    {/* <button className="btn w-full bg-primeColor border-primeColor text-white p-2 rounded-lg">
                    Register
                  </button> */}
                    <button className=" w-full font-bold rounded-lg px-2 h-10 before:block before:absolute hover:before:bg-primeColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-300 before:rounded-lg before:-z-10 relative inline-block transform hover:text-white text-primeColor bg-transparent border-2 overflow-hidden border-primeColor duration-300">
                      Register
                    </button>
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
                {/* <button
          onClick={handleGoogleSignIn}
          className=" text-primeColor  font-semibold flex justify-center items-center gap-2"
        >
          <FaFacebook className="text-xl"></FaFacebook>
          <span className="text-3xl">
          </span>
        </button> */}
                <button
                  onClick={handleGithubSignIn}
                  className=" text-primeColor font-semibold flex justify-center items-center gap-2"
                >
                  <FaGithub className="text-xl"></FaGithub>
                  <span className="text-xl"></span>
                </button>
              </div>
              <p className="p-3 text-center">
                Already have an account? Please
                <Link to="/login">
                  <button className="btn btn-link text-primeColor ml-1 font-semibold underline">
                    login
                  </button>
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
