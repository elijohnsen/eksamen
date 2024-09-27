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
    await makeRequest("http://localhost:4444/login/loggedin", "GET", {
      withCredentials: true,
    });

    if (data && data.login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    if (requestError) {
      console.error("Kunne ikke se, om du er logget ind:", requestError);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (username, password) => {
    await makeRequest(
      "http://localhost:4444/login/login",
      "POST",
      { withCredentials: true },
      { email: username, password },
    );

    if (data && data.login) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError("Kunne ikke logge ind. Prøv igen");
    }

    if (requestError) {
      setError("Der opstod en fejl :( prøv igen senere");
      console.error("kunne ikke logge ind:", requestError);
    }
  };

  const handleLogout = async () => {
    await makeRequest("http://localhost:4444/logout", "GET", {
      withCredentials: true,
    });

    if (data) {
      setIsLoggedIn(false);
    } else {
      console.error("Kunne ikke logge ud:", requestError);
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
    return <Navigate to="/login" />;
  }

  return children;
}
