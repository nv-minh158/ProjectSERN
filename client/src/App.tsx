import React from "react";
import "./App.css";
import { path } from "./ultils/constant";
import Home from "./containers/Public/Home";
import Login from "./containers/Public/Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
