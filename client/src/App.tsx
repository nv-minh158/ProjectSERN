import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import Home from "./containers/Public/Home";
import Login from "./containers/Public/Login";

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
