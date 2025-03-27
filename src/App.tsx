import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout"; 
import Manage from "./components/Manage Product/Manage";
import Create from "./components/Create Product/Create";
import Auth from "./components/auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="/dash" element={<Layout />}>
          <Route index element={<Manage />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
