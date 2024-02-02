import Container from "../../../../sharedComponents/Container";
import SectionTitle from "../../../../sharedComponents/SectionTitle";
import FeaturesDetails from "./FeaturesDetails";
const AllFeatures = () => {
  return (
    <div className="bg-white py-20 lg:py-28 ">
      <Container>
        <div className="">
          <SectionTitle
            subTitle=" One Tool"
            mainTitle="One Undefined Workplace for all things project"
          ></SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <FeaturesDetails
              title="Forms"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="Custom Fields"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>

            <FeaturesDetails
              title="Custom Roles"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="Multi-lingual"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="White labeling"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="Email-in"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="Daily agenda"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="Project Manager"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
            <FeaturesDetails
              title="File versioning"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                repellat ipsum, quasi enim natus accusamus quas magnam
                distinctio. Id deserunt quod, magnam hic facilis eaque sit
                tempora excepturi culpa minima?"
            ></FeaturesDetails>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllFeatures;
