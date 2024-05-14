import { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams, useNavigate, Link } from "react-router-dom";
import logo from "./assets/footLogo.png";
import myImage from "./assets/login1.jpg";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Invalid reset token");
    }
  }, [token]);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess("");

    // Validate password and confirmPassword
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();

      if (data.status) {
        setSuccess("Password reset successful");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError(data.msg || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while resetting the password");
    }
  };

  return (
    <div className="block md:flex bg-gray-200 min-h-screen">
      <div className="md:w-1/2 md:p-8 lg:p-14">
        <img src={logo} className="w-32 md:w-28 mx-auto md:mx-0" alt="logo" />
        <form
          onSubmit={handleSubmit}
          className="pt-8 mx-3 md:mx-0 md:ml-8 text-blackGreen"
        >
          <Link to="/login" className="flex gap-1 items-center cursor-pointer">
            <IoChevronBack /> Back to login
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-2 tracking-wide font-semibold font-monts">
            Set a password
          </h1>
          <p className="w-full md:w-96 text-xs md:text-sm font-monts py-2 font-medium">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>

          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}

          <fieldset className="relative flex justify-between items-center border-2 border-green-300 py-1 w-full md:w-96 mt-4 my-5 rounded-md">
            <legend className="ml-3 text-sm">Create Password</legend>
            <input
              type={showPassword1 ? "text" : "password"}
              name="newPassword"
              value={newPassword}
              className="w-full p-1 outline-none px-2 bg-transparent"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
              aria-label="Create Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility1}
              aria-label={showPassword1 ? "Hide password" : "Show password"}
            >
              {showPassword1 ? (
                <FaEyeSlash className="absolute top-1/2 -mt-3 right-3 cursor-pointer" />
              ) : (
                <FaEye className="absolute top-1/2 -mt-3 right-3 cursor-pointer" />
              )}
            </button>
          </fieldset>

          <fieldset className="relative flex justify-between items-center border-2 border-green-300 py-1 w-full md:w-96 mt-4 my-5 rounded-md">
            <legend className="ml-3 text-sm">Re-enter Password</legend>
            <input
              type={showPassword2 ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              className="w-full p-1 outline-none px-2 bg-transparent"
              placeholder="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-label="Confirm Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility2}
              aria-label={showPassword2 ? "Hide password" : "Show password"}
            >
              {showPassword2 ? (
                <FaEyeSlash className="absolute top-1/2 -mt-3 right-3 cursor-pointer" />
              ) : (
                <FaEye className="absolute top-1/2 -mt-3 right-3 cursor-pointer" />
              )}
            </button>
          </fieldset>

          <button
            type="submit"
            // onClick={() => handleSubmit(token)}
            className="w-full lg:w-96 py-2 rounded-md font-semibold hover:text-white bg-gradient-to-r from-blue-300 to-green-400"
          >
            Set password
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 py-12 lg:py-2">
        <div className="items-center flex justify-center">
          <img
            src={myImage}
            alt="resort"
            className="rounded-3xl object-cover w-full h-64 md:h-full md:w-full lg:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
