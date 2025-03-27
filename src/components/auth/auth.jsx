import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin2" && password === "admin2") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/dash"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-start gap-[20px] py-[25px] px-[30px] rounded-[12px] border-[1px] border-[#DDDDDD]"
      >
        <h3 className="mb-[12px] text-[26px]">Login</h3>

        <input
          className="pl-[15px] rounded-[8px] w-[340px] h-[40px] border-[1px] border-[#DDDDDD]"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="pl-[15px] rounded-[8px] w-[340px] h-[40px] border-[1px] border-[#DDDDDD]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="py-[11px] px-[145px] rounded-[8px] bg-[#454545] text-white cursor-pointer"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
