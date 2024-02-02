import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><Link to={'/'}>Event Management</Link></div>
        <ul className="flex space-x-4">
        <li className="text-white"><Link to={'/UserLogin'}>UserLogin</Link></li>
        <li className="text-white"><Link to={'/VendorLogin'}>VendorLogin</Link></li>
          <li className="text-white"><Link to={'/AdminLogin'}>AdminLogin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
