const SectionTitle = ({
  subTitle,
  mainTitle,
}: {
  subTitle: string;
  mainTitle: string;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-center text-primeColor font-bold uppercase tracking-widest text-base mb-2">
        {subTitle}
      </h2>
      <h1 className="text-center font-stylish text-gray-800 tracking-wide font-bold text-3xl md:text-5xl mb-5">
        {mainTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
