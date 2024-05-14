import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from './redux/actions/authActions';
import { FaUser } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import { RiLogoutCircleFill } from "react-icons/ri";

const UserOptions = ({ user, logout }) => {
  return (
    <div className="absolute right-0 sm:right-5 lg:right-0 top-full mt-2 w-52 md:w-64 lg:w-48 bg-mintGreen shadow shadow-green-700 rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={user.profilePicture}
            alt={`Profile of ${user.name}`}
            className="w-14 lg:w-10 h-14 lg:h-10 rounded-full mr-2"
          />
          <span className="lg:text-sm font-semibold">{user.name}</span>
        </div>
        <span className="w-3 lg:w-2 h-3 lg:h-2 rounded-full bg-green-500"></span>
      </div>
      <Link
        to="/account"
        className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"
      >
        <FaUser className="md:text-xl lg:text-sm" />
        My Account
      </Link>
      <Link
        to="/account/paymentMethod"
        className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"
      >
        <MdPayments className="md:text-xl lg:text-sm" />
        Payments
      </Link>
      <Link
        to="/settings"
        className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"
      >
        <RiUserSettingsFill className="md:text-xl lg:text-sm" />
        Settings
      </Link>
      <Link
        to="/support"
        className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"
      >
        <FcCustomerSupport className="md:text-xl lg:text-sm" />
        Support
      </Link>
      <button
        className="flex items-center gap-1 w-full text-left py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9 focus:outline-none"
        onClick={logout}
      >
        <RiLogoutCircleFill className="md:text-xl lg:text-sm" />
        Logout
      </button>
    </div>
  );
};

export default UserOptions;
