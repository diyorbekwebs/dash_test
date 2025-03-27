import React, { useEffect } from "react";
import Header from "../components/header/header";
import { Outlet, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
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
