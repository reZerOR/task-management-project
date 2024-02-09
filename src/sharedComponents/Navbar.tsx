import { useContext, useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useUser from "../Hooks/IsUser/useUser";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import useUserInfo from "../Hooks/UserInfo/useUserInfo";

const Navbar = () => {
  const userContext = useContext(AuthContext);
  const user = useUser();
  const [userInfo, refetch]= useUserInfo();
  
  const [visable, setVisable] = useState(false);

  const navigate= useNavigate();

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

  const handleToMyProfile=()=>{
    navigate('/myProfile');
  }
  return (
    <div className="bg-secondColor  bg-opacity-60 ">
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

      

              <NavLink to={"/createboard"}>
                <li>New Board</li>
                
              </NavLink>

              {user && (
                <>
                  <NavLink to={"/tasksboard"}>
                    <li>TaskBoard</li>
                  </NavLink>
                  {/* <NavLink to={"/myProfile"}>
                    <li>My Profile</li>
                  </NavLink> */}
                </>
              )}

            </ul>

            <div className="text-lg font-medium space-x-6 py-5">
              {user ? (
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
                          <p className="font-semibold">Signed in as</p>
                          <p className="font-semibold">{userContext?.user?.email}</p>
                        </DropdownItem>
                        
                        
                        <DropdownItem onClick={handleToMyProfile}  key="myProfile">
                          My Profile
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout} key="logout" color="danger">
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
            className="relative lg:hidden"
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
              {user ? (
                <>
                  <motion.li variants={itemVarients}>
                    <Link to={"/tasksboard"}>TaskBoard</Link>
                  </motion.li>
                  <motion.li variants={itemVarients}>
                    <Link to={"/myProfile"}>My Profile</Link>
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
