/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';

// import {  useState } from "react";
// import useAxiosPrivate, { axiosSecure } from "../../Hooks/AxiosPrivate/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
// import { useNavigate, useLocation } from "react-router";

const Board = () => {
  // const [UserEmail, setUserEmail] = useState<{ email: string }[]>([]);
  const [openModal, setOpenModal] = useState(false);
  // const [acceptanceStatus, setAcceptanceStatus] = useState("");

  const { user } = useContext(AuthContext);
  const loggedInUser = user?.email;

  const axiosPrivate = useAxiosPrivate();

  // const navigate = useNavigate();
  // const location = useLocation();

  const { data: userMail } = useQuery({
    queryKey: ["userMail"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/user`);
      console.log("API response:", res.data); // Log the response
      // setUserEmail(res.data); // Assuming res.data is an array of User objects
      return res.data;
    },
  });

  const filteredUserMail = userMail?.filter(
    (userData: { email: string }) => userData.email !== loggedInUser
  );

  // console.log("usr",User)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedMember = formData.get("member");
    console.log(name, selectedMember);
    try {
      // Make an API call to your backend
      const response = await axiosPrivate.post("/send-invitation", {
        from: loggedInUser, // Add the from email
        to: selectedMember,
        projectName: name,
      });

      console.log("Invitation sent successfully:", response.data);
      toast.success("Invitation sent successfully");
    } catch (error) {
      console.error("Error sending invitation:", error);
      toast.error("Error sending invitation");
    }
  };
  // const handleAcceptance = async (token: string) => {
  //   try {
  //     const response = await axiosPrivate.post("/accept-invitation", { token });
  //     setAcceptanceStatus(response.data.message);
  //     // Additional logic or redirection if needed
  //   } catch (error) {
  //     console.error("Error accepting invitation:", error);
  //     setAcceptanceStatus("Error accepting invitation");
  //   }
  // };
  // useEffect(() => {
  //   // Check if there is a token in the URL (query parameter)
  //   const params = new URLSearchParams(location.search);
  //   const invitationToken = params.get("token");

  //   if (invitationToken) {
  //     // Call handleAcceptance with the invitation token
  //     // handleAcceptance(invitationToken);
  //     // Remove the token from the URL to prevent it from being visible to the user
  //     navigate(location.pathname);
  //   }
  // }, [location.search, navigate]);
  return (
    <div>
      <div className="w-72 mx-auto flex items-center justify-center  col-span-3 md:col-span-12">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-primeColor text-white p-2 rounded-lg"
        >
          Add new member
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
            <form onSubmit={(e) => handleSubmit(e)} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="member"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Member
                  </label>
                  <select
                    id="member"
                    name="member"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Member</option>
                    {filteredUserMail &&
                      filteredUserMail.map(
                        (userData: { email: string }, index: number) => (
                          <option key={index} value={userData.email}>
                            {userData.email}
                          </option>
                        )
                      )}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
