
import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-purple-300"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
          Sign Up
        </button>
        <div><p className="text-center">Do have account ? <Link to={'/Login'}>Login</Link></p></div>
      </div>
    </div>
  );
};

export default SignUp;