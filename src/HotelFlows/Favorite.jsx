import React, { useState} from 'react'
import AccountsNav from "../components/Headers/AccountsNav"
import profilePicture from "../assets/user.png";
import bosphorus from "../../src/assets/bosphorus.png";
import Eresin from "../../src/assets/eresin.png"
import Eresin2 from "../../src/assets/eresin2.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { RiCupFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import Footer from "../components/Footer"


const Favourite = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });


  return (
    <div className='bg-gray-100'>
      <AccountsNav user={user} />
      <div className='pt-20'>
        <h1 className='text-3xl mx-20 font-bold font-monts text-blackGreen'>Favourites</h1>
        <ul className='flex justify-between my-4 mx-32 bg-white shadow-sm shadow-gray-200 text-blackGreen rounded-lg'>
          <li className='w-full font-monts p-2 font-semibold text-md'>Flights</li>
          <span className='text-gray-100 font-lighter text-4xl'>|</span>
          <li className='w-full font-monts p-3 font-semibold text-md'>Places</li>
        </ul>
          <div className='space-y-4 pb-10'>
            {/* ----------1_-------- */}
            <div className='flex bg-white mx-32  rounded-lg'>
              <img
                src={bosphorus}
                alt='an hotel'
                className="w-80"
              />
              <div className='w-full p-3 space-y-4 shadow-sm shadow-gray-300 rounded-lg'>
                <div className='py-3 border-b-2 text-blackGreen leading-9 w-full'>
                  <div className='flex justify-between'>
                    <div className='space-y-3'>
                      <h1 className='font-semibold font-monts text-lg tracking-wider'>CVK Park Bolder Hotel Istanbul</h1>
                      <span className='flex font-medium font-monts items-center text-xs gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                      <div className='flex space-x-1 items-center'>
                        <div className='flex text-xs text-red-400'>
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className='text-sm font-medium'>5 star hotel</p>
                        <p className='flex gap-1 text-sm mx-5'>
                          <span className='flex ml-2 font-semibold gap-1 items-center'><RiCupFill /> 20+</span>Amenities
                        </p>
                      </div>
                      <div className='flex text-blackGreen items-center space-x-1 '>
                        <p className='border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts'>4.2</p>
                        <p className='text-xs font-semibold'>Very good</p>
                        <p className='text-xs'>371 reviews</p>
                      </div>
                    </div>
                    <div className='px-3 font-monts'>
                      <p className='text-sm'>starting from</p>
                      <p className='text-red-500 font-semibold text-2xl tracking-wider'>$240<span className='text-xs'>/night</span></p>
                      <p className='text-xs flex justify-end'>excl.Tax</p>
                    </div>
                  </div>
                </div>
                  <div className='flex items-center gap-3'>
                    <button className='border border-mintGreen p-3 rounded-md text-sm'><FaHeart /></button>
                    <button className='w-full bg-mintGreen text-sm p-3 font-semibold rounded-md'>View Place</button>
                  </div>
              </div>
            </div>
                    {/* -----------2------------ */}
            <div className='flex bg-white mx-32  rounded-lg'>
              <img
                src={Eresin}
                alt='an hotel'
                className="w-80"
              />
              <div className='w-full p-3 space-y-4 shadow-sm shadow-gray-300 rounded-lg'>
                <div className='py-3 border-b-2 text-blackGreen leading-9 w-full'>
                  <div className='flex justify-between'>
                    <div className='space-y-3'>
                      <h1 className='font-semibold font-monts text-lg tracking-wider'>CVK Park Bolder Hotel Istanbul</h1>
                      <span className='flex font-medium font-monts items-center text-xs gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                      <div className='flex space-x-1 items-center'>
                        <div className='flex text-xs text-red-400'>
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className='text-sm font-medium'>5 star hotel</p>
                        <p className='flex gap-1 text-sm mx-5'>
                          <span className='flex ml-2 font-semibold gap-1 items-center'><RiCupFill /> 20+</span>Amenities
                        </p>
                      </div>
                      <div className='flex text-blackGreen items-center space-x-1 '>
                        <p className='border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts'>4.2</p>
                        <p className='text-xs font-semibold'>Very good</p>
                        <p className='text-xs'>371 reviews</p>
                      </div>
                    </div>
                    <div className='px-3 font-monts'>
                      <p className='text-sm'>starting from</p>
                      <p className='text-red-500 font-semibold text-2xl tracking-wider'>$240<span className='text-xs'>/night</span></p>
                      <p className='text-xs flex justify-end'>excl.Tax</p>
                    </div>
                  </div>
                </div>
                  <div className='flex items-center gap-3'>
                    <button className='border border-mintGreen p-3 rounded-md text-sm'><FaHeart /></button>
                    <button className='w-full bg-mintGreen text-sm p-3 font-semibold rounded-md'>View Place</button>
                  </div>
              </div>
            </div>
                    {/* ---------------------3---------------- */}
            <div className='flex bg-white mx-32  rounded-lg'>
              <img
                src={Eresin2}
                alt='an hotel'
                className="w-80"
              />
              <div className='w-full p-3 space-y-4 shadow-sm shadow-gray-300 rounded-lg'>
                <div className='py-3 border-b-2 text-blackGreen leading-9 w-full'>
                  <div className='flex justify-between'>
                    <div className='space-y-3'>
                      <h1 className='font-semibold font-monts text-lg tracking-wider'>Eresin Hotels Sultanahmet - Boutique Class</h1>
                      <span className='flex font-medium font-monts items-center text-xs gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
                      <div className='flex space-x-1 items-center'>
                        <div className='flex text-xs text-red-400'>
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <p className='text-sm font-medium'>5 star hotel</p>
                        <p className='flex gap-1 text-sm mx-5'>
                          <span className='flex ml-2 font-semibold gap-1 items-center'><RiCupFill /> 20+</span>Amenities
                        </p>
                      </div>
                      <div className='flex text-blackGreen items-center space-x-1 '>
                        <p className='border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts'>4.2</p>
                        <p className='text-xs font-semibold'>Very good</p>
                        <p className='text-xs'>371 reviews</p>
                      </div>
                    </div>
                    <div className='px-3 font-monts'>
                      <p className='text-sm'>starting from</p>
                      <p className='text-red-500 font-semibold text-2xl tracking-wider'>$240<span className='text-xs'>/night</span></p>
                      <p className='text-xs flex justify-end'>excl.Tax</p>
                    </div>
                  </div>
                </div>
                  <div className='flex items-center gap-3'>
                    <button className='border border-mintGreen p-3 rounded-md text-sm'><FaHeart /></button>
                    <button className='w-full bg-mintGreen text-sm p-3 font-semibold rounded-md'>View Place</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Favourite;
