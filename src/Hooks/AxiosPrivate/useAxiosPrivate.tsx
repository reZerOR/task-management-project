import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://task-project-server-smoky.vercel.app",
  // baseURL: "http://localhost:5000",
});
const useAxiosPrivate = () => {
  return axiosSecure;
};

export default useAxiosPrivate;
