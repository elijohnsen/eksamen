import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { signIn, user } = useContext(LoginContext);

  React.useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "abc123") {
      signIn(username, password);
      setError(null);
      navigate("/admin");
    } else {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <section className="flex h-[60vh] items-center justify-center">
      <div className="bg-vhgrey flex w-2/3 flex-col items-center rounded border-2 p-8 text-center shadow-md md:w-1/3 lg:w-2/6 xl:w-1/6">
        <h2 className="mb-6 text-2xl font-bold">Admin login</h2>
        <form className="w-full" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="mb-2 block text-left text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-left text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="mb-4 text-xs italic text-red-500">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline mx-auto rounded bg-green-400 px-4 py-2 font-bold text-white hover:bg-green-800 focus:outline-none"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
