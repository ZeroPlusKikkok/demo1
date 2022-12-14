import React from 'react';
import { useState } from 'react';

function Signin() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password
    });

    const options = {
      method: 'POST',
      headers: {
        cookie: 'connect.sid=s%253Alq6qRBUJWoYXCa43T45Y4XR8fT0yvBaa.rFPuV4Q6IsW0GlvImmru%252BaH4GRlr1ByujburmO38YM8',
        'Content-Type': 'application/json'
      },
      body: raw
    };
    
    fetch('http://localhost:3000/api/auth/login', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.error(err));
    console.log(inputs);
  }

  return (
   <div>
    <form onSubmit={handleSubmit}>
      <label>Username :
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Password :
      <input 
        type="password" 
        name="password" 
        value={inputs.password || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
    </form>
   </div>
  )
}

export default Signin;
