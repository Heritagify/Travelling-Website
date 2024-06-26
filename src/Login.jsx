import { useState, useEffect } from "react";
import myImage from "./assets/login1.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "./assets/footLogo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import FlippingCarousel from './components/FlipCarousel';
import SkeletonLoader from "./components/SkeletonLoader";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

// The component also includes social media login buttons, but their functionality is not implemented.
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
      agreeCheckbox: Yup.boolean().oneOf(
        [true],
        "Please agree to the Terms and Privacy Policies."
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      agreeCheckbox: false,
    },
    validationSchema,

    onSubmit: (values) => {
      // Handling form submission here..............
      console.log("Form values:", values);
      Axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
      })
        .then((response) => {
          if (response.data.status) {
            navigate('/account');
          } else {
            // setError("Invalid username or password");
          }
        })
        .catch((err) => {
          console.log(err);
          // setError("An error occurred. Please try again later.");
        });
      // Perform any necessary actions, such as authentication or API calls
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="px-3 lg:px-28 py-2 h-screen bg-gradient-to-r from-blue-100 to-green-200 ">
      {/* for tablet screens */}
      <Link to="/">
        <img src={logo} className="hidden md:block mx-72 lg:hidden w-52 mb-3" />
      </Link>
      <img
        src={myImage}
        className="lg:hidden hidden md:block w-full h-96 my-6 rounded-3xl"
      />

      <form onSubmit={formik.handleSubmit} className="lg:flex justify-between">
        <div className="lg:w-2/5 lg:ml-10 mt-5 text-blackGreen">
          <Link to="/">
            <img src={logo} className="block md:hidden lg:block w-36 mb-8" />
          </Link>

          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <div className="space-y-3 pb-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-4xl tracking-wide font-semibold font-monts">
                  Login
                </h1>
                <p className="w-96 md:text-xl lg:text-xs font-monts py-2 font-semibold">
                  Login to access your Golobe account
                </p>
              </div>

              <fieldset className="border-2 border-gray-400 rounded-md">
                <legend className=" ml-3 text-lg md:text-2xl lg:text-sm font-medium">
                  Email
                </legend>
                <input
                  type="email"
                  className={`w-full outline-none bg-transparent px-2 py-2 md:py-4 lg:py-1 text-sm text-gray-600 placeholder:text-lg md:placeholder:text-xl lg:placeholder:text-sm ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="heritagify@gmail.com"
                  {...formik.getFieldProps("email")}
                />
              </fieldset>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 font-medium text-lg md:text-xs font-serif">{formik.errors.email}</div>
                ) : null}

              <fieldset className="flex py-2 md:py-4 lg:py-1 border-2 border-gray-400 rounded-md">
                <legend className="text-lg md:text-2xl lg:text-sm ml-3 font-monts font-medium">
                  Password
                </legend>
                  <input
                    className={`w-full outline-none px-3 text-sm bg-transparent placeholder:text-lg md:placeholder:text-xl lg:placeholder:text-sm ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    placeholder="BaZGut456!@#"
                    {...formik.getFieldProps("password")}
                  />
                  

                {showPassword ? (
                  <FaEyeSlash
                    className="cursor-pointer mr-2 text-xl md:text-sm"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className="cursor-pointer mr-2 text-xl md:text-2xl lg:text-sm"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </fieldset>

              {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 font-medium text-lg md:text-xs font-serif">{formik.errors.password}</div>
                  ) : null}



              <div className="flex pb-2 font-medium justify-between">
                <div className="flex space-x-1 pl-2 text-2xl lg:text-sm">
                  <input
                    type="checkbox"
                    className={` bg-transparent w-4 md:w-2 text-gray-800 outline-none ${
                      formik.touched.agreeCheckbox && formik.errors.agreeCheckbox
                        ? "border-red-500"
                        : ""
                    }`}
                    {...formik.getFieldProps("agreeCheckbox")}
                  />
                  <p className="text-xl lg:text-sm">Remember me</p>
                </div>
                <Link to="/forgottenPassword">
                  <p className="text-red-600 text-xl lg:text-sm cursor-pointer">
                    Forgot Password
                  </p>
                </Link>
              </div>

              {formik.touched.agreeCheckbox && formik.errors.agreeCheckbox && (
              <p className="text-xs text-red-500">
                {formik.errors.agreeCheckbox}
              </p>
            )}
            
              <button
                type="submit"
                className="w-full mt-7 py-2 rounded-md font-semibold bg-emerald-200"
                disabled={formik.isSubmitting}
              >
                Login
              </button>

              <p className="md:text-sm text-center">
                Don’t have an account?
                <Link to="/signUp" className="text-red-500 px-1">
                  Sign up
                </Link>
              </p>

              <div className="flex items-center py-3">
                <div className="w-32 md:w-44 border-t border-blue-500"></div>
                <div className="mx-2 md:text-sm text-gray-500">
                  or login with
                </div>
                <div className="w-32 md:w-44 border-t border-blue-500"></div>
              </div>

              {/* -----------OTHER LOGIN OPTIONS----------- */}
              <div className="flex justify-center space-x-9">
                <button className="text-blue-400 px-2 border rounded-xl border-blue-300">
                  <FaFacebook className="text-xl animate-bounce" />
                </button>
                <button className="text-rainbow p-3 rounded-full border border-emerald-500">
                  <FaGooglePlusG className="text-red-400 text-xl animate-bounce" />
                </button>
                <button className=" p-3 border border-blue-300 rounded-full">
                  <FaApple className="text-xl animate-bounce" />
                </button>
              </div>
            </div>
          )}
        </div>

        <img
          src={myImage}
          className="hidden lg:block w-[30rem] h-[34rem] my-6 rounded-3xl"
        />
      </form>
      {/* <FlippingCarousel/> */}
    </div>
  );
};

export default Login;
