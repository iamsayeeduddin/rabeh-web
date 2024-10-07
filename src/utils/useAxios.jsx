import { useState } from "react";
import { useRouter } from "../i18n/routing";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const router = useRouter();

  const endpoint = async (url, method = "GET", data = null, isformData = false) => {
    setLoading(true);
    setError(null);
    url = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

    try {
      const config = {
        method,
        url,
        headers: {
          "Content-Type": isformData ? "multipart/form-data" : "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
        },
        ...(method === "POST" && { data }),
      };

      const res = await axios(config);

      setResponse(res);
    } catch (err) {
      if (err.status === 403) {
        toast.error("Your session has expired, please login again");
        localStorage.removeItem("user");
        router.push("/login");
        return;
      }
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { endpoint, loading, error, response };
};

export default useAxios;
