import { useState } from 'react';
import { IoAirplane, IoBed } from 'react-icons/io5';
import { FaTimes, FaBars } from 'react-icons/fa';

import logo from '../assets/Group.svg';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggle }) => (
  <div className={`fixed inset-0 bg-blackGreen bg-opacity-80 z-50 ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex justify-end p-4">
      <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggle} />
    </div>
    <div className="flex flex-col items-center">
      <img src={logo} alt="Logo" className="mb-4" />
      <h1 className="text-white text-2xl mb-4">
        <IoAirplane className="mr-2" />
        Find Flight
      </h1>
      <h1 className="text-white text-2xl mb-4">
        <IoBed className="mr-2" />
        Find Stays
      </h1>
      <div className="flex font-bold space-x-5 items-center">
        <p className="text-white">LOGIN</p>
        <button className="text-blackGreen bg-white rounded-md p-1">Sign Up</button>
      </div>
    </div>
  </div>
);

const Navbar1 = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className="mx-5 mt-5">
      {/* Mobile Navigation */}
      <div className="sm:hidden absolute flex justify-between w-96 top-5 left-5">
        <img src={logo} alt="Logo" />
        <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileNav} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex text-white justify-between p-2 items-center">
        <div className="flex space-x-5">
          <h1 className="flex space-x-3">
            <IoAirplane className="text-white text-2xl" />Find Flight
          </h1>
          <h1 className="flex space-x-4">
            <IoBed className="text-white text-2xl" />Find Stays
          </h1>
        </div>
        <div className="flex space-x-5">
        </div>
        <div className="flex font-bold space-x-5 items-center">
          <p className="font-monts">LOGIN</p>
          <button className="text-blackGreen font-bold bg-white rounded-md p-1">Sign Up</button>
        </div>
      </nav>

      <MobileNav isOpen={mobileNavOpen} toggle={toggleMobileNav} />
    </div>
  );
};

export default Navbar1;
