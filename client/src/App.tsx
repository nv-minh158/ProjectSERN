import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { path } from './ultils/constant';
import Home from './containers/Public/Home';
import Login from './containers/Public/Login';
import { Register } from './containers/Public';

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
