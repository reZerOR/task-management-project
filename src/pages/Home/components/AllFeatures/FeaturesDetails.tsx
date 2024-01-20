const FeaturesDetails = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h2 className="text-2xl inline-block border-l-4 mb-4 pl-3 border-primeColor text-neutral-900 tracking-wide font-stylish font-semibold">
        {title}
      </h2>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default FeaturesDetails;
