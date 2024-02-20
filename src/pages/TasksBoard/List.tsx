/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react";

// import { AuthContext } from "../../Providers/AuthProvider";
import Section from "./Section";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";


interface TasksBoardProps {
  boardId: { id: string };
}


const List : React.FC<TasksBoardProps> = ({ boardId }) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [todo, setTodo] = useState<any[]>([]);
  const [progress, setprogress] = useState<any[]>([]);
  const [complete, setComplete] = useState<any[]>([]);
  // const userContext = useContext(AuthContext);
  // const user=userContext.user
  const axiosPrivate=useAxiosPrivate()

  const { data: taskFromBoard=[], refetch } = useQuery({
    queryKey: ["taskFromBoard", boardId],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/boards/${boardId}/tasks`);
      // console.log(res.data.tasks);
      setTasks(res.data.tasks);  
      return res.data.tasks;
    },
  });
  refetch()
  console.log("hello from list",taskFromBoard)
  // console.log(tasks)

  useEffect(() => {
    // console.log('Tasks:', tasks);

  // Ensure tasks is an array
  // if (!Array.isArray(tasks)) {
  //   console.error('Tasks is not an array:', tasks);
  //   return;
  // }
  
    const fTodo = tasks ? tasks.filter((task: any) => task.status === "todo") : [];
    const fProgress = tasks ? tasks.filter((task: any) => task.status === "progress") : [];
    const fComplete = tasks ? tasks.filter((task: any) => task.status === "complete") : [];
  
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
