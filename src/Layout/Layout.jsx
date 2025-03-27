import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "../components/header/header";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (!username || !password) {
      navigate("/"); 
    }
  }, [navigate]);

  return (
    <div className="container flex">
      <Header />  
      <Outlet />
    </div>
  );
};

export default Layout;
