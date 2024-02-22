import React, { useState } from 'react';
import { FaPenToSquare } from "react-icons/fa6";


const UserAccount = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********', // Displaying only as placeholder
    address: '123 Main St, City, Country',
    dob: '1990-01-01'
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
    <div className="mt-24 mx-16">
      <h1 className="text-3xl font-trade font-bold mb-4 ">Account</h1>
    <div className="mt-4 shadow-md border-2 rounded-2xl shadow-gray-300 p-5">
      <div className="mb-4">
        <label htmlFor="name" className="block -mb-2 text-sm font-lighter text-gray-500">Name</label>
        <div className="flex items-center">
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            readOnly
            className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts"
          />
          <button
            type="button"
            className="flex border-2 border-mintGreen items-center gap-1 ml-2 px-4 py-2 hover:bg-mintGreen text-blackGreen text-sm rounded-md focus:outline-none focus:bg-mintGreen"
            onClick={handleNameChange}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block -mb-1 text-sm font-lighter text-gray-500">Email</label>
        <div className="flex items-center">
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            readOnly
            className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts"
          />
          <button
            type="button"
            className="border-2 border-mintGreen flex items-center gap-1 ml-2 px-4 py-2 hover:bg-mintGreen text-blackGreen text-sm rounded-lg  focus:outline-none focus:bg-indigo-600"
            onClick={() => handleFieldChange('email')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block -mb-2 text-sm font-lighter text-gray-500">Password</label>
        <div className="flex gap-3 items-center">
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            readOnly
            className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts text-2xl"
          />
          <button
            type="button"
            className="border-2 border-mintGreen flex items-center gap-1  px-4 py-2 text-blackGreen text-sm rounded-md hover:bg-mintGreen"
            onClick={() => handleFieldChange('password')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block -mb-2 text-sm font-lighter text-gray-500">Address</label>
        <div className="flex items-center">
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            readOnly
            className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts"
          />
          <button
            type="button"
            className="border-2 border-mintGreen flex items-center gap-1 ml-2 px-4 py-2 text-blackGreen text-sm rounded-md hover:bg-mintGreen"
            onClick={() => handleFieldChange('address')}
          >
            <FaPenToSquare /> Change
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block -mb-1 text-sm font-lighter text-gray-500">Date of Birth</label>
        <div className="flex items-center">
          <input
            type="date"
            id="dob"
            name="dob"
            value={userData.dob}
            readOnly
            className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts"
          />
          <button
            type="button"
            className="border-2 border-mintGreen flex items-center gap-1 ml-2 px-4 py-2 text-blackGreen text-sm rounded-md hover:bg-mintGreen"
            onClick={() => handleFieldChange('dob')}
          >
           <FaPenToSquare /> Change
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserAccount;
