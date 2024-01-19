import logo from "./assets/footLogo.png"
import { IoChevronBack } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link} from 'react-router-dom';
import myImage from './assets/login1.jpg'










const VerifyCode = () => {


  return (
      <div className="block md:flex bg-gray-200">

          <div className="md:w-1/2  md:p-14">
                    <img src={ logo } className="w-44 md:w-28 mx-8" alt="logo"/>
                    <div className="pt-12 mx-3 md:mx-8 text-blackGreen">
                        <Link to="/login" className=" flex gap-1 items-center cursor-pointer">
                          <IoChevronBack/> Back to login
                        </Link>
                        <h1 className="text-4xl my-2 tracking-wide font-semibold font-monts">Verify Code</h1>
                        <p className="w-96 text-xs font-monts py-2 font-medium">An authentication code has been sent to your email.</p>
                        <fieldset className='border-2 border-green-300 py-1 w-full mt-4 my-5 rounded-md '>
                          <legend className=' ml-3 text-sm'>Enter code</legend>
                          <input className='w-full p-1 outline-none px-2 bg-transparent' placeholder="1234ZX9H" />
                        </fieldset>
                        <button className='w-full py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400'>Verify</button>
                   
                          
                    </div>
          </div>
                  <div className="w-1/2 p-5 hidden md:block">
                    <div className=" items-center flex justify-center">
                      <img src={ myImage } alt="resort" className="rounded-3xl object-cover w-2/3"/>
                    </div>
                  </div>
    </div>
  )
}

export default VerifyCode