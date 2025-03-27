import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "john32" && password === "12345678j") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/dash");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-start gap-5 p-6 rounded-lg border border-gray-300 w-full max-w-sm shadow-lg bg-white"
      >
        <h3 className="text-2xl font-semibold mb-2">Login</h3>

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-800 transition-all"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
