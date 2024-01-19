import Collaboration from "./Collaboration/Collaboration";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import AllFeatures from "./components/AllFeatures/AllFeatures";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProjectManagement></ProjectManagement>
      <Collaboration></Collaboration>
      <AllFeatures></AllFeatures>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
