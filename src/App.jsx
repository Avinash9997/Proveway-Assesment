import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Order from "./Components/Order";
// import PrivateRoute from './components/Private'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
