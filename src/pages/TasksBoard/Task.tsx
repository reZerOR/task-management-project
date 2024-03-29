/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDrag } from "react-dnd";
import { BiSolidEdit } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

// Modal
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import CommentBox from "./TaskEditModal/CommentBox";
import DueDate from "./TaskEditModal/DueDate";
import FileUploader from "./TaskEditModal/FileUploader";
import useAxiosPrivate from "../../Hooks/AxiosPrivate/useAxiosPrivate";

type parameter = {
  task: any;
  tasks: any;
  setTasks: any;
  // onPress: () => void;
};

const Task = ({ task, setTasks }: parameter) => {
  // for modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const axiosPrivate=useAxiosPrivate()

  // console.log("task",task)
  // console.log("tasksss",tasks)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const handleRemove = (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const res = await axiosPrivate.delete(`/deletetaskFromBoard/${id}`)
        console.log("from task delete",res.data)
        
        if (res.data.modifiedCount > 0 ) {
          setTasks((prevTasks: any) =>
            prevTasks.filter((t: any) => t._id !== id)
          );
        } else {
          console.error("Failed to delete task");
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
       
      }
    });
  };

  return (
    <>
      <div
        onClick={onOpen}
        ref={drag}
        className={`relative border p-3 max-w-full
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
          <Link to={`/updatetaskInTheBoard/${task._id}`}>
            <button className="absolute top-8 right-1 text-slate-400 hover:text-black text-2xl">
              <BiSolidEdit></BiSolidEdit>
            </button>
          </Link>
        </div>
      </div>

      {/*Task Edit Modal  ====================================================================== */}

      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
         
          {/* Use onClose instead of onOpenChange */}
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1  ">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost w-full  text-3xl font-extrabold"
                    defaultValue={task.title}
                  />
                </ModalHeader>
                <ModalBody>
                  <div className="px-10 py-10">
                    <textarea
                      className="textarea w-full h-20 textarea-ghost text-2xl mb-10"
                      defaultValue={task.description}
                    ></textarea>

                    <hr />
                    <div className="flex justify-center mb-10">
                    <DueDate task={task} />
                    <FileUploader />
                    </div>
          
                    {/* comment feature start ===================== */}
                    <div className="flex items-center gap-5 bg-gray-200 px-5 pt-2 pb-10 rounded-md">
                      <CommentBox taskId ={task._id} />
                    </div>
                    {/* comment feature end ===================== */}
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default Task;
