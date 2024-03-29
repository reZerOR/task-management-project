/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import Header from "./Header";
import Task from "./Task";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";

type parameter = {
  status: string;
  tasks: any;
  setTasks: any;
  todo: any;
  progress: any;
  complete: any;
};

const Section = ({
  status,
  tasks,
  setTasks,
  todo,
  progress,
  complete,
}: parameter) => {
  const axiosPrivate = useAxiosPrivate();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => {
      addItemToSection(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "TODO";
  let bg = "bg-red-500";
  let taskToMap = todo;
  if (status === "progress") {
    text = "In Progress";
    bg = "bg-blue-500";
    taskToMap = progress;
  }
  if (status === "complete") {
    text = "Completed";
    bg = "bg-green-600";
    taskToMap = complete;
  }

  const addItemToSection = async (id: string) => {
    try {
      const response = await axiosPrivate.patch(`/updateStatusInBoard/${id}`, { status: status });

      if (response.status === 200) {
        setTasks((prev: any) => {
          const modifiedTask = prev.map((task: any) => {
            if (task._id === id) {
              return { ...task, status: status };
            }
            return task;
          });
          return modifiedTask;
        });

        const currentStatus = taskToMap.find((task: any) => task._id === id)?.status;

        console.log("Current Status:", currentStatus);
        console.log("New Status:", status);

        if (currentStatus !== status) {
          toast.success("Task status changed");
        }
      } else {
        throw new Error("Failed to update task status");
      }
    } catch (error) {
      console.error("Error updating task status:", error);

      // Show error toast only if the status has changed
      const currentStatus = taskToMap.find((task: any) => task._id === id)?.status;
      if (currentStatus !== status) {
        toast.error("Failed to update task status");
      }
    }
  };

  return (
    <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : ""}`}>
      <Header text={text} bg={bg} count={taskToMap.length}></Header>
      {taskToMap.length > 0 &&
        taskToMap.map((task: any) => (
          <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks}></Task>
        ))}
    </div>
  );
};

export default Section;
