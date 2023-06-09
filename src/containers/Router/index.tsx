import React, { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../views/Dashboard";
import Books from "../../views/Books";
import Login from '../../views/Auth/Login'
import Signup from '../../views/Auth/Signup'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:listKey" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
