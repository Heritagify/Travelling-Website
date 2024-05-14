import React, { lazy, Suspense } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import logo from "./assets/footLogo.png";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
const FaFacebookIcon = lazy(() => import("./icons/FaFacebookIcon"));
const FaGooglePlusGIcon = lazy(() => import("./icons/FaGooglePlusGIcon"));
const FaAppleIcon = lazy(() => import("./icons/FaAppleIcon"));
import myImage from "./assets/login1.jpg";

import Axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,

    onSubmit: (values) => {
      // Handling form submission here...............
      Axios.post("http://localhost:3000/auth/forgotten-password", {
        email: values.email,
      }).then((response) => {
        if (response.data.status) {
          alert(
            "check your email for the reset password link" +
              "\nIf you don't see it in your inbox," +
              "\nplease check your spam folder"
          );
          navigate("/verifyCode");
        } else {
          alert("This account does not exist.");
        }
      });
    },
  });
  // .catch(err => {
  //   console.log(err);
  //   // Show an error message or perform any other error handling
  //   alert('An error occurred while submitting the form. Please try again later.');
  // });

  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-200 animate-gradient min-h-screen">
      <div className="md:flex">
        <div className="md:w-1/2 py-4 md:p-10">
          <Link to="/">
            <img src={logo} className="w-28 mx-8" alt="logo" />
          </Link>
          <form
            onSubmit={formik.handleSubmit}
            className="pt-8 mx-4 md:mx-8 text-blackGreen"
          >
            <Link
              to="/login"
              className=" flex gap-1 items-center cursor-pointer"
            >
              <IoChevronBack /> Back to login
            </Link>
            <h1 className="text-2xl md:text-4xl tracking-wide font-semibold font-monts">
              Forgot your password?
            </h1>
            <p className="md:w-96 text-xs font-monts py-2 font-medium">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </p>

            {/* ----------input Field--------- */}
            <fieldset className="border-2 border-green-300 py-1 w-full mt-4 my-5 rounded-md ">
              <legend className=" ml-3 text-sm">Email</legend>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full p-1 outline-none px-2 bg-transparent ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="herogreat@gmail.com"
              />
            </fieldset>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm my-2">
                {formik.errors.email}
              </div>
            )}
            <button
              // to={`/reset-password/${resetToken}`}
              type="submit"
              className="w-full py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-900 to-green-800"
            >
              Submit
            </button>

            <div className="flex items-center py-6">
              <div className="w-28 md:w-56 border-t border-blue-500"></div>
              <div className="mx-3 md:text-sm text-gray-500">or login with</div>
              <div className="w-28 md:w-52 border-t border-blue-500"></div>
            </div>

            {/* -----------OTHER LOGIN OPTIONS----------- */}
            <div className="flex justify-between">
              <Suspense fallback={<div>Loading...</div>}>
                <button className="text-blue-400 p-2 px-10 border rounded-xl border-blue-300 hover:bg-gradient-to-r from-blue-900 to-green-800">
                  <FaFacebookIcon className="text-3xl animate-bounce" />
                </button>
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <button className="text-rainbow p-3 rounded-full border border-emerald-500 hover:bg-gradient-to-r from-blue-900 to-green-800">
                  <FaGooglePlusGIcon className="text-red-400 text-3xl animate-bounce" />
                </button>
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <button className="p-2 px-10 border border-blue-300 hover:bg-gradient-to-r from-blue-900 to-green-800">
                  <FaAppleIcon className="text-3xl animate-bounce" />
                </button>
              </Suspense>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 p-5">
          <div className=" items-center flex justify-center">
            <img
              src={myImage}
              alt="resort"
              className="rounded-3xl object-cover w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
