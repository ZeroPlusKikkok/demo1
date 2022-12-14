import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/register/Signin.js';
import Register from './components/register/Register.js';
import Profile from './components/profile/Profile.js';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
