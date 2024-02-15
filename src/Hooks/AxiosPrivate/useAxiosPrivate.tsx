import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "http://localhost:5000",
});
const useAxiosPrivate = () => {
  return axiosSecure;
};

export default useAxiosPrivate;
