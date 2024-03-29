import React, { useState } from 'react';
import AccountsNav from '../components/Headers/AccountsNav';
import profilePicture from '../assets/user.png';
import bosphorus from '../../src/assets/bosphorus.png';
import Eresin from '../../src/assets/eresin.png';
import Eresin2 from '../../src/assets/eresin2.png';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosStar } from 'react-icons/io';
import { RiCupFill } from 'react-icons/ri';
import { FaHeart } from 'react-icons/fa';
import Footer from '../components/Footer';

const Favourite = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });

  return (
    <div className="bg-gray-100">
      <AccountsNav user={user} />
      <div className="pt-24 lg:pt-20">
        <h1 className="text-3xl mx-5 md:mx-24 font-bold font-monts text-blackGreen">Favourites</h1>
        <ul className="flex justify-between items-center my-4 mx-6 lg:mx-32 bg-white shadow-sm md:shadow-sm shadow-gray-500 text-blackGreen rounded-lg">
          <li className="w-full font-monts p-2 font-semibold text-md">Flights</li>
          <span className="text-gray-100 font-lighter text-4xl">|</span>
          <li className="w-full font-monts p-3 font-semibold text-md">Places</li>
        </ul>
        <div className="flex flex-col space-y-4 pb-10 mx-3 lg:mx-32">
          {/* ----------1_-------- */}
          <div className="md:flex bg-white rounded-lg">
            <img
              src={bosphorus}
              alt="CVK Park Bolder Hotel Istanbul"
              className="md:w-72 md:h-fill rounded-lg md:rounded"
            />
            <div className="w-full p-3 space-y-2 shadow-sm shadow-gray-300 rounded-lg">
              <div className="pb-3 border-b-2 text-blackGreen leading-9 w-full">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="font-semibold font-monts text-lg tracking-wider">CVK Park Bolder Hotel Istanbul</h1>
                    <span className="flex font-medium font-monts items-center text-xs gap-1"><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                    <div className="sm:flex space-x-1 items-center">
                      <div className='flex gap-2 items-center'>
                        <div className="flex text-xs text-red-400">
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className="text-sm font-medium">5 star hotel</p>
                      </div>
                      <p className="flex gap-2 text-sm mx-5">
                        <span className="flex sm:ml-2 font-semibold gap-1 items-center"><RiCupFill /> 20+</span>Amenities
                      </p>
                    </div>
                    <div className="flex text-blackGreen items-center space-x-1 ">
                      <p className="border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts">4.2</p>
                      <p className="text-xs font-semibold">Very good</p>
                      <p className="text-xs">371 reviews</p>
                    </div>
                  </div>
                  <div className="px-3 font-monts">
                    <p className="text-sm">starting from</p>
                    <p className="text-red-500 font-semibold text-2xl tracking-wider">$240<span className="text-xs">/night</span></p>
                    <p className="text-xs flex justify-end">excl.Tax</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="border border-mintGreen p-3 rounded-md text-sm"><FaHeart /></button>
                <button className="w-full bg-mintGreen text-sm p-3 font-semibold rounded-md">View Place</button>
              </div>
            </div>
          </div>
          {/* -----------2------------ */}
          <div className="md:flex bg-white rounded-lg">
            <img
              src={Eresin}
              alt="Eresin Hotel"
              className="md:w-72 md:h-fill rounded-lg md:rounded"
            />
            <div className="w-full p-3 space-y-2 shadow-sm shadow-gray-300 rounded-lg">
              <div className="border-b-2 text-blackGreen leading-9 w-full">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="font-semibold font-monts text-lg tracking-wider">Eresin Hotel</h1>
                    <span className="flex font-medium font-monts items-center text-xs gap-1"><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                    <div className="sm:flex space-x-1 items-center">
                      <div className='flex gap-2 items-center'>
                        <div className="flex text-xs text-red-400">
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className="text-sm font-medium">4 star hotel</p>
                      </div>
                      <p className="flex gap-2 text-sm mx-5">
                        <span className="flex ml-2 font-semibold gap-1 items-center"><RiCupFill /> 15+</span>Amenities
                      </p>
                    </div>
                    <div className="flex text-blackGreen items-center space-x-1 ">
                      <p className="border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts">4.0</p>
                      <p className="text-xs font-semibold">Good</p>
                      <p className="text-xs">250 reviews</p>
                    </div>
                  </div>
                  <div className="px-3 font-monts">
                    <p className="text-sm">starting from</p>
                    <p className="text-red-500 font-semibold text-2xl tracking-wider">$200<span className="text-xs">/night</span></p>
                    <p className="text-xs flex justify-end">excl.Tax</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="border border-mintGreen p-3 rounded-md text-sm"><FaHeart /></button>
                <button className="w-full bg-mintGreen text-sm p-3 font-semibold rounded-md">View Place</button>
              </div>
            </div>
          </div>
          {/* ---------------------3---------------- */}
          <div className="md:flex bg-white rounded-lg">
            <img
              src={Eresin2}
              alt="Eresin Hotels"
              className="md:w-72 md:h-fill rounded-lg md:rounded"
            />
            <div className="w-full p-3 py-2 space-y-4 rounded-lg">
              <div className="pb-3 border-b-2 text-blackGreen leading-9 w-full">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="font-semibold font-monts text-lg tracking-wider">Eresin Hotels</h1>
                    <span className="flex font-medium font-monts items-center text-xs gap-1"><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                    <div className="sm:flex space-x-1 items-center">
                      <div className='flex gap-2 items-center'>
                        <div className="flex text-xs text-red-400">
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className="text-sm font-medium">5 star hotel</p>
                      </div>
                      <p className="flex gap-1 text-sm mx-5">
                        <span className="flex ml-2 font-semibold gap-1 items-center"><RiCupFill /> 20+</span>Amenities
                      </p>
                    </div>
                    <div className="flex text-blackGreen items-center space-x-1 ">
                      <p className="border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts">4.5</p>
                      <p className="text-xs font-semibold">Excellent</p>
                      <p className="text-xs">480 reviews</p>
                    </div>
                  </div>
                  <div className="px-3 font-monts">
                    <p className="text-sm">starting from</p>
                    <p className="text-red-500 font-semibold text-2xl tracking-wider">$300<span className="text-xs">/night</span></p>
                    <p className="text-xs flex justify-end">excl.Tax</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="border border-mintGreen p-3 rounded-md text-sm"><FaHeart /></button>
                <button className="w-full bg-mintGreen text-sm p-3 font-semibold rounded-md">View Place</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourite;
