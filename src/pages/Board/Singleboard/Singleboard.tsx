/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import TasksBoard from "../../TasksBoard/TaskBoard";
import Board from "../Board";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";

const Singleboard = () => {
  // const board = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const axiosPublic = useAxiosPublic();

  const { data: board = [] } = useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/singleboard/${id}`);
      console.log(res);
      return res.data;
    },
  });
  console.log(board);
  // const { user } = useContext(AuthContext);
  // const { id } = useParams();
  console.log("board", board);
  // const { details, name, email, type } = board;
  const { name, type } = board as { name: string; type: string };

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
