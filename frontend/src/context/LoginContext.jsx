import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    {
      /* load bruger, hvis siden genopfrisket*/
    }
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const signIn = (identity, password) => {
    //* SIMULERET LOGIN
    if (identity === "admin" && password === "abc123") {
      {
        /* Gemmer brugeren ved login */
      }
      setUser(identity);
      localStorage.setItem("user", identity);
    } else {
      {
        /* Sikrer at bruger fjernes ved fejl*/
      }
      setUser(null);
      localStorage.removeItem("user");
    }
  };
  {
    /* Fjern bruger fra lokalhukommelse når der logges ud */
  }
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <LoginContext.Provider value={{ signIn, signOut, user }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
