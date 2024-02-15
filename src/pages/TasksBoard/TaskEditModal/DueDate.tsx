import {useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Task {
  _id: string;
  dueDate: string
}
const DueDate: React.FC<{ task: Task }> = ({ task }) => {

  const [dueDate, setDueDate] = useState("");

 
  const handleDueDateUpdate = async () => {
    try {
      await axios.patch(`http://localhost:5000/dueDate/${task._id}`, {
        dueDate: dueDate,
      });
      toast.success("Due date updated successfully");
    } catch (error) {
      console.error("Error updating due date:", error);
      alert("Failed to update due date. Please try again.");
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="dueDate" className="font-bold mb-1">
        <span className=" text-slate-500 text-xl">Due Date:</span> {new Date(task.dueDate).toLocaleString()}
      </label>
      <div className="flex items-center">
        <input
          type="datetime-local"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 border rounded mr-2"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleDueDateUpdate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DueDate;
