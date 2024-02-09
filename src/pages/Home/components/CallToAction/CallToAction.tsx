import { ImCheckmark2 } from "react-icons/im";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      <div className="mx-auto bg-primeColor text-white space-y-8 px-5 py-32 mb-32">
        <h2 className="text-4xl text-center mb-10 font-bold">
          Plan, Collaborate, Deliver projects on time with <br /> all the right
          tools in one place.
        </h2>
        <div className="flex gap-3 justify-center">
          <div className="flex gap-2 ">
            <ImCheckmark2></ImCheckmark2>
            <p>No per user Free</p>
          </div>
          <div className="flex gap-2 ">
            <ImCheckmark2></ImCheckmark2>
            <p>No Credit Card Required</p>
          </div>
          <div className="flex gap-2 ">
            <ImCheckmark2></ImCheckmark2>
            <p>Cancel anytime</p>
          </div>
        </div>
        <div className="text-center pt-10">
          <Link
            to={"/tasksboard"}
            className="px-20 py-4 bg-secondColor text-white rounded-3xl"
          >
            Go to TaskBoard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
