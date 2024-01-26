import { MdOutlineVisibility } from "react-icons/md";

const SingleTask = ({
  task,
}: {
  task: { name: string; description: string; visibility: string };
}) => {

  const { name, description, visibility } = task;

  return (
    <div className="bg-slate-100 p-5  border rounded-xl m-2 w-full ">
      <h3 className=" font-bold">{name}</h3>
      <hr />
      <p className="text-slate-500">{description}</p>
      <p className="text-sm text-slate-400 mt-5 flex  items-center "> <MdOutlineVisibility className="text-2xl " /> {visibility}</p>
    </div>
  );
};

export default SingleTask;
