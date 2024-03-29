import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import myImage from "./assets/login1.jpg";
import logo from "./assets/footLogo.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = ({ addUserToDatabase}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      agreeCheckbox: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name.'),
      lastName: Yup.string().required('Please enter your last name.'),
      email: Yup.string().email('Invalid email address. Please provide a valid email.').required('Email is a required field.'),
      phoneNumber: Yup.string().matches(/^\+?\d{1,15}$/, 'Invalid phone number format. Please enter a valid phone number.').required('Phone number is required.'),
      password: Yup.string().min(8, 'Password must be at least 8 characters long.').required('Password is required.'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.').required('Please confirm your password.'),
      agreeCheckbox: Yup.boolean().oneOf([true], 'Please agree to the Terms and Privacy Policies.'),
    }),

    onSubmit: values => {
      // Handle form submission
      addUserToDatabase(values);
    },
  });
  const [fadeIn, setFadeIn] = useState(false);

  const togglePasswordVisibility1 = () => {
    formik.setFieldValue('password', !formik.values.showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    formik.setFieldValue('confirmPassword', !formik.values.showPassword2);
  };
  useEffect(() => {
    // Set fadeIn to true after the component has mounted
    setFadeIn(true);
  }, []);

  return (
    <div className={`flex px-40 h-screen bg-gradient-to-r from-blue-100 to-green-200 transition duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-1/2 flex justify-center">
        <img
          src={myImage}
          alt="Resort with umbrellas and swimming pool"
          className='w-[24rem] h-[34rem] my-6 rounded-3xl'
        />
      </div>

      <div className={`w-2/3 p-3 px-10 text-blackGreen ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Link to="/">
          <img src={logo} className='w-28 mb-6' alt="Logo" />
        </Link>

        <div className="">
          <div>
            <h1 className='text-2xl md:text-2xl md:font-bold tracking-wide font-semibold font-monts'>Sign Up</h1>
            <p className='text-xs text-gray-500 font-monts pb-3 font-medium'>Let’s get you all set up so you can access your personal account.</p>
          </div>

          <form className="space-y-3 onSubmit={formik.handleSubmit}">
            <div className="flex gap-4">

            <div className="w-1/2">
              <div>
                <fieldset className="p-1 border border-blue-400 rounded-xl">
                  <legend className="text-xs">First Name</legend>
                  <input
                    id="firstName"
                    className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
                      formik.touched.firstName && formik.errors.firstName
                        ? 'border-red-500'
                        : ''
                    }`}
                    placeholder="Heritage"
                    {...formik.getFieldProps('firstName')}
                  />
                </fieldset>
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-xs text-red-500">{formik.errors.firstName}</p>
                )}
              </div>
            </div>

                <div className="w-1/2">
                  <div>
                    <fieldset className="border border-blue-400 rounded-xl p-1">
                      <legend className="text-xs mx-2">Last Name</legend>
                      <input
                        id="lastName"
                        className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
                          formik.touched.lastName && formik.errors.lastName
                            ? 'border-red-500'
                            : ''
                        }`}
                        placeholder="Harrison"
                        {...formik.getFieldProps('lastName')}
                      />
                    </fieldset>
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-xs text-red-500">{formik.errors.lastName}</p>
                    )}
                  </div>
              </div>
          </div>


 <div>
  <div className="flex gap-4">
    <div className="w-1/2">
      <div>
        <fieldset className="border border-blue-500 rounded-xl p-1 px-2">
          <legend className="text-xs mx-2">Email</legend>
          <input
            id="email"
            type="email"
            className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : ''
            }`}
            placeholder="heritageolaiya@gmail.com"
            {...formik.getFieldProps('email')}
          />
        </fieldset>
        {formik.touched.email && formik.errors.email && (
          <p className="text-xs text-red-500">{formik.errors.email}</p>
        )}
      </div>
    </div>

    <div className="w-1/2">
      <div>
        <fieldset className="border border-blue-400 rounded-xl p-1 px-2">
          <legend className="text-xs">Phone Number</legend>
          <input
            id="phoneNumber"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'border-red-500'
                : ''
            }`}
            placeholder="(+234) -8100000336"
            {...formik.getFieldProps('phoneNumber')}
          />
        </fieldset>
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <p className="text-xs text-red-500">{formik.errors.phoneNumber}</p>
        )}
      </div>
    </div>
  </div>

  <div className=" my-2">
    <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-2 ">
      <legend className="text-xs">Password</legend>
      <input
        id="password"
        type={formik.values.showPassword1 ? 'text' : 'password'}
        className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
          formik.touched.password && formik.errors.password
            ? 'border-red-500'
            : ''
        }`}
        placeholder="**************"
        required
        {...formik.getFieldProps('password')}
      />
      {formik.values.showPassword1 ? (
        <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility1} />
      ) : (
        <FaEye className="cursor-pointer" onClick={togglePasswordVisibility1} />
      )}
    </fieldset>
    {formik.touched.password && formik.errors.password && (
      <p className="text-xs text-red-500">{formik.errors.password}</p>
    )}
  </div>

  <div className="2">
    <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-">
      <legend className="text-xs">Confirm Password</legend>
      <input
        id="confirmPassword"
        type={formik.values.showPassword2 ? 'text' : 'password'}
        className={`w-full bg-transparent text-sm text-gray-800 outline-none ${
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? 'border-red-500'
            : ''
        }`}
        placeholder="**************"
        {...formik.getFieldProps('confirmPassword')}
      />
      {formik.values.showPassword2 ? (
        <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility2} />
      ) : (
        <FaEye className="cursor-pointer" onClick={togglePasswordVisibility2} />
      )}
    </fieldset>
    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
      <p className="text-xs text-red-500">{formik.errors.confirmPassword}</p>
    )}
  </div>
</div>

          </form>

          <div className='flex gap-2 mt-4'>
            <input
                type='checkbox'
                id="agreeCheckbox"
                className={` bg-transparent text-sm text-gray-800 outline-none ${formik.touched.agreeCheckbox && formik.errors.agreeCheckbox ? 'border-red-500' : ''}`}
                {...formik.getFieldProps('agreeCheckbox')}
            />
            <label htmlFor="agreeCheckbox" className='text-monts text-sm'>
              I agree to all the <span className='text-red-600'>Terms</span> and <span className='text-red-600'>Privacy Policies</span>
            </label>
                {formik.touched.agreeCheckbox && formik.errors.agreeCheckbox && <p className="text-xs text-red-500">{formik.errors.agreeCheckbox}</p>}
          </div>

          <div className='space-y-2 mt-4'>
            <button className="w-full py-2 text-sm rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400">
              Create account
            </button>
            <p className='text-sm text-center'>Already have an account?
              <Link to="/login" className='text-red-500 px-1'>Login</Link>
            </p>
            <div className="flex items-center py-3">
              <div className="w-52 border-t border-blue-300"></div>
              <div className="mx-1 text-sm text-gray-500">or login with</div>
              <div className="w-52 border-t border-blue-300"></div>
            </div>

            {/* -----------OTHER LOGIN OPTIONS----------- */}
            <div className="flex justify-center space-x-9">
              <button className="text-blue-400 px-2 border rounded-xl border-blue-300">
                <FaFacebook className="text-xl animate-bounce" />
              </button>
              <button className="text-rainbow p-3 rounded-full border border-emerald-500">
                <FaGooglePlusG className="text-red-400 text-xl animate-bounce" />
              </button>
              <button className="p-3 border border-blue-300 rounded-full">
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
