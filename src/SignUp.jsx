import { useState } from 'react';
import myImage from "./assets/login1.jpg"
import logo from "./assets/footLogo.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';






const SignUp = () => {

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  }; setShowPassword(!showPassword);
  };



  return (
    <div className="flex border-2 border-red-500 px-48 h-screen bg-gradient-to-r from-blue-100 to-green-200">
      <div className="border-4 border-green-600 w-1/2 flex justify-center">
        <img
          src={myImage}
          alt="resort with umbrellas and swimming pool"
          className=' w-[24rem] h-[34rem] my-6 rounded-3xl'
        />
      </div>

{/* ------FORM-------- */}

    <div className="w-2/3 p-5 border-4 border-blue-600 text-blackGreen">
      <img src={logo} className='w-32 mb-8'/>

      <div className="border-8 border-purple-700">
        <div>
          <h1 className='text-2xl md:text-4xl tracking-wide font-semibold font-monts'>Sign Up</h1>
          <p className='w-96 text-xs font-monts py-2 font-semibold'>Let’s get you all st up so you can access your personal account.</p>
        </div>
        
          {/* --------Form input------------ */}
        <form className="space-y-3">
        {/* 1 */}
              <div className="flex gap-4">
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">First Name</legend>
                  <input className="bg-transparent text-sm text-gray-800 outline-none" placeholder="Heritage"/>
                </fieldset>
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">Last Name</legend>
                  <input className="bg-transparent text-sm text-gray-800 outline-none" placeholder="Harrison"/>
                </fieldset>
              </div>

        {/* 2 */}

              <div className="flex gap-4">
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">Email</legend>
                  <input type="email" className="bg-transparent text-sm text-gray-800 outline-none" placeholder="heritageolaiya@gmail.com"/>
                </fieldset>
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">Phone Number</legend>
                  <input className="bg-transparent text-sm text-gray-800 outline-none" placeholder="(+234) -8100000336"/>
                </fieldset>
              </div>

              {/* ------3------ */}
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">Password</legend>
                  <input
                    type={showPassword1 ? 'text' : 'password'}
                    className="bg-transparent text-sm text-gray-800 outline-none" 
                    placeholder="**************"
                  />
                 {showPassword1 ? (
                  <FaEyeSlash className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility1} />
                   ) : (
                  <FaEye className="absolute top-1/2 -mt-3 right-3 cursor-pointer" onClick={togglePasswordVisibility1} />
                   )}
                </fieldset>
                {/* -----4----- */}
                <fieldset className="border border-gray-400 rounded-sm px-2">
                  <legend className="text-xs">confirm Password</legend>
                  <input
                    type={showPassword2 ? 'text' : 'password'}
                    className="bg-transparent text-sm text-gray-800 outline-none" 
                    placeholder="**************"
                  />
                  {showPassword2 ? (
                        <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility} />
                        ) : (
                        <FaEye className="cursor-pointer" onClick={togglePasswordVisibility} />
                        )}
                </fieldset>

        </form>
      </div>

    </div>
    
    </div>
  );
};

export default SignUp
