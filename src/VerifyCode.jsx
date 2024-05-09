import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/footLogo.png';
import myImage from './assets/login1.jpg';

const VerifyCode = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const history = useHistory();

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        // Make an API call to verify the code
        const response = await fetch('/api/verify-code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ verificationCode }),
        });

        const data = await response.json();

        if (data.isValid) {
          // If the code is valid, redirect to the ResetPassword component
          // with the reset token as a parameter
          history.push(`/reset-password/${data.resetToken}`);
        } else {
          // If the code is invalid, display an error message
          console.error('Invalid verification code');
        }
      } catch (err) {
        console.error(err);
        // Handle the error as needed (e.g., show an error message)
      }
    };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="block md:flex bg-gray-200 min-h-full">
      <div className="md:w-1/2 md:p-14">
        <img src={logo} className="w-44 md:w-28 mx-8" alt="logo" />
        <form  onSubmit={handleSubmit}
          className="pt-12 mx-3 md:mx-8 text-blackGreen">
          <Link to="/login" className="flex gap-1 items-center cursor-pointer">
            <IoChevronBack /> Back to login
          </Link>
          <h1 className="text-4xl my-2 tracking-wide font-semibold font-monts">Verify Code</h1>
          <p className="w-96 text-xs font-monts py-2 font-medium">An authentication code has been sent to your email.</p>
          <fieldset className="flex justify-between items-center border-2 border-green-300 py-1 w-full mt-4 my-5 rounded-md">
            <legend className="ml-3 text-sm">Enter code</legend>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-1 outline-none px-2 bg-transparent"
                placeholder="1234ZX9H"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
                {showPassword ? (
                  <FaEyeSlash className="mx-3 cursor-pointer" onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye className="mx-3 cursor-pointer" onClick={togglePasswordVisibility} />
                )}
          </fieldset>
          <button type='submit' className="w-full py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400">
            Verify
          </button>
        </form>
      </div>
      <div className="w-1/2 p-5 hidden md:block">
        <div className="items-center flex justify-center">
          <img src={myImage} alt="resort" className="rounded-3xl object-cover w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
