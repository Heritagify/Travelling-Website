import { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/footLogo.png';
import myImage from './assets/login1.jpg';

const SetPassword = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="block md:flex bg-gray-200 min-h-screen">
      <div className="md:w-1/2 md:p-8 lg:p-14">
        <img src={logo} className="w-32 md:w-28 mx-auto md:mx-0" alt="logo" />
        <div className="pt-8 mx-3 md:mx-0 md:ml-8 text-blackGreen">
          <Link to="/login" className="flex gap-1 items-center cursor-pointer">
            <IoChevronBack /> Back to login
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-2 tracking-wide font-semibold font-monts">
            Set a password
          </h1>
          <p className="w-full md:w-96 text-xs md:text-sm font-monts py-2 font-medium">
            Your previous password has been reset. Please set a new password for your account.
          </p>

          <fieldset className="relative flex justify-between items-center border-2 border-green-300 py-1 w-full md:w-96 mt-4 my-5 rounded-md">
            <legend className="ml-3 text-sm">Create Password</legend>
            <input
              type={showPassword1 ? 'text' : 'password'}
              className="w-full p-1 outline-none px-2 bg-transparent"
              placeholder="7789BM6X@@H&$K_"
            />
            {showPassword1 ? (
              <FaEyeSlash className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility1} />
            ) : (
              <FaEye className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility1} />
            )}
          </fieldset>

          <fieldset className="relative flex justify-between items-center border-2 border-green-300 py-1 w-full md:w-96 mt-4 my-5 rounded-md">
            <legend className="ml-3 text-sm">Re-enter Password</legend>
            <input
              type={showPassword2 ? 'text' : 'password'}
              className="w-full p-1 outline-none px-2 bg-transparent"
              placeholder="1778BM6X!!@H&$K_"
            />
            {showPassword2 ? (
              <FaEyeSlash className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility2} />
            ) : (
              <FaEye className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility2} />
            )}
          </fieldset>

          <button className="w-full py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400">
            Set password
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <div className="items-center flex justify-center">
          <img src={myImage} alt="resort" className="rounded-3xl object-cover w-full h-64 md:h-full md:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
