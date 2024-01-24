import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaFacebook, FaGooglePlusG, FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
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
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().matches(/^\+?\d{1,15}$/, 'Invalid phone number').required('Phone Number is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
      agreeCheckbox: Yup.boolean().oneOf([true], 'You must agree to the Terms and Privacy Policies'),
    }),
    onSubmit: values => {
      // Handle form submission
      console.log('Form submitted:', values);
    },
  });

  const togglePasswordVisibility1 = () => {
    formik.setFieldValue('password', !formik.values.showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    formik.setFieldValue('confirmPassword', !formik.values.showPassword2);
  };

  return (
    <div className="flex border-2 border-red-500 px-40 h-screen bg-gradient-to-r from-blue-100 to-green-200">
      {/* ... rest of your code ... */}
      <form className="space-y-1" onSubmit={formik.handleSubmit}>
        {/* ... rest of your form fields ... */}
        <div className="flex gap-4">
          <fieldset className="w-1/2 p-1 border border-blue-400 rounded-xl px-2">
            <legend className="text-xs">First Name</legend>
            <input
              id="firstName"
              type="text"
              className={`w-full bg-transparent text-sm text-gray-800 outline-none ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Heritage"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName && <p className="text-xs text-red-500">{formik.errors.firstName}</p>}
          </fieldset>
          {/* ... rest of your form fields ... */}
        </div>
        {/* ... rest of your form fields ... */}
        <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-2">
          <legend className="text-xs">Password</legend>
          <input
            id="password"
            type={formik.values.showPassword1 ? 'text' : 'password'}
            className={`w-full bg-transparent text-sm text-gray-800 outline-none ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
            placeholder="**************"
            required
            {...formik.getFieldProps('password')}
          />
          {formik.values.showPassword1 ? (
            <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility1} />
          ) : (
            <FaEye className="cursor-pointer" onClick={togglePasswordVisibility1} />
          )}
          {formik.touched.password && formik.errors.password && <p className="text-xs text-red-500">{formik.errors.password}</p>}
        </fieldset>
        {/* ... rest of your form fields ... */}
        <fieldset className="flex justify-between border border-blue-400 rounded-xl p-1 px-2">
          <legend className="text-xs">Confirm Password</legend>
          <input
            id="confirmPassword"
            type={formik.values.showPassword2 ? 'text' : 'password'}
            className={`w-full bg-transparent text-sm text-gray-800 outline-none ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
            placeholder="**************"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.values.showPassword2 ? (
            <FaEyeSlash className="cursor-pointer" onClick={togglePasswordVisibility2} />
          ) : (
            <FaEye className="cursor-pointer" onClick={togglePasswordVisibility2} />
          )}
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-xs text-red-500">{formik.errors.confirmPassword}</p>}
        </fieldset>
        {/* ... rest of your form fields ... */}
        <div className='flex gap-2 mt-4'>
          <input
            id="agreeCheckbox"
            type='checkbox'
            className={`form-checkbox text-blue-500 focus:ring-blue-400 focus:border-blue-400 ${formik.touched.agreeCheckbox && formik.errors.agreeCheckbox ? 'border-red-500' : ''}`}
            {...formik.getFieldProps('agreeCheckbox')}
          />
          <label htmlFor="agreeCheckbox" className='text-monts text-sm'>
            I agree to all the <span className='text-red-600'>Terms</span> and <span className='text-red-600'>Privacy Policies</span>
          </label>
        </div>
        {formik.touched.agreeCheckbox && formik.errors.agreeCheckbox && <p className="text-xs text-red-500">{formik.errors.agreeCheckbox}</p>}
        {/* ... rest of your form fields ... */}
        <button className="w-full py-2 text-sm rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400" type="submit">
          Create account
        </button>
        <p className='text-sm text-center'>Already have an account?
          <Link to="/login" className='text-red-500 px-1'>Login</Link>
        </p>
        {/* ... rest of your form fields ... */}
      </form>
    </div>
  );
};

export default SignUp;
