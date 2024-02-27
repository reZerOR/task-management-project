import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Task {
  _id: string;
  dueDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DueDate: React.FC<{ task: Task }> = ({ task }) => {
  const [dueDate, setDueDate] = useState("");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  function calculateTimeLeft(task: { dueDate: string }): TimeLeft {
    const difference = +new Date(task.dueDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  }
 
  useEffect(() => {
    const timer = setTimeout(() => {
      return setTimeLeft(calculateTimeLeft(task));
    }, 1000);
  
    return () => clearTimeout(timer);
  });
  

  const handleDueDateUpdate = async () => {
    try {
      await axios.patch(`https://task-project-server-smoky.vercel.app/dueDate/${task._id}`, {
        dueDate: dueDate,
      });
      toast.success("Due date updated successfully");
    } catch (error) {
      console.error("Error updating due date:", error);
      alert("Failed to update due date. Please try again.");
    }
  };

  return (
    <div className="flex flex-col mb-4 w-1/2">
      <label htmlFor="dueDate" className="font-bold mb-1">
       <p> <span className="text-slate-500 ">Due Date: </span>{timeLeft.days} <span className=" text-gray-500">days</span> {timeLeft.hours} <span className=" text-gray-500">hours</span> {timeLeft.minutes} <span className=" text-gray-500">minutes</span> {timeLeft.seconds} <span className=" text-gray-500">seconds</span> </p>
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
          className="px-4 py-2 bg-primeColor text-white rounded hover:bg-blue-600"
          onClick={handleDueDateUpdate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DueDate;


{/*  */}
