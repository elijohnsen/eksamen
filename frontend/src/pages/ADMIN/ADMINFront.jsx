import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminFront = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("http://localhost:5023/loggedin", {
        withCredentials: true, 
      });

      if (response.status === 200 && response.data.login) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Fejl ved kontrol af login-status:", error);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5023/login", {
        email: username, 
        password,
      }, {
        withCredentials: true, 
      });

      if (response.status === 200) {
        console.log("Login succesfuld", response.data);
        setIsLoggedIn(true);
        setError(null);
      } else {
        setError("Login mislykkedes. Prøv igen.");
      }
    } catch (error) {
      setError("Der opstod en fejl. Prøv venligst igen senere.");
      console.error("Fejl ved login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5023/logout", {
        withCredentials: true, 
      });

      if (response.status === 200) {
        console.log("Logout succesfuld");
        setIsLoggedIn(false);
      } else {
        console.log("Logout mislykkedes", response.data.message);
      }
    } catch (error) {
      console.error("Fejl under logout:", error);
    }
  };

  return (
    <section className="flex items-center justify-center h-[60vh]">
      <div className="w-2/3 md:w-1/3 lg:w-2/6 xl:w-1/6 p-8  text-center flex flex-col items-center bg-vhgrey border-2 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">{isLoggedIn ? "Admin Dashboard" : "Admin login"}</h2>
        {isLoggedIn ? (
          <div>
            <p>Du er logget ind.</p>
            <button
              className="mx-auto bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogout}
            >
              Log ud
            </button>
          </div>
        ) : (
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Brugernavn
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Brugernavn her"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Kodeord
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-xs italic mb-4">{error}</p>
            )}
            <div className="flex items-center justify-between">
              <button
                className="mx-auto bg-vhgreen hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log ind
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default AdminFront;
