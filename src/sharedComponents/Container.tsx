const Container = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="max-w-[1920px] mx-auto 2xl:px-[215px] md:px-4 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
