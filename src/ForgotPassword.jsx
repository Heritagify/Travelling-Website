import * as Yup from 'yup';
import { useFormik } from 'formik';
import logo from "./assets/footLogo.png"
import { IoChevronBack } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link} from 'react-router-dom';
import myImage from './assets/login1.jpg'










const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });


  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-200 animate-gradient min-h-screen">
      <div className="md:flex">

          <div className="md:w-1/2 p-4 md:p-10">
                    <Link to="/">
                      <img src={ logo } className="w-28 mx-8" alt="logo"/>
                    </Link>
                    <div className="pt-8 mx-4 md:mx-8 text-blackGreen">
                        <Link to="/login" className=" flex gap-1 items-center cursor-pointer">
                          <IoChevronBack/> Back to login
                        </Link>
                        <h1 className="text-2xl md:text-4xl tracking-wide font-semibold font-monts">Forgot your password?</h1>
                        <p className="w-96 text-xs font-monts py-2 font-medium">Don’t worry, happens to all of us. Enter your email below to recover your password</p>

                 {/* ----------input Field--------- */}
                        <fieldset className='border-2 border-green-300 py-1 w-full mt-4 my-5 rounded-md '>
                          <legend className=' ml-3 text-sm'>Email</legend>
                          <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`w-full p-1 outline-none px-2 bg-transparent ${
                    formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="herogreat@gmail.com"
                />
            </fieldset>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm my-2">{formik.errors.email}</div>
                ) : null}
                        <button className='w-full py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-900 to-green-800'>Submit</button>
                        <div className="flex items-center py-6">
                              <div className="w-48 border-t border-blue-500"></div>
                              <div className="mx-3 text-sm text-gray-500">or login with</div>
                              <div className="w-48 border-t border-blue-500"></div>
                          </div>
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
                  <div className="hidden md:block w-1/2 p-5">
                    <div className=" items-center flex justify-center">
                      <img src={ myImage } alt="resort" className="rounded-3xl object-cover w-2/3"/>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default ForgotPassword
