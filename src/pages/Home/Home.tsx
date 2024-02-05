import Collaboration from "./Collaboration/Collaboration";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import AllFeatures from "./components/AllFeatures/AllFeatures";
import Banner from "./Banner/Banner";
import Reviews from "./components/Reviews/Reviews";
import CallToAction from "./components/CallToAction/CallToAction";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProjectManagement></ProjectManagement>
      <Collaboration></Collaboration>
      <AllFeatures></AllFeatures>
      <Reviews></Reviews>
      <FAQ></FAQ>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
