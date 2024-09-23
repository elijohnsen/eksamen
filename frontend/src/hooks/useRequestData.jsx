import { useState } from 'react';
import axios from 'axios';

const useRequestData = () => {
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [data, setData] = useState(null); // Data from the API
    const [error, setError] = useState(null); // Error state

    const makeRequest = async (url, method = "GET", headers = null, body = null) => {
        let response;
        setIsLoading(true); // Set loading to true when the request starts

        try {
            switch (method) {
                case "GET":
                    response = await axios.get(url, { headers: headers }); // GET request
                    break;
                case "POST":
                    response = await axios.post(url, body, { headers: headers }); // POST request
                    break;
                case "PUT":
                    response = await axios.put(url, body, { headers: headers }); // PUT request
                    break;
                case "PATCH":
                    response = await axios.patch(url, body, { headers: headers }); // PATCH request
                    break;
                case "DELETE":
                    response = await axios.delete(url, { headers: headers }); // DELETE request
                    break;
                default:
                    throw new Error("Invalid method - Expected GET, POST, PUT, PATCH, or DELETE"); // Error if method is unrecognized
            }

            // Check if the response is valid
            if (response && response.data !== undefined) {
                setData(response.data); // Store the data from the response
                setError(null);  // Reset the error if the request is successful
            } else {
                throw new Error("No data received or response is empty"); // Error if no data is received
            }

        } catch (error) {
            setData(null); // Reset data on error
            setError(error?.message || "Unknown error occurred"); // Store error message
            console.log("Request Error:", error); // Log error information
        } finally {
            setIsLoading(false); // Set loading to false when the request is complete
        }

        return response;  // Return the actual response object to handle it externally
    };

    return { makeRequest, isLoading, data, error }; // Return functions and states
};

export default useRequestData;
