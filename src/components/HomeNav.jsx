import { useState } from 'react';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Spinner from "../components/Spinner"

import logo from '../assets/heritagifyLogo1.png';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggle }) => (
  <div className={`fixed inset-0 bg-blackGreen bg-opacity-90 z-50 ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex justify-end p-4">
      <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggle} />
    </div>
    <div className="flex flex-col items-center">
      <img src={logo} alt="Logo" className="mb-4" />
      <h1 className="flex text-white text-2xl mb-4">
        <IoAirplane className="mr-2" />
        Find Flight
      </h1>
      <h1 className="flex text-white hover:bg-mintGreen hover:p-2 text-2xl mb-4">
        <IoBed className="mr-2" />
        Find Stays
      </h1>
      <div className=" font-bold space-x-5 items-center space-y-2">
        <Link to="../login" className=" text-white px-8 text-center border-2 rounded-3xl py-2">LOGIN</Link>
          <Link to="/signUp.jsx">
          <button className="text-blackGreen bg-white rounded-3xl px-10 py-2">Sign Up</button>
          </Link>
      </div>
    </div>
  </div>
);

const HomeNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className="relative">
      {/* Mobile Navigation */}
      <div className="sm:hidden absolute flex justify-between w-96 top-5 left-5">
        <img src={logo} alt="Logo" />
        <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileNav} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex text-white justify-between p-2 items-center">
        <div className="flex space-x-5">
          <Link to="/flight" className="cursor-pointer flex space-x-3">
            <IoAirplane className="text-white text-2xl" />Find Flight
          </Link>
          <h1 className="flex space-x-4">
            <IoBed className="text-white text-2xl" />Find Stays
          </h1>
        </div>
        <div className="flex justify-center space-x-5">
        <img src={logo} className='w-40 shadow-md px-2 shadow-teal-900'/>
        </div>
        <div className="flex font-bold space-x-5 items-center">
          <Link to="/login">
            <button className="cursor-pointer font-monts">LOGIN</button>
          </Link>
          <Link to="/signUp">
            <button className="text-blackGreen font-bold bg-white rounded-md p-1">Sign Up</button>
          </Link>
        </div>
      </nav>

      <MobileNav isOpen={mobileNavOpen} toggle={toggleMobileNav} />
    </div>
  );
};

export default HomeNav;
