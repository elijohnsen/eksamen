import { useState } from "react";
import axios from "axios";

const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false); // Indlæsningsstatus
  const [data, setData] = useState(null); // Data fra API'en
  const [error, setError] = useState(null); // Fejlstatus

  const makeRequest = async (
    url,
    method = "GET",
    headers = null,
    body = null,
  ) => {
    let response;
    setIsLoading(true); // Sæt indlæsning til sand, når anmodningen starter

    try {
      switch (method) {
        case "GET":
          response = await axios.get(url, { headers: headers }); // GET-anmodning
          break;
        case "POST":
          response = await axios.post(url, body, { headers: headers }); // POST-anmodning
          break;
        case "PUT":
          response = await axios.put(url, body, { headers: headers }); // PUT-anmodning
          break;
        case "PATCH":
          response = await axios.patch(url, body, { headers: headers }); // PATCH-anmodning
          break;
        case "DELETE":
          response = await axios.delete(url, { headers: headers }); // DELETE-anmodning
          break;
        default:
          throw new Error(
            "Ugyldig metode - Forventet GET, POST, PUT, PATCH eller DELETE",
          ); // Fejl hvis metoden ikke er genkendt
      }

      // Tjek om svaret er gyldigt
      if (response && response.data !== undefined) {
        setData(response.data); // Gem data fra svaret
        setError(null); // Nulstil fejlen, hvis vellykket
      } else {
        throw new Error("Ingen data modtaget eller svaret er tomt"); // Fejl hvis der ikke modtages data
      }
    } catch (error) {
      setData(null); // Nulstil data ved fejl
      setError(error?.message || "Ukendt fejl opstod"); // Gem fejlinformation
      console.log("Anmodningsfejl:", error); // Log fejlinformation
    } finally {
      setIsLoading(false); // Sæt til falsk, når anmodningen er færdig
    }

    return response; // Returner svarobjekt for at håndtere det eksternt
  };

  return { makeRequest, isLoading, data, error }; // Returner
};

export default useRequestData;
