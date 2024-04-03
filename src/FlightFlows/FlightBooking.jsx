import React, { useState } from 'react';
import AccountsNav from '../components/Headers/AccountsNav';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import profilePicture from "../assets/user.png";
import emirate from "../assets/emirates-airline.png"
import bosphorus from '../assets/bosphorus.png'
import { MdOutlineChevronRight } from "react-icons/md";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { IoAirplane } from "react-icons/io5";
import { RiTimerFill } from "react-icons/ri";
import Footer from '../components/Footer';






const FlightBooking = () => {
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

  const [value, setValue] =useState()

  return (
    <div className='bg-gray-200'>
      <AccountsNav user={user} />
      <div className=' pt-24 mb-10'>
      <p className='flex items-center mx-4 md:mx-20 space-x-2 md:space-x-1 font-monts text-sm md:text-sm font-semibold md:font-medium'>
            <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
            <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
            CVK Park Bosporus Hotel Istanbul
            </p>
        <div className='flex mx-12 mt-4 pb-14'>
        {/* ---------1-------- */}
          <div className='w-3/5 px-16 space-y-5'>
            <div className='bg-white shadow-sm p-4 py-7 rounded-lg text-blackGreen space-y-2'>
              <div className='flex justify-between items-center font-monts'>
                <p className='font-semibold text-xl text-blackGreen w-2/3'>Emirates A380 Airbus</p>
                <p className='text-red-500 font-semibold text-xl'>$240<span className='text-xs'>/night</span></p>
              </div>
              <div className='flex justify-between'>
                <p className='font-monts text-sm text-blackGreen font-medium'>Return Thur, Jul 10</p>
                <p className='font-monts text-sm text-blackGreen font-medium'>2h 25m</p>
              </div>
                <div className='flex justify-between rounded-lg p-2'>
                    <div className='flex p-1 px-4 gap-4 border border-mintGreen rounded'>
                        <img
                        src={emirate}
                        alt='Emirates'
                        className='w-9 h-9 '
                        />
                        <div className=''>
                            <h1 className='font-medium tracking-wider font-monts text-lg'>Emirates</h1>
                            <span className='flex items-center font-sans text-xs gap-1'><FaLocationDot />Airbus CV237</span>
                        </div>
                    </div>
                    <div className='flex border-2 border-dotted border-blue-500 items-center space-x- p-1'>
                        <button><GiAirplaneDeparture className='tex-xl w-14 h-8 p-2 border-r-2 border-gray-100'/></button>
                        <button><IoWifi className='tex-xl w-14 h-8 p-2 border-r-2 border-gray-100'/></button>
                        <button><RiTimerFill className='tex-xl w-14 h-8 p-2 border-r-2 border-gray-100'/></button>
                        <button><IoFastFood className='tex-xl w-14 h-8 p-2 border-r-2 border-gray-100'/></button>
                        <button><MdAirlineSeatReclineExtra className='tex-xl w-14 h-8 p-2 border-r-2 border-gray-100'/></button>
                    </div>
                </div>
                <div className='flex justify-between'>
                  <h1 className='flex items-center font-monts font-semibold gap-2'>12:00 pm
                  <span className='block text-gray-500 text-xs font-normal'>Newark(EWR)</span>
                  </h1>
                      <div className='flex items-center text-4xl gap-5'>
                        <HiArrowLongLeft className='text-3xl font-lighter'/>
                        <IoAirplane />
                        <HiArrowLongRight className='text-3xl font-lighter'/>
                      </div>
                  <h1 className='flex items-center font-monts font-semibold gap-1'>04:00 pm
                  <span className='block text-gray-500 text-xs font-normal'>Newark(EWR)</span>
                  </h1>
                </div>
            </div>
              <div className='shadow-sm shadow-gray-300 rounded-xl text-blackGreen bg-white p-2 py-4 space-y-2'>
                <div className={`flex justify-between items-center p-3 font-monts rounded-xl ${isSelected1 ? 'bg-mintGreen' : ''}`} onClick={handleClick1}>
                  <h1 className='2/3 font-medium gap'>Pay in full
                    <span className='block text-sm font-normal'>Pay the total and you are all set</span>
                  </h1>
                  <FaCheckCircle className={`text-lg ${isSelected1 ? 'text-green-500' : 'text-gray-300'}`} />
                </div>
                  <div className={`flex justify-between items-center p-3 text-blackGreen font-monts rounded-lg ${isSelected2 ? 'bg-mintGreen' : ''}`} onClick={handleClick2}>
                    <h1 className='w-4/5 font-medium'>Pay part now, part later
                      <span className='block text-xs font-serif font-medium'>Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</span>
                    </h1>
                    <FaCheckCircle className={`text-lg ${isSelected2 ? 'text-green-500' : 'text-gray-300'}`} />
                  </div>
                  </div>

                  <div className='shadow-md rounded-2xl text-blackGreen bg-white p-6 py-4 space-y-4'>
                    <p className='text-2xl font-monts font-semibold'>Login or sign up to book</p>
                    <PhoneInput
                      placeholder='Phone Number'
                      value={value}
                      onChange={setValue}
                      defaultCountry='US'
                      className=' border-gray-400 p-2 rounded-md border-2 focus:border-none placeholder:text-sm'
                    />
                    <p className='text-xs text-black font-monts'>We will call or text you to confirm your number. Standard message and data rate applies.<span className='text-semibold'>Privacy policy</span></p>
                    <button className='rounded-md bg-mintGreen w-full p-2 text-bold text-black hover:bg-blackGreen hover:text-lightMint'>Continue</button>

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
                <div className='w-2/6 h-1/2 shadow-md bg-white p-4 rounded-xl'>
                  <div className='flex space-x-5 pb-4 border-b border-gray-200 text-blackGreen'>
                    <img
                      src={bosphorus}
                      alt='an hotel with pool and blue sky'
                      className='w-1/4 rounded-md '
                    />
                    <div className=' text-blackGreen'>
                      <p className=''>Economy</p>
                      <h1 className='font-bold font-monts mb-2'>Emirates A380 Airbus</h1>
                      <div className='flex'>
                        <p className='border-2 border-lightMint rounded-md p-1 px-3 text-xs'>4.2</p>
                        <p className=''><span className='font-semibold text-sm px-2'>Very good</span>reviews</p>
                      </div>
                    </div>

                  </div>
                  <h1 className='py-2 text-sm font-monts font-medium'>Your booking is protected by Heritagify</h1>
                  <div className='border-t border-gray-200'>
                    <p className='text-blackGreen font-monts font-semibold py-2'>Price Details</p>
                    <p className='flex justify-between text-blackGreen text-sm py-1 font-medium font-monts'>Base Fare<span className='font-semibold'>$600</span></p>
                    <p className='flex justify-between text-blackGreen text-sm py-1 font-medium font-monts'>Discount<span className='font-semibold'>%10</span></p>
                    <p className='flex justify-between text-blackGreen text-sm py-1 font-medium font-monts'>Taxes<span className='font-semibold'>%20</span></p>
                    <p className='flex justify-between text-blackGreen text-sm py-1 font-medium font-monts pb-1'>Service Fee<span className='font-semibold'>$150</span></p>
                    <p className='flex justify-between text-blackGreen text-sm py-1 font-medium font-monts border-t-2 border-gray-200 pt-1'>Total<span className='font-semibold'>$265</span></p>
                  </div>
                </div>
              </div>
      </div>
        <Footer />
    </div>
  );
};

export default FlightBooking;
