import React, { createContext, useState, useEffect, useContext } from "react";
import useRequestData from "./useRequestData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const {
    makeRequest,
    isLoading,
    data,
    error: requestError,
  } = useRequestData();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    await makeRequest("http://localhost:5023/loggedin", "GET", {
      withCredentials: true,
    });

    if (data && data.login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    if (requestError) {
      console.error("Error checking login status:", requestError);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (username, password) => {
    await makeRequest(
      "http://localhost:5023/login",
      "POST",
      { withCredentials: true },
      { email: username, password },
    );

    if (data && data.login) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError("Login failed. Please try again.");
    }

    if (requestError) {
      setError("There was an error. Please try again later.");
      console.error("Error during login:", requestError);
    }
  };

  const handleLogout = async () => {
    await makeRequest("http://localhost:5023/logout", "GET", {
      withCredentials: true,
    });

    if (data) {
      setIsLoggedIn(false);
    } else {
      console.error("Logout failed:", requestError);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, error, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}
