import axios from "axios";
require("dotenv").config();
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000",
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
