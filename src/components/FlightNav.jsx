import { useState } from 'react';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/footLogo.png';

const FlightNav= () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className="relative bg-white">
      {/* Mobile Navigation */}
      <div className="sm:hidden absolute flex justify-between w-96 top-5 left-5">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-24 md:w-28 cursor-pointer" aria-label="Home" />
        </Link>
        <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileNav} aria-label="Open mobile menu" />
      </div>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="sm:hidden fixed inset-0 bg-blackGreen bg-opacity-90 z-50" role="dialog" aria-modal="true">
          <div className="flex justify-end p-4">
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileNav}
              aria-label="Close mobile menu"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="flex text-white text-2xl mb-4">
              <IoAirplane className="mr-2" aria-hidden="true" /> Find Flight
            </h1>
            <h1 className="flex text-white hover:bg-mintGreen hover:p-2 text-2xl mb-4">
              <IoBed className="mr-2" aria-hidden="true" /> Find Stays
            </h1>
            <div className="font-bold space-x-5 items-center space-y-2">
              <Link to="../login" className="text-white px-8 text-center border-2 rounded-3xl py-2 cursor-pointer">
                LOGIN
              </Link>
              <Link to="/signUp.jsx">
                <button className="text-blackGreen bg-white rounded-3xl px-10 py-2 cursor-pointer">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex text-blackGreen justify-between p-3 mx-16 items-center">
        <div className="flex space-x-5">
          <h1 className="flex space-x-4 cursor-pointer">
            <IoAirplane className="text-2xl" aria-hidden="true" />
            Find Flight
          </h1>
          <h1 className="flex space-x-4 cursor-pointer">
            <IoBed className="text-2xl" aria-hidden="true" />
            Find Stays
          </h1>
        </div>
        <div className="flex justify-center space-x-5">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 md:w-28 cursor-pointer" aria-label="Home" />
          </Link>
        </div>
        <div className="flex font-bold space-x-5 items-center">
          <Link to="/login" className="font-monts text-sm border-4 cursor-pointer">
            LOGIN
          </Link>
          <Link to="/signUp">
            <button className="text-lightMint font-monts text-xs font-bold bg-blackGreen rounded-md p-3 px-5">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default FlightNav;