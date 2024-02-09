/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPrivate from "../../../Hooks/AxiosPrivate/useAxiosPrivate";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import BoardCard from "./BoardCard/BoardCard";
import Container from "../../../sharedComponents/Container";

const CreateBoard = () => {
    const [openModal, setOpenModal] = useState(false);

    const {user}=useContext(AuthContext)
    const loggedInUser=user?.email;

    const axiosPrivate=useAxiosPrivate();
    
    const {data: board, refetch}= useQuery({
        queryKey: ["board", user?.email],
        queryFn: async ()=>{
            const response = await axiosPrivate.get(`/get-board/${user?.email}`);
            console.log(response.data)
            return response.data;
        }
      })
console.log(board)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const type = formData.get("type");
        const details = formData.get("details");
    console.log(name,type,details)
       
          const response = await axiosPrivate.post("/create-board", {
           email:loggedInUser,
           name,
           details,
           type
          });
     console.log("Board Created successfully:", response.data);
     toast.success("Board Created successfully");
     refetch()
     e.currentTarget.reset();

    setOpenModal(false);
          
    

         
        
      };

  
    return (
    <Container>

<div>
        <div className="w-72 my-10 mx-auto flex items-center justify-center  col-span-3 md:col-span-12">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="bg-primeColor text-white p-2 rounded-lg"
                  >
                    Create new Board
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
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type project name" required/>
                            </div>
                            <div className="col-span-2">
    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Details</label>
    <textarea
        name="details"
        id="details"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-32 resize-none dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Type project details"
        required
    />
</div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">type</label>
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
                        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Create
                        </button>
                    </form>
                    </div>
                  </div>
                </div>
        
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
       {board && board.map((card:any,index:any)=><BoardCard key={index} card={card}></BoardCard>)}
        
       </div>
        <ToastContainer/>
                </div>
    </Container>
    );
};

export default CreateBoard;