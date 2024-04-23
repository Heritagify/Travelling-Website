import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from "../../assets/footLogo.png";
import { FaHeart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { MdPayments } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
// import { RiLogoutCircleFill } from "react-icons/ri";


// const AccountsNav = ({ user, logout }) => {
const AccountsNav = ({ user}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleUserOptions = () => {
    setIsUserOptionsOpen(!isUserOptionsOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 md:px-0 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-5">
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="h-6 w-6 fill-current text-blackGreen" /> : <FaBars className="h-6 w-6 fill-current text-blackGreen" />}
            </button>
            <Link to="/" className={`hidden md:flex items-center text-blackGreen text-lg ${isMenuOpen ? 'hidden' : ''}`}>
              <IoAirplane className="mr-1 text-2xl" />
              Find Flight
            </Link>
            <Link to="/" className={`hidden md:flex items-center text-blackGreen text-lg ${isMenuOpen ? 'hidden' : ''}`}>
              <IoBed className="mr-1 text-2xl" />
              Find Stays
            </Link>
          </div>

          <Link to="/">
            <img src={logo} className="w-24 md:w-28" alt="Logo" />
          </Link>

          <div className='flex gap-6'>
            <Link to='/favorites'>
              <div className="hidden md:flex items-center space-x-1">
                <FaHeart className="text-xl text-blackGreen" />
                <span className="text-sm md:text-base">Favourites</span>
                <span className="text-lg">|</span>
              </div>
            </Link>

            {user && (
              <div className="relative">
                <button className="flex items-center gap-1 cursor-pointer" onClick={toggleUserOptions}>
                  <img
                    src={user.profilePicture}
                    alt={`Profile of ${user.name}`}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-blackGreen font-semibold hidden md:flex">{user.name}</span>
                </button>
                {isUserOptionsOpen && (
                  <div className="absolute right-0 sm:right-5 lg:right-0 top-full mt-2 w-52 md:w-64 lg:w-48 bg-mintGreen shadow shadow-green-700 rounded-lg">
                    <div className="flex items-center justify-between p-4">
                      <div className='flex items-center'>
                        <img src={user.profilePicture} alt={`Profile of ${user.name}`} className="w-14 lg:w-10 h-14 lg:h-10 rounded-full mr-2" />
                        <span className="lg:text-sm font-semibold">{user.name}</span>
                      </div>
                      <span className="w-3 lg:w-2 h-3 lg:h-2 rounded-full bg-green-500"></span> {/* Online status indicator */}
                    </div>
                    <Link to="/account" className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"><FaUser className='md:text-xl lg:text-sm'/>My Account</Link>
                    <Link to="/payments" className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"><MdPayments className='md:text-xl lg:text-sm'/>Payments</Link>
                    <Link to="/settings" className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"><RiUserSettingsFill className='md:text-xl lg:text-sm'/>Settings</Link>
                    <Link to="/support" className="flex items-center gap-1 py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9"><FcCustomerSupport className='md:text-xl lg:text-sm'/>Support</Link>
                    {/* <button className="flex items-center gap-1 w-full text-left py-2 px-3 text-sm md:text-lg lg:text-xs font-medium md:font-semibold lg:font-medium font-monts hover:bg-blackGreen hover:text-mintGreen hover:px-9 focus:outline-none" onClick={logout}><RiLogoutCircleFill className='md:text-xl lg:text-sm'/>Logout</button> */}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Collapsible menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Link to="/" className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer">
              <div className="flex items-center">
                <IoAirplane className="mr-2 text-2xl" />
                <span>Find Flight</span>
              </div>
            </Link>
            <Link to="/" className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer">
              <div className="flex items-center">
                <IoBed className="mr-2 text-2xl" />
                <span>Find Stays</span>
              </div>
            </Link>
            <Link to="/" className="block p-3 px-5 text-blackGreen text-md hover:bg-blackGreen hover:text-mintGreen rounded-xl cursor-pointer">
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
  // logout: PropTypes.func.isRequired,
};

export default AccountsNav;
