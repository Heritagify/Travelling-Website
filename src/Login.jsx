import { useState } from 'react';
import myImage from './assets/login1.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './assets/footLogo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link} from 'react-router-dom';
import FlippingCarousel from './components/FlipCarousel';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };




  return (
    <div className='px-28 py-2 h-full bg-gradient-to-r from-blue-100 to-green-200 '>
        <div className='flex justify-between'>
            <div className='w-2/5 ml-10 mt-8 text-blackGreen'>
                <img src={logo} className='w-36 mb-10'/>
                <div className='space-y-6 pb-10'>
                    <div>
                        <h1 className='text-2xl md:text-4xl tracking-wide font-semibold font-monts'>Login</h1>
                        <p className='w-96 text-xs font-monts py-2 font-semibold'>Login to access your Golobe account</p>
                    </div>
                    <fieldset className='border-2 border-gray-400  py-1 rounded-md'>
                        <legend className=' ml-3 text-sm font-medium'>Email</legend>
                        <input className='w-full outline-none bg-transparent px-2 text-sm text-gray-600' placeholder='heritagify@gmail.com' />
                    </fieldset>
                    <fieldset className='flex px-2 py-1 border-2 border-gray-400 rounded-md'>
                        <legend className='text-sm font-monts font-medium'>Password</legend>
                        
                        <input
                            className='w-full outline-none px-2 bg-transparent' 
                            type={showPassword ? 'text' : 'password'}
                            placeholder=''
                        />

                        {showPassword ? (
                        <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility} />
                        ) : (
                        <FaEye className="cursor-pointer" onClick={togglePasswordVisibility} />
                        )}
                    </fieldset>
                    <div className="flex w-2/3 text-sm font-medium justify-between">
                        <div className='flex space-x-1 pl-2'>
                            <input type='checkbox' className='cursor-pointer'></input>
                            <p>Remember me</p>
                        </div>
                        <Link to="/forgottenPassword">
                        <p className='text-red-600 text-sm'>Forgot Password</p>

                        </Link>
                    </div>
                    <button className='w-full mt-7 py-2 rounded-md font-semibold bg-emerald-200'>Login</button>

                    {/* -----------OTHER LOGIN OPTIONS----------- */}
                    <div className="flex justify-between">
                            <button
                             className="text-blue-400 p-2 px-10 border rounded-xl border-blue-300">
                              < FaFacebook  className="text-3xl animate-bounce"/>
                             </button>
                            <button
                              className="text-rainbow p-3 rounded-full border border-emerald-500">
                               < FaGooglePlusG className="text-red-400 text-3xl animate-bounce"/>
                              </button>
                            <button
                              className="p-2 px-10 border border-blue-300">
                              <FaApple className="text-3xl animate-bounce" />
                            </button>
                          </div>
                </div>
            </div>
            
                <img src={myImage}
                    className='w-[30rem] h-[34rem] my-6 rounded-3xl'
             />
            
        </div>
        <FlippingCarousel/>
    </div>
  )
}

export default Login