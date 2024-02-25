import error404 from '../../assets/Error/error.json'
import Lottie from "lottie-react";
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
    return (
        <div className='flex flex-col  justify-center items-center w-10/12 mx-auto'>
            
            <Lottie animationData={error404} loop></Lottie>
            <NavLink className='btn bg-primeColor text-white font-bold hover:bg-blue-700 ' to={'/'} > <span className='text-white'> <FaArrowLeft /> </span>  Back to home </NavLink>
            
        </div>
    );
};

export default Error;