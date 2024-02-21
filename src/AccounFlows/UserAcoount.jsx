import React, { useState } from 'react';
import { FaPenToSquare } from "react-icons/fa6";


const UserAccount = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********', // Displaying only as placeholder
    address: '123 Main St, City, Country',
    dob: '1990-01-01', // Date of birth
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleNameChange = () => {
    const newName = prompt('Enter your new name:', userData.name);
    if (newName !== null) {
      setUserData({ ...userData, name: newName });
    }
  };

  const handleFieldChange = (field) => {
    const newValue = prompt(`Enter your new ${field}:`, userData[field]);
    if (newValue !== null) {
      setUserData({ ...userData, [field]: newValue });
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <div className="flex items-center">
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            readOnly
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="button"
            className="flex items-center gap-1 ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={handleNameChange}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <div className="flex items-center">
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            readOnly
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="button"
            className="flex items-center gap-1 ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={() => handleFieldChange('email')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
        <div className="flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            readOnly
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="button"
            className="flex items-center gap-1 ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={() => handleFieldChange('password')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
        <div className="flex items-center">
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            readOnly
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="button"
            className="flex items-center gap-1 ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={() => handleFieldChange('address')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
        <div className="flex items-center">
          <input
            type="date"
            id="dob"
            name="dob"
            value={userData.dob}
            readOnly
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="button"
            className="flex items-center gap-1 ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={() => handleFieldChange('dob')}
          >
           <FaPenToSquare /> Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
