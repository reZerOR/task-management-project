import { ImCheckmark2 } from "react-icons/im";

const CallToAction = () => {
  return (
    <div>
      <div className="mx-auto bg-violet-700 text-white space-y-8 px-5 py-20">
        <h2 className="text-4xl text-center font-bold">
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
        <div className="text-center">
          <button className="px-20 py-4 bg-violet-950 text-white rounded-3xl">
            Go to TaskBoard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
