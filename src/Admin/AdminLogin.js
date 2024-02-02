// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>
         <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>
        <div><p className="text-center">Do not have account ? <Link to={'/AdminSignUp'}>SignUp</Link></p></div>
      </div>
    </div>
  );
};

export default AdminLogin;