import React, { useState } from 'react';
import { FaPenToSquare, FaEye, FaEyeSlash } from "react-icons/fa6";

const UserAccount = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'swifty@techie.com',
    password: '********', // Displaying only as placeholder
    address: '123 Main St, City, Country',
    dob: '1990/01/01'
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => {
    setCurrentField(field);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewValue('');
    setShowPassword(false); // Reset password visibility
  };

  const handleSave = () => {
    setUserData({ ...userData, [currentField]: newValue });
    closeModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-5 mx-3 md:mx-16">
      <h1 className="text-2xl  text-center md:text-left font-monts font-semibold mb-2">Account</h1>
      <div className="shadow-md border-2 rounded-2xl shadow-gray-300 p-5">
        {Object.entries(userData).map(([field, value]) => (
          <div key={field} className="mb-4">
            <label htmlFor={field} className="block -mb-2 text-sm font-lighter text-gray-500 capitalize">{field}</label>
            <div className="flex items-center">
              <input
                type={field === 'password' && !modalOpen ? 'password' : 'text'}
                id={field}
                name={field}
                value={value}
                readOnly
                className="w-full font-semibold rounded-md shadow-sm focus:outline-none text-blackGreen font-monts"
              />
              <button
                type="button"
                className="flex border-2 border-mintGreen items-center gap-1 ml-2 px-4 py-2 hover:bg-mintGreen text-blackGreen text-sm rounded-md focus:outline-none focus:bg-mintGreen"
                onClick={() => handleChange(field)}
                aria-label={`Change ${field}`}
              >
                <FaPenToSquare /> Change
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-mintGreen w-1/3 px-5 py-20 rounded-lg shadow-md">
            <label htmlFor="newValue" className="block text-sm font-lighter text-gray-500 mb-2 capitalize">{currentField}</label>
            <div className="relative">
              <input
                type={currentField === 'password' && !showPassword ? 'password' : 'text'}
                id="newValue"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 pr-10"
              />
              {currentField === 'password' && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="bg-blackGreen text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="ml-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
