// src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('User registered:', response.data);
      // Handle successful registration (e.g., redirect or display success message)
    } catch (err) {
      console.error('Registration error:', err);
      // Check if err.response exists before accessing it
      if (err.response) {
        console.error('Error response data:', err.response.data);
      } else {
        console.error('Error message:', err.message);
        // Handle errors that don't have a response property
      }
      // Optionally, you can provide user feedback here
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={onChange}
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
