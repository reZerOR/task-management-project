/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import {  useParams,useLoaderData } from "react-router-dom";
import TasksBoard from "../../TasksBoard/TaskBoard";
import Board from "../Board";

const Singleboard = () => {
    const board=useLoaderData()
    const {user} = useContext(AuthContext);
  const { id } = useParams();
  console.log("board",board);
  const{details,name,email,type}=board



    return (
        <div>
           <div className="flex flex-col justify-center items-center my-10">
          <p className="text-2xl font-bold"> Name: {name}</p>
          <p className="text-xl text-default-500 font-medium"> Type: {type}</p>
          {type === "Team" && <Board />}
        </div>
            <TasksBoard></TasksBoard>
        </div>
    );
};

export default Singleboard;