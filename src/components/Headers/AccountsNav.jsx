import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from './redux/actions/authActions';
import PropTypes from 'prop-types';
import logo from '../../assets/footLogo.png';
import { FaHeart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { MdPayments } from 'react-icons/md';
import { RiUserSettingsFill } from 'react-icons/ri';
import { FcCustomerSupport } from 'react-icons/fc';
import UserOptions from '../Headers/UserOptions';
import axios from 'axios';

// import { RiLogoutCircleFill } from "react-icons/ri";

// const AccountsNav = ({ user, logout }) => {
const AccountsNav = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleUserOptions = () => {
    setIsUserOptionsOpen(!isUserOptionsOpen);
  };



  const handleLogout = async () => {
    try {
      // Send a request to the logout route on your server
      await axios.post("/api/logout");

      // Clear user data from the client-side state or storage
      // For example, using Redux:
      dispatch(logoutUser());

      // Redirect the user to the login page or another appropriate page
      navigate("/login");
    } catch (err) {
      console.error(err);
      // Handle the error appropriately (e.g., display an error message)
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 md:px-0 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-5">
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 fill-current text-blackGreen" />
              ) : (
                <FaBars className="h-6 w-6 fill-current text-blackGreen" />
              )}
            </button>
            <Link
              to="/"
              className={`hidden md:flex items-center text-blackGreen text-lg ${
                isMenuOpen ? "hidden" : ""
              }`}
            >
              <IoAirplane className="mr-1 text-2xl" />
              Find Flight
            </Link>
            <Link
              to="/"
              className={`hidden md:flex items-center text-blackGreen text-lg ${
                isMenuOpen ? "hidden" : ""
              }`}
            >
              <IoBed className="mr-1 text-2xl" />
              Find Stays
            </Link>
          </div>

          <Link to="/">
            <img src={logo} className="w-24 md:w-28" alt="Logo" />
          </Link>

          <div className="flex gap-6">
            <Link to="/favorites">
              <div className="hidden md:flex items-center space-x-1">
                <FaHeart className="text-xl text-blackGreen" />
                <span className="text-sm md:text-base">Favourites</span>
                <span className="text-lg">|</span>
              </div>
            </Link>

            {user && (
              <div className="relative">
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={toggleUserOptions}
                >
                  <img
                    src={user.profilePicture}
                    alt={`Profile of ${user.name}`}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-blackGreen font-semibold hidden md:flex">
                    {user.name}
                  </span>
                </button>
                {isUserOptionsOpen && (
                  <UserOptions user={user} logout={handleLogout} />
                )}
              </div>
            )}
          </div>
        </div>
        {/* Collapsible menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer"
            >
              <div className="flex items-center">
                <IoAirplane className="mr-2 text-2xl" />
                <span>Find Flight</span>
              </div>
            </Link>
            <Link
              to="/"
              className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer"
            >
              <div className="flex items-center">
                <IoBed className="mr-2 text-2xl" />
                <span>Find Stays</span>
              </div>
            </Link>
            <Link
              to="/"
              className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer"
            >
              <div className="flex items-center">
                <FaHeart className="mr-2 text-2xl" />
                <span>Favourites</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

AccountsNav.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func.isRequired,
};

export default AccountsNav;
