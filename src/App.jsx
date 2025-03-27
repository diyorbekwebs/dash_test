import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/auth";
import Layout from "./Layout/Layout";
import Create from "./components/Create Product/Create";
import Manage from "./components/Manage Product/Manage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dash" element={<Layout />}>
        <Route index element={<Create />} />
        <Route path="manage" element={<Manage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}
