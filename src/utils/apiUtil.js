import axios from "axios";

let endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
});

try {
  const token = JSON.parse(localStorage?.getItem("user"))?.token;
  if (token) {
    endpoint.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
} catch (err) {
  if (err.status === 403) {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  console.log(err.status, "api");
}

export default endpoint;
