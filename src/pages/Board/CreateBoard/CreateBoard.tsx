/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import useAxiosPrivate from "../../../Hooks/AxiosPrivate/useAxiosPrivate";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import BoardCard from "./BoardCard/BoardCard";
import Container from "../../../sharedComponents/Container";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";
import { FcAddColumn, FcDataRecovery } from "react-icons/fc";

const CreateBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(AuthContext);
  const loggedInUser = user?.email;

  const axiosPrivate = useAxiosPublic();

  const { data: board, refetch } = useQuery({
    queryKey: ["board", user?.email],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/getBoard/${user?.email}`);
      console.log(response.data);
      return response.data;
    },
  });
  console.log(board);

  const { data: packageRemains, refetch: packageLimitRefetch } = useQuery({
    queryKey: ["packageRemains"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/getPackageLimit/${user?.email}`);
      // console.log("API response:", res.data); // Log the response
      // setUserEmail(res.data); // Assuming res.data is an array of User objects
      return res.data.currentPackageLimit || 0;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const type = formData.get("type");
    const details = formData.get("details");
    console.log(name, type, details);

    const response = await axiosPrivate.post("/createBoard", {
      email: loggedInUser,
      name,
      details,
      type,
    });
    console.log("Board Created successfully:", response.data);
    toast.success("Board Created successfully");
    refetch();

    const res = await axiosPrivate.patch(`/decreaseLimit/${user?.email}`);
    if (res?.data.modifiedCount > 0) {
      packageLimitRefetch();
    }

    e.currentTarget.reset();

    setOpenModal(false);
  };

  return (
    // <Container>
    <div className="bg-gradient-to-r from-secondary-50 to-primary-200 p-10  ">
      <Container>
        <div className="grid grid-cols-12 w-full gap-2 md:gap-0 min-h-screen rounded-xl ">
          {/* Left Side  */}
          <div
            className="col-span-12 md:col-span-3 border-r-2 flex flex-col justify-start items-center gap-2 max-h-screen rounded-xl"
            style={{
              background: "linear-gradient(to bottom, #B6C0FE, #4942E4)",
            }}
          >
            {/* User Details */}
            <div
              style={{
                borderImage:
                  "linear-gradient(to right, #5a67d8, #9f7aea, #ed64a6) 1",
                borderImageSlice: "1",
              }}
              className="flex flex-col items-center border-b-2 "
            >
              <div className="p-2 flex flex-col justify-center items-center text-center">
                <div className="avatar cursor-pointer">
                  
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Link to="/myProfile" >
                    <img src={user?.photoURL} alt="User Avatar" />
                    </Link>
                  </div>
               
                </div>
                <h3 className="text-md font-bold mt-2">{user?.displayName}</h3>
                <strong className="m2-5 text-sm">{user?.email}</strong>
                <p className="text-md font-medium">
                  Board Limit Left:{" "}
                  <span className="font-bold text-red-800 text-xl">
                    {packageRemains}
                  </span>
                </p>
              </div>
              {/* Limit button */}
              <div className="mb-2">
                <Link to="/increaseLimit">
                  <button className="bg-green-600 btn btn-sm border-0 p-2 rounded-md text-white flex gap-2 items-center">
                   <FcAddColumn className="text-xl "/> Increase Limit
                  </button>
                </Link>
              </div>
            </div>

            {/* Create Board Button */}
            <div className=" flex items-center justify-center">
              <button
                onClick={() => {
                  if (packageRemains < 1) {
                    toast("Insufficient package limit");
                  } else {
                    setOpenModal(true);
                  }
                }}
                className="bg-primeColor text-white p-2 rounded-lg flex items-center gap-2"
              >
               <FcDataRecovery className="text-xl"/> Create new Board
              </button>
              <div
                onClick={() => setOpenModal(false)}
                className={`fixed flex justify-center items-center z-[100] ${
                  openModal ? "visible opacity-1" : "invisible opacity-0"
                } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                    openModal
                      ? "opacity-1 duration-300 translate-y-0"
                      : "-translate-y-20 opacity-0 duration-150"
                  }`}
                >
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="p-4 md:p-5"
                  >
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Project Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type project name"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="details"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Project Details
                        </label>
                        <textarea
                          name="details"
                          id="details"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32 resize-none dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type project details"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="type"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          type
                        </label>
                        <select
                          id="type"
                          name="type"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected>Select Type</option>
                          <option value="personal">Personal</option>
                          <option value="Team">Team</option>
                        </select>
                      </div>
                    </div>
                    <button
                      disabled={packageRemains < 1}
                      type="submit"
                      className={`text-white inline-flex items-center ${
                        packageRemains < 1
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Right side  */}
          <div className="col-span-12 md:col-span-9 ml-5 ">
            <h3 className="text-xl mb-5 ">Your Bords: <span className="text-green-700 text-2xl font-bold"> {board?.length}</span></h3>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {board &&
              board.map((card: any, index: any) => (
                <BoardCard key={index} card={card}></BoardCard>
              ))}
          </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
    // </Container>
  );
};

export default CreateBoard;
