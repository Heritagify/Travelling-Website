import { useState } from 'react';
import myImage from "./assets/login1.jpg";
import logo from "./assets/footLogo.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link} from 'react-router-dom';

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="flex border-2 border-red-500 px-40 h-screen bg-gradient-to-r from-blue-100 to-green-200">
      <div className="w-1/2 flex justify-center">
          <img
            src={myImage}
            alt="resort with umbrellas and swimming pool"
            className=' w-[24rem] h-[34rem] my-6 rounded-3xl'
          />
      </div>

      <div className="w-2/3 p-6 px-10 text-blackGreen">
        <img src={logo} className='w-28 mb-8'/>

        <div className="">
          <div>
            <h1 className='text-2xl md:text-3xl tracking-wide font-semibold font-monts'>Sign Up</h1>
            <p className=' text-xs text-gray-500 font-monts pb-6 font-medium'>Let’s get you all set up so you can access your personal account.</p>
          </div>

          <form className="space-y-1">
            <div className="flex gap-4">
              <fieldset className="w-1/2 p-1 border border-blue-400 rounded-xl px-2">
                <legend className="text-xs">First Name</legend>
                <input className="w-full bg-transparent text-sm text-gray-800 outline-none" placeholder="Heritage"/>
              </fieldset>
              <fieldset className=" w-1/2 border border-blue-400 rounded-xl p-1 px-2">
                <legend className="text-xs">Last Name</legend>
                <input className="w-full bg-transparent text-sm text-gray-800 outline-none" placeholder="Harrison"/>
              </fieldset>
            </div>

            <div className="flex gap-4">
              <fieldset className="w-1/2 border border-blue-500 rounded-xl p-1 px-2">
                <legend className="text-xs mx-2">Email</legend>
                <input type="email" className="w-full bg-transparent text-sm text-gray-800 outline-none" placeholder="heritageolaiya@gmail.com"/>
              </fieldset>
              <fieldset className="w-1/2 border border-blue-400 rounded-xl px-2">
                <legend className="text-xs">Phone Number</legend>
                <input className="w-full bg-transparent text-sm text-gray-800 outline-none" placeholder="(+234) -8100000336"/>
              </fieldset>
            </div>

            <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-2">
              <legend className="text-xs">Password</legend>
              <input
                type={showPassword1 ? 'text' : 'password'}
                className="bg-transparent text-sm text-gray-800 outline-none" 
                placeholder="**************"
              />
              {showPassword1 ? (
                <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility1} />
              ) : (
                <FaEye className="cursor-pointer" onClick={togglePasswordVisibility1} />
              )}
            </fieldset>

            <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-2">
              <legend className="text-xs">Confirm Password</legend>
              <input
                type={showPassword2 ? 'text' : 'password'}
                className="bg-transparent text-sm text-gray-800 outline-none"
                placeholder="**************"
              />
              {showPassword2 ? (
                <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility2} />
              ) : (
                <FaEye className="cursor-pointer" onClick={togglePasswordVisibility2} />
              )}
            </fieldset>
          </form>

            <div className='flex gap-2 mt-4'>
              <input type='checkbox' />
              <p className='text-monts text-sm'>I agree to all the <span className='text-red-600'>Terms</span> and <span className='text-red-600'>Privacy Policies</span></p>
            </div>
              <div className='space-y-2 mt-4'>
                <button className="w-full py-2 text-sm rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400">
                  Create account
                </button>
                          <p className='text-sm text-center'>Already have an account?
                            <Link to="/login" className='text-red-500 px-1'>Login
                            </Link>
                          </p>
                <div className="flex items-center py-3">
                    <div className="w-52 border-t border-blue-500"></div>
                    <div className="mx-1 text-sm text-gray-500">or login with</div>
                    <div className="w-52 border-t border-blue-500"></div>
                </div>
                
                            {/* -----------OTHER LOGIN OPTIONS----------- */}
                            <div className="flex justify-center space-x-9">
                  <button
                    className="text-blue-400 px-2 border rounded-xl border-blue-300">
                    < FaFacebook  className="text-xl animate-bounce"/>
                    </button>
                  <button
                    className="text-rainbow p-3 rounded-full border border-emerald-500">
                      < FaGooglePlusG className="text-red-400 text-xl animate-bounce"/>
                    </button>
                  <button
                    className=" p-3 border border-blue-300 rounded-full">
                    <FaApple className="text-xl animate-bounce" />
                  </button>
                            </div>
              </div>







        </div>
      </div>
    </div>
  );
};

export default SignUp;
