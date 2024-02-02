
import React from 'react';
const AdminPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300" bg-blue>
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">
              Maintain Users
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">
              Maintain Vendor
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">Dashboard
        </h2>
        {/* Add main content here */}
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
     
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">name</h2> 
        <div className="flex mb-4">
          <span className="text-gray-600">Location:</span>
          <span className="ml-2">vendorlocation</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update
        </button>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
     
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">name</h2> 
        <div className="flex mb-4">
          <span className="text-gray-600">Location:</span>
          <span className="ml-2">vendorlocation</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AdminPage;
