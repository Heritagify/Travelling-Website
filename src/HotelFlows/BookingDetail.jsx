import React, { useState } from 'react';
import AccountsNav from '../components/Headers/AccountsNav';
import profilePicture from "../assets/user.png";
import cvk from "../assets/cvk.png"
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"; <HiOutlineBuildingOffice2 />
// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"; <HiArrowLongLeft /> <HiArrowLongRight />







const BookingDetail = () => {
  // Assume you have user information stored in state
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });

  return (
    <div>
      {/* <AccountsNav user={user} /> */}
      <p className='flex items-center space-x-1'>
        <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
        <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
        CVK Park Bosphorus Hotel Istanbul
      </p>

      <div className=' flex border-4 border-red-500'>
      {/* ---------1-------- */}
        <div className='border-4 border-green-500 text-blackGreen rounded-sm'>
          <div className='flex justify-between'>
            <p>Superior room - 1 double bed or 2 twin beds</p>
            <p className='text-red-500'>$240 <span>/night</span></p>
          </div>
          <div className='flex border-2 border-lightMint'>
            <img
              src={cvk}
              alt='Cvk park'
            />
            <div className=''>
              <h1>CVK Park Bosphorus Hotel Istanbul</h1>
              <p> Gummusuyu Mah.Inonu Cad. No8, Istanbul 34437</p>
            </div>
            <div></div>
          </div>

        </div>

        {/* ---------------2----------- */}
        <div className=''></div>

      </div>
    </div>
  );
};

export default BookingDetail;
