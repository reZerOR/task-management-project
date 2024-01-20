import bannerImg from "../../assets/Home/business-4051773_1280.jpg";
import Container from "../../sharedComponents/Container";
import Stars from "./Stars";

const Banner = () => {
  const gradientBorder = {
    borderImage: "linear-gradient(to right, #5a67d8, #9f7aea, #ed64a6) 1",
    borderImageSlice: "1",
  };

  return (
    <div className="bg-secondColor bg-opacity-60">
      <Container>
        <div className=" flex flex-col lg:flex-row py-10 min-h-[calc(100vh-126px)] justify-between gap-10 items-center">
          {/* Left side */}
          <div className="">
            {/* reviews */}
            <div className="flex justify-between flex-wrap gap-3 my-6">
              <Stars messege="'This tools is awesome and I love it.'"></Stars>
              <Stars messege="'This tools is awesome'"></Stars>
              <Stars messege="'This tools is awesome'"></Stars>
            </div>

            <h1 className=" text-6xl xl:text-8xl font-stylish text-gray-800  leading-snug">
              Unlock the power of teamwork with{" "}
              <span className=" text-primeColor font-stylish">TaskFlow</span>
            </h1>

            <div className="mt-6">
              <p>
                <strong style={gradientBorder} className="border-b-2 text-lg">
                  Earlier:
                </strong>{" "}
                Embrace the power of productivity. Yesterday is gone, but with
                TaskFlow, every 'Earlier' paves the way for tomorrow's success.
              </p>
              <p className="mt-5">
                <strong style={gradientBorder} className="border-b-2 text-lg">
                  With TaskFlow's:
                </strong>{" "}
                Empower your team with TaskFlow: where 'Earlier' is a stepping
                stone and every task is a stride towards seamless collaboration
                and project success.
              </p>
            </div>

            <div className="mt-6">
              <button className="text-lg font-medium rounded-lg px-8 h-16 before:block before:absolute hover:before:bg-AccentColor before:w-0 before:h-0 hover:before:h-20 hover:before:w-full before:-bottom-2 before:right-0 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-AccentColor bg-transparent border-2 overflow-hidden border-AccentColor duration-500">
                Get Started
              </button>
            </div>
          </div>

          {/* Right side  */}
          <div className="max-w-[780px]">
            <img src={bannerImg} alt="banner Image  " className="rounded-xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
