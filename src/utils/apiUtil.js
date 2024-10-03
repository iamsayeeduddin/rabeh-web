import axios from "axios";

let endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
});

// function generateSignature(payload) {
//   return crypto.createHmac("sha256", process.env.NEXT_PUBLIC_SECRET_KEY).update(JSON.stringify(payload)).digest("hex");
// }

try {
  console.log("$$$", process.env.NEXT_PUBLIC_SECRET_KEY);
  const token = JSON.parse(localStorage?.getItem("user"))?.token;
  if (token) {
    endpoint.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        if (config.data) {
          // const signature = generateSignature(config.data);
          // config.headers["x-signature"] = signature;
          // console.log("$$$", JSON.stringify(signature));
        }

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
  console.log(err);
}

export default endpoint;
