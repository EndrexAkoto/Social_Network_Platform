// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      console.log('User logged in:', response.data);
      localStorage.setItem('token', response.data.token); // Store JWT token
      // Handle successful login (e.g., redirect or display success message)
    } catch (err) {
      console.error('Login error:', err.response.data);
      // Handle errors (e.g., display error message)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={onChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
