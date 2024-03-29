/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import lottiAnimation1 from "../../assets/TasksBoard/Add User.json";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../sharedComponents/Container";

const UpdateTask = () => {
  const userContext = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);
  const [updateTask, setUpdateTask] = useState([]);
  console.log("updateTask", updateTask);
  const email = userContext.user?.email;
  console.log(email);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://task-project-server-smoky.vercel.app/updatetaskInTheBoard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateTask(data);
      });
  }, [id]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const description = formData.get("description");
    const Visibility = formData.get("Visibility");

    console.log(name, description, Visibility);
    const taskData = {
      title: name,
      description: description,
      visibility: Visibility,
    };
    fetch(`https://task-project-server-smoky.vercel.app/updatetaskInTheBoard/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });

    e.currentTarget.reset();

    toast.success("Task updated successfully");
    setTimeout(() => {
      navigate("/tasksboard");
    }, 2000);
  };
  return (
    <Container>
      <div>
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={(e) => handleSubmit(e)} className="p-12">
            <div className="flex justify-center items-center  w-60 h-60">
              <Lottie
                animationData={lottiAnimation1}
                aria-aria-labelledby="use lottie animation"
              />
            </div>

            <h1 className="backdrop-blur-sm text-4xl pb-8">Update Project</h1>
            <div className="space-y-5">
              <label htmlFor="name" className="block">
                Name
              </label>
              <div className="relative">
                <input
                  name="name"
                  id="name"
                  type="text"
                  // defaultValue={updateTask.title}
                  // placeholder="type your project name"
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                />
                <span className="absolute top-1/4 left-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-6"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier"> </g>{" "}
                    <path
                      fill="#231f20"
                      d="M17.51 9.27C16.23 4 12.88 2.14 12.74 2.06a.51.51 0 0 0-.48 0c-.17.1-3.53 2-4.79 7.23C6.26 10.28 3 13.16 3 15.5a.5.5 0 0 0 .5.5H7v1.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V16h3.5a.5.5 0 0 0 .5-.5C22 13.15 18.71 10.26 17.51 9.27zM13.5 15h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm-1-2A2.5 2.5 0 1 1 15 10.5 2.5 2.5 0 0 1 12.5 13zM16.5 19a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1A.5.5 0 0 0 16.5 19zM8.5 19a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1A.5.5 0 0 0 8.5 19zM12.17 21.87a.48.48 0 0 0 .66 0A7.51 7.51 0 0 0 14.73 19H10.27A7.51 7.51 0 0 0 12.17 21.87z"
                    ></path>
                  </svg>
                </span>
              </div>

              <label htmlFor="Description" className="block">
                Description
              </label>
              <div className="relative">
                <input
                  name="description"
                  id="pass"
                  type="Description"
                  // placeholder="Short description"
                  // defaultValue={updateTask.description}
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                />
                <span className="absolute top-1/4 left-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>

              <label htmlFor="Visibility" className="block">
                Visibility
              </label>
              <div className="relative">
                {/* <input id="pass" type="text" placeholder="Short description" className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" /> */}
                <select
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                  name="Visibility"
                  id="Visibility"
                >
                  <option value="Private"> Private</option>
                  <option value="Public">Public</option>
                  <option value="Workspace">Workspace</option>
                </select>
                <span className="absolute top-1/4 left-2">
                  <span className="absolute top-1/4 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="inline-block w-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier"> </g>{" "}
                      <path
                        d="M12 6a9.77 9.77 0 0 0-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5A9.77 9.77 0 0 0 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z"
                        opacity=".3"
                      ></path>
                      <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13a9.77 9.77 0 0 1-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>{" "}
                    </svg>
                  </span>
                </span>
              </div>
            </div>

            {/* button type will be submit for handling form submission*/}
            <button
              type="submit"
              className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </Container>
  );
};

export default UpdateTask;
