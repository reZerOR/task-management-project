import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://task-project-server-smoky.vercel.app",
  // baseURL: "https://task-project-server-smoky.vercel.app",
});
const useAxiosPrivate = () => {
  return axiosSecure;
};

export default useAxiosPrivate;





