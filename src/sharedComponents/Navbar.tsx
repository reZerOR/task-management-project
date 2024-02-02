import { useContext, useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const userContext = useContext(AuthContext);
  console.log(userContext.user)
  const [visable, setVisable] = useState(false);
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
  return (
    <div className="bg-secondColor">
      <Container>
        <nav className="flex items-center justify-between">
          {/* logo text */}
          <div>
            <h2 style={{}} className="text-4xl font-stylish py-10 text-text">
              Taskflow
            </h2>
          </div>
          {/* visable in large devices */}
          <div className="lg:flex gap-6 items-center hidden">
            <ul className="flex text-lg font-medium text-primeColor gap-6">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/tasksboard"}>
                <li>TaskBoard</li>
                
              </NavLink>
              <NavLink to={"/myProfile"}>
                <li>My Profile</li>
                
              </NavLink>
            </ul>

            <div className="text-lg font-medium space-x-6 py-10">
              {userContext.user?.displayName !== "Unknown" &&
                userContext.user?.displayName !== null ? (
                <button
                  onClick={handleLogout}
                  className="px-10 py-4 bg-primeColor text-white rounded-lg border-2 border-primeColor"
                >
                  Log Out
                </button>
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
              className="mt-10 absolute bg-primeColor text-white w-60 md:w-96 right-0 p-4 space-y-4 rounded-lg"
            >
              <motion.li variants={itemVarients}>Home</motion.li>
              <motion.li variants={itemVarients}>
                <Link to={"/tasksboard"}>TaskBoard</Link>
              </motion.li>

              {userContext.user?.displayName !== "Unknown" &&
                userContext.user?.displayName !== null ? (

           
                  

                  <motion.button
                    onClick={handleLogout}
                    variants={itemVarients}
                    className="px-10 py-4 bg-AccentColor text-white rounded-lg border-2 border-AccentColor"
                  >
                    Log Out
                  </motion.button>
               


              ) : (
                <>
                  <motion.button
                    variants={itemVarients}
                    className="px-10 py-4 border-2 mr-4 border-secondColor rounded-lg text-secondColor"
                  >
                    Log in
                  </motion.button>
                  <motion.button
                    variants={itemVarients}
                    className="px-10 py-4 bg-AccentColor text-white rounded-lg border-2 border-AccentColor"
                  >
                    Sign Up
                  </motion.button>



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
