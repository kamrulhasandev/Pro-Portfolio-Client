"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api",
});
const useAxiosSecure = () => {
  const router = useRouter();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accessToken");

      config.headers.authorization = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await localStorage.removeItem("accessToken");
        router.push("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
