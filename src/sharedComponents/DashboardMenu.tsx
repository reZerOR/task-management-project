import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div className="bg-black text-white py-10 h-screen">
      {/* brand logo */}
      <div className="flex items-center">
        <img className="w-16" src="/favicon.png" alt="logo" />
        <h2 className="text-4xl tracking-wider font-stylish">
          <span className="text-primeColor font-stylish ">Task</span>Flow
        </h2>
      </div>
      {/* menus for navigation */}
      <div className="mt-10 px-2">
        <ul className="menu">
          <Link className="menu-list" to={""}>
            Home
          </Link>
          <Link to={""}>Home</Link>
          <Link to={""}>Home</Link>
          <Link to={""}>Home</Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
