import { useState } from "react";
import axios from "axios";
{
  /* Hook er fra en tidligere opgave, der er gennemgået på klassen */
}
const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false); // vores initialværdier i useState
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const makeRequest = async (
    url,
    method = "GET",
    headers = null,
    body = null,
  ) => {
    let response;
    setIsLoading(true);

    try {
      if (method === "GET") {
        response = await axios.get(url, { headers: headers });
      } else if (method === "POST") {
        response = await axios.post(url, body, { headers: headers });
      } else if (method === "PUT") {
        response = await axios.put(url, body, { headers: headers });
      } else if (method === "PATCH") {
        response = await axios.patch(url, body, { headers: headers });
      } else if (method === "DELETE") {
        response = await axios.delete(url);
      } else {
        throw new Error(
          "Invalid method - Expected GET, POST, PUT, PATCH, or DELETE",
        );
      }

      if (response && response.data !== undefined) {
        setData(response.data);
        setError(false);
      } else {
        setError(true);
        setData(null);
        throw new Error("Error: No data received or response is empty");
      }
    } catch (error) {
      setData(null);
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { makeRequest, isLoading, data, error };
};

export default useRequestData;
