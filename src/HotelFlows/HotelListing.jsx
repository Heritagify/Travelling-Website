import React from 'react'
import AccountNav from "../components/Headers/AccountsNav"
import { MdOutlineChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';




const HotelListing = () => {
  return (
    <div>
      <AccountNav />
      <div className='mt-24'>
        <p className='flex items-center mx-20 space-x-1 font-monts font-medium text-sm'>
          <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
          <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
          CVK Park Bosphorus Hotel Istanbul
        </p>
        <div className='flex justify-between border-4 border-red-500 space-y-2'>
          <div>
            <div className='flex gap-2'>
              <h1 className='font-semibold font-monts'>CVK Park Bolder Hotel Istanbul
              </h1>
              <div className='flex gap-2 items-center'>
                <div className="flex text-xs text-red-400">
                  <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                </div>
                <p className="text-sm font-medium">5 star hotel</p>
              </div>
            </div>
            <span className='flex font-medium items-center text-xs gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
            <div className="flex text-blackGreen items-center space-x-1 ">
              <p className="border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts">4.2</p>
              <p className="text-xs font-semibold">Very good</p>
              <p className="text-xs">371 reviews</p>
            </div>
          </div>
            <div className=''>
              <p className="text-red-500 font-semibold text-2xl tracking-wider">$240<span className="text-xs">/night</span></p>
              <div className='flex items-center space-x-3'>
              <FaHeart />
              <IoShareSocial />
              <button className=' bg-mintGreen text-sm p-3 font-semibold rounded-md'>Book Now</button>

              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default HotelListing
