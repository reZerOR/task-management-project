import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import {motion }from 'framer-motion'

interface Package {
  packageType: string;
  price: number;
  board: number;
  package: string;
  // Define other properties if present in your JSON data
}

const Packages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const { setPackagePrice, setPackageInfo } = useContext(AuthContext);

  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);

  const handlePackagePrice = (price: number, perPackage: string) => {
    setPackagePrice(price);
    setPackageInfo(perPackage);
  };

  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl font-stylish tracking-wide font-extrabold text-gray-900 dark:text-white">
                Choose your preferable plan for business
              </h2>
              <p className="mb-5 text-black font-medium sm:text-xl dark:text-gray-400">
                Here are 3 types of packages system with different plans.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {packages?.map((perPackage, idx) => (
                <motion.div initial={{x :1000, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 0.3 * idx + 1}} key={idx} className={`${perPackage.packageType == "Premium Package" ? "bg-secondColor bg-opacity-50" : "bg-secondColor bg-opacity-20"} flex flex-col p-6 mx-auto max-w-lg  text-center text-gray-900 rounded-lg border border-secondColor shadow xl:p-8`}>
                  <h3 className="mb-4 text-2xl tracking-wide font-stylish font-semibold">
                    {perPackage.packageType}
                  </h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {perPackage.packageType} for your project or business
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-stylish font-extrabold">
                      ${perPackage.price}
                    </span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-primeColor dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Create {perPackage.board} boards</span>
                    </li>
                  </ul>

                  <div>
                    <Link to="/payment">
                      <button
                        className="text-white bg-primeColor hover:bg-AccentColor focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                        onClick={() =>
                          handlePackagePrice(
                            perPackage.price,
                            perPackage.package
                          )
                        }
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Packages;
