import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import category from '../utility/Category';
import axios from 'axios';

const AdminSignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const register = async () => {
    try {
      // Perform signup logic here using axios or your preferred method
      const response = await axios.post('/api/signup', {
        fullName,
        email,
        password,
        category: selectedCategory,
      });

      // Handle success, e.g., redirect to a new page or show a success message
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="Category">Category </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          onClick={register}
        >
          Sign Up
        </button>
        <div>
          <p className="text-center">
            Already have an account? <Link to={'/Login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
