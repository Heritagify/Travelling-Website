import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from "../../assets/footLogo.png";
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AccountsNav = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <div className="hidden md:flex items-center space-x-1">
              <FaHeart className="text-xl text-blackGreen" />
              <span className="text-sm md:text-base">Favourites</span>
              <span className="text-lg">|</span>
            </div>
  
            {user && (
              <div className="flex items-center gap-1">
                <img
                  src={user.profilePicture}
                  alt={`Profile of ${user.name}`}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="text-blackGreen font-semibold hidden md:flex">{user.name}</span>
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
};

export default AccountsNav;
