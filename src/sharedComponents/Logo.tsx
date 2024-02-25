import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to={"/"} className="flex items-center">
            <img className="w-9" src="/favicon.png" alt="logo" />
            <h2 className="text-4xl tracking-wider font-stylish">
              <span className="text-primeColor font-stylish ">Task</span>Flow
            </h2>
          </Link>
        </div>
    );
};

export default Logo;