
import TitleHelmet from "../../sharedComponents/TitleHelmet";
import AllFeatures from "./components/AllFeatures/AllFeatures";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <TitleHelmet title="Home"></TitleHelmet>
      <Banner></Banner>
      <AllFeatures></AllFeatures>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
