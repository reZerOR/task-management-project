/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDrag } from "react-dnd";
import { BiSolidEdit } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type parameter = {
  task: any;
  tasks: any;
  setTasks: any;
};

const Task = ({ task, setTasks }: parameter) => {
  // console.log("task",task)
  // console.log("tasksss",tasks)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const handleRemove = async (id: string) => {
    console.log(id);
    const res = await fetch(`http://localhost:5000/deletetask/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      // Remove the deleted task from the state
      setTasks((prevTasks: any) => prevTasks.filter((t: any) => t._id !== id));
    } else {
      console.error("Failed to delete task");
    }

    toast.success("Task Deleted Successfully");
  };

  return (
    <div
      ref={drag}
      className={`relative border p-3
     rounded-lg my-2 space-y-4 bg-slate-100
    cursor-grab shadow-md ${isDragging ? "opacity-25" : "opacity-100"}`}
    >
      <p className="text-xl font-stylish">{task.title}</p>
      <p>{task.description}</p>
      <div className="flex justify-between">
        <div>visibility: {task.visibility}</div>
        <div>{task.deadline}</div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(task._id)}
          className="absolute top-1 right-1 text-slate-400 hover:text-black text-2xl"
        >
          <CiCircleRemove></CiCircleRemove>
        </button>
      </div>
      <div>
        <Link to={`/updatetask/${task._id}`}>
          <button className="absolute top-8 right-1 text-slate-400 hover:text-black text-2xl">
            <BiSolidEdit></BiSolidEdit>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Task;
