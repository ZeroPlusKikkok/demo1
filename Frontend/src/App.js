import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/profile/profile.js';
import Profile from './components/register/signin.js';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
