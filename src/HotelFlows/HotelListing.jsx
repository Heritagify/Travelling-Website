import React from 'react'
import AccountNav from "../components/Headers/AccountsNav"

// Icons---------
import { MdOutlineChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';

// images
import bosphorus from '../../src/assets/bosphorus.png';
import hotelRoom1 from "../../src/assets/hotelRoom1.png"
import hotelRoom2 from "../../src/assets/hotelRoom2.png"
import hotelRoom3 from "../../src/assets/hotelRoom3.png"
import hotelRoom4 from "../../src/assets/hotelRoom4.png"




const HotelListing = () => {
  return (
    <div className='bg-gray-200 pt-20'>
      <AccountNav />
      <div className=''>
        <p className='flex items-center mx-20 space-x-1 font-monts font-medium text-sm'>
          <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
          <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
          CVK Park Bosphorus Hotel Istanbul
        </p>
        <div className='flex justify-between mx-20 mt-5'>
          <div className='space-y-2'>
            <div className='flex gap-3'>
              <h1 className='font-semibold text-xl font-monts'>CVK Park Bolder Hotel Istanbul</h1>
              <div className='flex gap-2 items-center'>
                <div className="flex text-xs text-red-400">
                  <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                </div>
                <p className="text-sm font-medium">5 star hotel</p>
              </div>
            </div>
            <span className='flex font-medium items-center text-sm gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
            <div className="flex text-blackGreen items-center space-x-1 ">
              <p className="border border-mintGreen rounded-md px-2 py-1 text-xs font-medium font-monts">4.2</p>
              <p className="text-xs font-semibold">Very good</p>
              <p className="text-xs">371 reviews</p>
            </div>
          </div>
            <div className='space-y-2'>
              <p className="text-red-400 font-semibold text-3xl tracking-wider text-end">$240<span className="text-xs">/night</span></p>
              <div className='flex items-center space-x-2'>
              
              <button className='border border-mintGreen p-2 rounded-lg hover:bg-blackGreen hover:text-mintGreen'><FaHeart /></button>
              <button className='border border-mintGreen p-2 rounded-lg hover:bg-blackGreen hover:text-mintGreen'><IoShareSocial/></button>
              
              <button className=' bg-mintGreen px-7 text-sm p-2 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>

              </div>

            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-0 border-4 mx-2 md:mx-20 border-red-500'>
          <img
            src={bosphorus}
            alt=''
            className='col-span-2 md:col-auto md:row-span-2 h-full'
          />
          <img
            src={hotelRoom1}
            alt=''
            className=''
          />
          <img
            src={hotelRoom2}
            alt=''
            className=''
          />
          <img
            src={hotelRoom3}
            alt=''
            className=''
          />
          <img
            src={hotelRoom4}
            alt=''
            className=''
          />
        </div>
      </div>
    </div>
  )
}

export default HotelListing
