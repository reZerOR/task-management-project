import { useContext, useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useUser from "../Hooks/IsUser/useUser";
import {FcSms, FcPlus } from "react-icons/fc";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import useUserInfo from "../Hooks/UserInfo/useUserInfo";

const Navbar = () => {
  const userContext = useContext(AuthContext);
  const {user} = useContext(AuthContext)
  const SingleUser = useUser();
  const [userInfo] = useUserInfo();

  const [visable, setVisable] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    userContext.logOut();
  };
  const itemVarients = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.5 },
    },
  };

  const handleToMyProfile = () => {
    navigate("/myProfile");
  };
 
  return (
    <div className="bg-secondColor bg-opacity-60 ">
      <Container>
        <nav className="flex items-center justify-between">
          {/* logo text */}
          <Link to={"/"} className="flex items-center">
            <img className="w-9" src="/favicon.png" alt="logo" />
            <h2 className="text-4xl tracking-wider font-stylish">
              <span className="text-primeColor font-stylish ">Task</span>Flow
            </h2>
          </Link>
          {/* visable in large devices */}
          <div className="lg:flex gap-6 items-center hidden">
            <ul className="flex text-lg font-medium text-primeColor gap-6">

              {SingleUser && (
                <>
                  {/* <NavLink to={"/tasksboard"}>
                    <li>TaskBoard</li>
                  </NavLink> */}
                  {/* <NavLink to={"/myProfile"}>
                    <li>My Profile</li>
                  </NavLink> */}

                  <NavLink to={"/createboard"} className="flex items-center gap-2 btn  ">
                   <FcPlus className="text-2xl text-primeColor" /> <li>New Board</li>

                  </NavLink>
                  <NavLink to={"/support"} className="flex items-center gap-2 btn ">
                    <FcSms className="text-2xl"/> <li>Support</li>
                  </NavLink>
                </>
              )}
            </ul>

            <div className="text-lg font-medium space-x-6 py-5">
              {SingleUser ? (
                <>
                  {/* <button
                    onClick={handleLogout}
                    className="px-10 py-4 bg-primeColor text-white rounded-lg border-2 border-primeColor"
                  >
                    Log Out
                  </button> */}
                  <div className="flex items-center gap-4">
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <Avatar
                          isBordered
                          as="button"
                          className="transition-transform h-[50px] w-[50px]"
                          src={userInfo?.photoURL}
                        />
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          {/* <p className="font-semibold">Signed in as</p>
                          <p className="font-semibold">
                            {userContext?.user?.email}
                          </p> */}

<div
              style={{
                borderImage:
                  "linear-gradient(to right, #5a67d8, #9f7aea, #ed64a6) 1",
                borderImageSlice: "1",
              }}
              className="flex flex-col items-center border-b-2 "
            >
              <div className="p-2 flex flex-col justify-center items-center text-center">
                <div className="avatar cursor-pointer">
                </div>
                <h3 className="text-md font-bold mt-2">{user?.displayName}</h3>
                <strong className="m2-5 text-sm">{user?.email}</strong>
              </div>
             
            </div>
                        </DropdownItem>

                        <DropdownItem
                          onClick={handleToMyProfile}
                          key="myProfile"
                          className="btn btn-sm mt-5 border-0 bg-primeColor text-white font-bold"
                        >
                          My Profile
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          key="logout"
                          color="danger"
                          className="btn btn-sm mt-2 border-0 bg-red-500 text-white font-bold"
                        >
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="px-10 py-4 border-2 border-primeColor rounded-lg text-primeColor">
                      Log in
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="px-10 py-4 bg-primeColor text-white rounded-lg border-2 border-primeColor">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* visable in mobile and tablets */}
          <motion.div
            initial={false}
            animate={visable ? "open" : "closed"}
            className="relative lg:hidden py-6"
          >
            <Hamburger toggled={visable} toggle={setVisable} />
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.5,
                    staggerChildren: 0.1,
                  },
                },
                closed: {
                  clipPath: "inset(0% 10% 100% 90% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className="mt-10 absolute z-50 bg-primeColor text-white w-60  right-0 p-4 space-y-4 rounded-lg"
            >
              {SingleUser ? (
                <>
                  <motion.li variants={itemVarients}>
                    <Link to={"/createboard"}>Boards</Link>
                  </motion.li>
                  <motion.li variants={itemVarients}>
                    <Link to={"/myProfile"}>My Profile</Link>
                  </motion.li>
                  <motion.li variants={itemVarients}>
                    <Link to={"/support"}>Support</Link>
                  </motion.li>
                  <motion.button
                    onClick={handleLogout}
                    variants={itemVarients}
                    className="px-10 py-4 bg-AccentColor text-white rounded-lg border-2 border-AccentColor"
                  >
                    Log Out
                  </motion.button>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="block">
                    <motion.button
                      variants={itemVarients}
                      className="px-10 py-4 border-2 mr-4 border-secondColor rounded-lg text-secondColor"
                    >
                      Log in
                    </motion.button>
                  </Link>
                  <Link to={"/register"} className="block">
                    <motion.button
                      variants={itemVarients}
                      className="px-10 py-4 bg-AccentColor text-white rounded-lg border-2 border-AccentColor"
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </>
              )}
            </motion.ul>
          </motion.div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
