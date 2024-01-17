import logo from "./assets/footLogo.png"
import { IoChevronBack } from "react-icons/io5";
import { Link} from 'react-router-dom';









const ForgotPassword = () => {
    
    // const navigate = useNavigate();

    // const navigateLogin = ()=> {
    //     navigate('/login')
    // }


  return (
    <div className="flex border-4 border-red-700">
        <div className="w-1/2 p-20 border-4 border-emerald-900">
          <img src={ logo } className="w-28" alt="logo"/>
          <div className="pt-14 border border-blue-800 text-blackGreen">
              <Link to="/login" className=" flex gap-1 items-center cursor-pointer">
                <IoChevronBack/> Back to login
              </Link>
              <h1 className="text-4xl tracking-wide font-semibold font-monts">Forgot your password?</h1>
              <p className="w-96 text-sm">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
              <fieldset className='border-2 py-1 w-full mt-4 my-5 rounded-md'>
                <legend className=' ml-3 text-sm'>Email</legend>
                <input className='w-full outline-none px-2' />
               </fieldset>
               <button className='w-full py-2 rounded-md font-semibold bg-emerald-200'>Submit</button>
              
              
               <div className="flex items-center">
                    <div className="w-48 border-t border-gray-300"></div>
                    <div className="mx-2 text-sm text-gray-500">or login with</div>
                    <div className="w-48 border-t border-gray-300"></div>
                </div>
          </div>


        </div>

        img
    </div>
  )
}

export default ForgotPassword
