import myImage from './assets/login1.jpg'
import { BsEyeSlashFill } from "react-icons/bs";
import logo from './assets/footLogo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className='mx-28'>
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
                        <input className='w-full outline-none px-2 text-sm text-gray-600' placeholder='heritagify@gmail.com' />
                    </fieldset>
                    <fieldset className='flex px-2 py-1 border-2 border-gray-400 rounded-md'>
                        <legend className='text-sm font-monts font-medium'>Password</legend>
                        <input className='w-full outline-none px-2' type='password' placeholder=''/>
                        <BsEyeSlashFill />
                    </fieldset>
                    <div className="flex w-2/3 text-sm font-medium justify-between">
                        <div className='flex space-x-1 pl-2'>
                            <input type='checkbox'></input>
                            <p>Remember me</p>
                        </div>
                        <p className='text-red-600 text-sm'>Forgot Password</p>
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
            <div className=''>
                <img src={myImage}
                    className='w-[30rem] h-[36rem] m-3'
                />
            </div>
        </div>
    </div>
  )
}

export default Login