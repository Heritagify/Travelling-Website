import React from 'react';
import PropTypes from 'prop-types';
import logo from "../../assets/footLogo.png";
import { FaHeart } from 'react-icons/fa6';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AccountsNav = ({ user }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex justify-between items-center mx-8">
        <div className='flex justify-between space-x-5'>
            <li className="flex py-4 text-blackGreen text-lg">
              <IoAirplane className="mr-1 text-2xl" />
              Find Flight
            </li>
            <li className="flex py-4 text-blackGreen text-lg">
              <IoBed className="mr-1 text-2xl" />
              Find Stays
            </li>
        </div>

        <Link to="/">
            <img src={logo} className='w-28'/>
          </Link>

        <div className='flex items-center space-x-3'>
          <div className='flex space-x-1 items-center'>
            <FaHeart className='text-xl text-blackGreen' />
            <ul className='text-sm'>Favourites</ul>
            <span className='text-2xl'>|</span>
          </div>
          {user && (
            <div className="flex items-center gap-1">
              <img
                src={user.profilePicture}
                alt={`Profile of ${user.name}`}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="text-blackGreen font-semibold">{user.name}</span>
            </div>
          )}
        </div>
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
