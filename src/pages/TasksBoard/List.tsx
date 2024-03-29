/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react";

import Section from "./Section";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";
// import { useQuery } from "@tanstack/react-query";


interface TasksBoardProps {
  boardId:  string | undefined ;
  changed: number
}


const List: React.FC<TasksBoardProps> = ({ boardId, changed }) => {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [progress, setprogress] = useState([]);
  const [complete, setComplete] = useState([]);
  // const user=userContext.user
  const axiosPrivate=useAxiosPrivate()
  useEffect(()=>{
    async function fetchData() {
      // You can await here
      const response = await axiosPrivate.get(`/boards/${boardId}/tasks`);
      console.log(response);
      
      // ...
      setTasks(response.data.tasks)
    }
    fetchData();
  }, [changed, axiosPrivate, boardId])
  // console.log("boardId from list",boardId)
  // const { data: taskFromBoard=[], refetch } = useQuery({
  //   queryKey: ["taskFromBoard", boardId],
  //   queryFn: async () => {
  //     const res = await axiosPrivate.get(`/boards/${boardId}/tasks`);
  //     // console.log(res.data.tasks);
  //     setTasks(res.data.tasks);
  //     return res.data.tasks;
  //   },
  // });
//   console.log(taskFromBoard)
// // handleRefetch(refetch)
//   // const handleRefetch = ()=> {
//   //   refetch()
//   // }
//   refetch()
  
  // console.log("hello from list",taskFromBoard)
  useEffect(() => {
    const fTodo = tasks
      ? tasks.filter((task: any) => task.status === "todo")
      : [];
    const fProgress = tasks
      ? tasks.filter((task: any) => task.status === "progress")
      : [];
    const fComplete = tasks
      ? tasks.filter((task: any) => task.status === "complete")
      : [];
    setTodo(fTodo);
    setprogress(fProgress);
    setComplete(fComplete);
  }, [tasks]);
  const status = ["todo", "progress", "complete"];
  return (
    <div className="flex flex-col justify-center  lg:flex-row gap-16">
      {status.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todo={todo}
          progress={progress}
          complete={complete}
        ></Section>
      ))}
    </div>
  );
};

export default List;
