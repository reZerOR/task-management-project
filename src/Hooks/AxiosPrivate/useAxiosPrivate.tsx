import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://task-project-server-smoky.vercel.app",
});
const useAxiosPrivate = () => {
  return axiosSecure;
};

export default useAxiosPrivate;





