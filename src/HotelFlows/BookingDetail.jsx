import React, { useState } from 'react';
import AccountsNav from '../components/Headers/AccountsNav';
import profilePicture from "../assets/user.png";
import cvk from "../assets/cvk.png"
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import Footer from '../components/Footer';






const BookingDetail = () => {
  // Assume you have user information stored in state
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });

  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

   // Function to handle click events for the first item
   const handleClick1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false); // Ensure only one item is selected at a time
  };

  const handleClick2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false); // Ensure only one item is selected at a time
  };

  return (
    <div>
      <AccountsNav user={user} />
      <div className='bg-gray-100 pt-24'>
        <p className='flex items-center mx-20 space-x-1 font-monts font-medium text-sm'>
          <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
          <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
          CVK Park Bosphorus Hotel Istanbul
        </p>
        <div className='flex bder-2 border-red-500 mx- my-4'>
        {/* ---------1-------- */}
          <div className='w-3/5 px-16 space-y-5'>
            <div className='bg-white shadow-sm p-4 py-7 shadow-gray-400 rounded-lg text-blackGreen space-y-2'>
              <div className='flex justify-between items-center font-monts'>
                <p className='font-semibold text-xl text-blackGreen w-2/3'>Superior room - 1 double bed or 2 twin beds</p>
                <p className='text-red-500 font-semibold text-xl'>$240<span className='text-xs'>/night</span></p>
              </div>
              <div className='flex border border-mintGreen space-x-2 rounded-lg'>
                <img
                  src={cvk}
                  alt='Cvk park'
                />
                <div className=''>
                  <h1 className='font-semibold font-monts'>CVK Park Bolder Hotel Istanbul
                    <span className='flex font-medium items-center text-xs gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                  </h1>
                </div>
              </div>
                <div className='flex justify-between'>
                  <h1 className='font-monts font-semibold'>Thursday, Nov 5
                  <span className='block text-gray-500 text-sm font-normal'>Check-in</span>
                  </h1>
                      <div className='flex items-center text-4xl gap-2'>
                        <HiArrowLongLeft />
                        <HiOutlineBuildingOffice2 />
                        <HiArrowLongRight />
                      </div>
                  <h1 className='font-monts font-semibold'>Thursday, Nov 10
                  <span className='block text-gray-500 text-sm font-normal'>Check-Out</span>
                  </h1>
                </div>
            </div>
              <div className='shadow-sm shadow-gray-300 rounded-xl text-blackGreen bg-white p-2 py-4 space-y-2'>
                <div className={`flex justify-between items-center p-3 font-monts rounded-xl ${isSelected1 ? 'bg-lightMint' : ''}`} onClick={handleClick1}>
                  <h1 className='2/3 font-medium gap'>Pay in full
                    <span className='block text-sm font-normal'>Pay the total and you are all set</span>
                  </h1>
                  <FaCheckCircle className={`text-lg ${isSelected1 ? 'text-green-500' : 'text-gray-300'}`} />
                </div>
              
                  <div className={`flex justify-between items-center p-3 text-blackGreen font-monts rounded-lg ${isSelected2 ? 'bg-mintGreen' : ''}`} onClick={handleClick2}>
                    <h1 className='w-4/5 font-medium'>Pay part now, part later
                      <span className='block text-xs font-monts font-medium'>Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</span>
                    </h1>
                    <FaCheckCircle className={`text-lg ${isSelected2 ? 'text-green-500' : 'text-gray-300'}`} />
                  </div>
                  </div>

                  <div className='shadow-sm shadow-gray-300 rounded-xl text-blackGreen bg-white p-2 py-4 space-y-4'>
                    <p className='text-2xl font-monts font-semibold'>Login or sign up to book</p>
                    <input
                      type='number'
                      placeholder='Phone Number'
                      className='w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none placeholder:text-sm'
                    />
                    <p className='text-xs text-black font-monts'>We will call or text you to confirm your number. Standard message and data rate applies.<span className='text-semibold'>Privacy policy</span></p>
                    <button className='rounded-md bg-mintGreen w-full p-2 text-semibold text-black hover:bg-lightMint hover:text-blackGreen'>Continue</button>

                  <div className="flex items-center py-3">
                              <div className="w-1/2 border-t border-blue-300"></div>
                              <div className="mx-2 text-md font-monts font-medium text-gray-400">or</div>
                              <div className="w-1/2 border-t border-blue-300"></div>
                          </div>

                    {/* -----------OTHER LOGIN OPTIONS----------- */}
                    <div className="flex justify-center space-x-9">
                        <button
                          className="text-blue-400 px-2 border rounded-xl border-blue-300">
                          < FaFacebook  className="text-xl animate-bounce"/>
                          </button>
                        <button
                          className="text-rainbow p-3 rounded-full border border-emerald-500">
                            < FaGooglePlusG className="text-red-400 text-xl animate-bounce"/>
                          </button>
                        <button
                          className=" p-3 border border-blue-300 rounded-full">
                          <FaApple className="text-xl animate-bounce" />
                        </button>
                    </div>
                    <button className='w-full flex items-center justify-center gap-2 rounded-md border border-mintGreen p-2 text-bold text-blackGreen hover:bg-blackGreen hover:text-mintGreen'><MdMarkEmailUnread className='text-2xl'/>Continue with Email</button>
                  </div>
                </div>

                {/* ---------------2----------- */}
                <div className=''>
                </div>
              </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingDetail;
