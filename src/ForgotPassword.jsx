import logo from "./assets/footLogo.png"
import { IoChevronBack } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link} from 'react-router-dom';
import myImage from './assets/login1.jpg'










const ForgotPassword = () => {
    
    // const navigate = useNavigate();

    // const navigateLogin = ()=> {
    //     navigate('/login')
    // }


  return (
    <div className="flex">

        <div className="w-1/2 p-14">
                  <img src={ logo } className="w-28 mx-8" alt="logo"/>
                  <div className="pt-12 mx-8 text-blackGreen">
                      <Link to="/login" className=" flex gap-1 items-center cursor-pointer">
                        <IoChevronBack/> Back to login
                      </Link>
                      <h1 className="text-4xl tracking-wide font-semibold font-monts">Forgot your password?</h1>
                      <p className="w-96 text-xs font-monts py-2 font-medium">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
                      <fieldset className='border-2 py-1 w-full mt-4 my-5 rounded-md'>
                        <legend className=' ml-3 text-sm'>Email</legend>
                        <input className='w-full outline-none px-2' placeholder="herogreat@gmail.com" />
                      </fieldset>
                      <button className='w-full py-2 rounded-md font-semibold bg-emerald-200'>Submit</button>
                      
                      <div className="flex items-center py-6">
                            <div className="w-48 border-t border-gray-300"></div>
                            <div className="mx-3 text-sm text-gray-500">or login with</div>
                            <div className="w-48 border-t border-gray-300"></div>
                        </div>

                        <div className="flex justify-between">
                          <button
                           className="text-blue-400 p-2 px-10 border border-blue-300">
                            < FaFacebook  className="text-2xl"/> 
                           </button>
                          <button 
                            className="text-rainbow p-2 px-10 border border-blue-300">
                             < FaGooglePlusG className="text-red-400 text-2xl"/> 
                            </button>
                          <button 
                            className="p-2 px-10 border border-blue-300">
                            <FaApple className="text-2xl" />
                          </button>
                        </div>

                  </div>
        </div>

          <div className="w-1/2 p-5">
        <div className="items-center flex justify-center">
            <img src={ myImage } alt="resort" className="object-cover w-2/3"/>
          </div>
        </div>


        {/* <div className="border-4 border-yellow-700 flex flex-col items-center justify-center">
          <div className="flex min-h-screen sm:px-12 py-8">
            <img className="h-full max-w-full drop-shadow-md sm:rounded-md"  src={ myImage } alt="" />
          </div>
        </div> */}

    </div>
  )
}

export default ForgotPassword
