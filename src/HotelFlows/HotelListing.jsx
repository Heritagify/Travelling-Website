import React from 'react'
import AccountNav from "../components/Headers/AccountsNav"
import Footer from '../components/Footer';

// Icons---------
import { MdOutlineChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';
import { BsStars } from "react-icons/bs";


// images
import bosphorus from '../../src/assets/bosphorus.png';
import hotelRoom1 from "../../src/assets/hotelRoom1.png"
import hotelRoom2 from "../../src/assets/hotelRoom2.png"
import hotelRoom3 from "../../src/assets/hotelRoom3.png"
import hotelRoom4 from "../../src/assets/hotelRoom4.png"




const HotelListing = () => {
  return (
    <div className='bg-gray-300 md:bg-gray-100 pt-20'>
      <AccountNav />
      <div className=''>
        <p className='flex items-center mx-20 space-x-1 font-monts font-medium text-sm'>
          <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
          <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
          CVK Park Bosphorus Hotel Istanbul
        </p>
        <div className='flex justify-between mx-20 my-5'>
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

        <div className='md:flex justify-center md:gap-2 mx-4 md:mx-20'>
            <img
              src={bosphorus}
              alt=''
              className='mb-2 md:mb-0'
            />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2'>
            <img
              src={hotelRoom1}
              alt=''
              className='w-full md:w-80 h-60 rounded-xl'
            />
            <img
              src={hotelRoom2}
              alt=''
              className='w-full md:w-80 h-60 rounded-xl'
            />
            <img
              src={hotelRoom3}
              alt=''
              className='w-full md:w-80 h-60 rounded-xl'
            />
            <img
              src={hotelRoom4}
              alt=''
              className='w-full md:w-80 h-60 rounded-xl'
            />
          </div>
        </div>

      </div>
      <div className='mx-5 md:mx-20 my-7 border-b-2 border-gray-300 pb-12'>
        <h2 className='text-3xl md:text-2xl text-center text-blackGreen font-semibold'>Overview</h2>
        <p className='my-3 font-mont text-md md:text-xs font-medium'>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from 
          the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and
          is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites,
          8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view,
          Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure,
          CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city.
          Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites,
          are offered to its special guests as a wide variety of selection.
        </p>
        <div className='md:flex gap-2 mx-20 md:mx-0 space-y-2 md:space-y-0'>
          <div className='text-blackGreen font-monts bg-mintGreen rounded-lg p-2 pr-9'>
            <h1 className='text-3xl font-bold mb-4'>4.2</h1>
            <h2 className='font-semibold text-xs'>Very good</h2>
            <p className='text-xs my-1'>371 reviews</p>
          </div>
          <div className='text-blackGreen space-y-10 font-monts border-2 border-mintGreen rounded-lg p-2 pr-10 '>
            <h1 className='text-3xl font-bold'><BsStars /></h1>
            <h2 className='font-semibold text-xs'>Near park</h2>
          </div>
          <div className='text-blackGreen font-monts border-2 border-mintGreen space-y-10 rounded-lg p-2 pr-4 '>
            <h1 className='text-3xl font-bold mb-4'><BsStars /></h1>
            <h2 className='font-semibold text-xs'>Near nightLife</h2>
          </div>
          <div className='text-blackGreen font-monts border-2 border-mintGreen space-y-10 rounded-lg p-2 pr-7 '>
            <h1 className='text-3xl font-bold mb-4'><BsStars /></h1>
            <h2 className='font-semibold text-xs'>Near Theater</h2>
          </div>
          <div className='text-blackGreen font-monts border-2 border-mintGreen space-y-10 rounded-lg p-2 pr-8 '>
            <h1 className='text-3xl font-bold mb-4'><BsStars /></h1>
            <h2 className='font-semibold text-xs'>Clean hotel</h2>
          </div>
        </div>
      </div>

      <div className=' space-y-2'>
        <h1 className='text-3xl md:text-2xl text-center text-blackGreen font-semibold'>Available rooms</h1>
        <div className='md:flex md:justify-between font-monts text-blackGreen border-b-2 py-2 items-center mx-8 md:mx-20 space-y-1 md:space-y-0'>
          <div className='flex space-x-3 items-center'>
            <img
              src={hotelRoom1}
              alt=''
              className='w-20 md:w-14'
            />
            <p className='font-semibold text-sm'>Superior room - 1 double bed or 2 twin beds</p>
          </div>
          <div className='flex space-x-5 md:space-x-12 ml-16 md:ml-0 items-center'>
            <p className="text-blackGreen font-semibold text-xl tracking-wider text-end">$240<span className="text-xs">/night</span></p>
            <button className=' bg-mintGreen px-7 text-xs p-3 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>
          </div>
        </div>
        <div className='flex justify-between font-monts text-blackGreen border-b-2 py-2  items-center mx-20'>
          <div className='flex space-x-3 items-center'>
            <img
              src={hotelRoom2}
              alt=''
              className='w-14'
            />
            <p className='font-semibold text-sm'>Superior room - 1 double bed or 2 twin beds</p>
          </div>
          <div className='flex space-x-12 items-center'>
            <p className="text-blackGreen font-semibold text-xl tracking-wider text-end">$280<span className="text-xs">/night</span></p>
            <button className=' bg-mintGreen px-7 text-xs p-3 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>
          </div>
        </div>
        <div className='flex justify-between font-monts text-blackGreen border-b-2 py-2 items-center mx-20'>
          <div className='flex space-x-3 items-center'>
            <img
              src={hotelRoom3}
              alt=''
              className='w-14'
            />
            <p className='font-semibold text-sm'>Superior room - 1 double bed or 2 twin beds</p>
          </div>
          <div className='flex space-x-12 items-center'>
            <p className="text-blackGreen font-semibold text-xl tracking-wider text-end">$300<span className="text-xs">/night</span></p>
            <button className=' bg-mintGreen px-7 text-xs p-3 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>
          </div>
        </div>
        <div className='flex justify-between font-monts text-blackGreen border-b-2 py-2 items-center mx-20'>
          <div className='flex space-x-3 items-center'>
            <img
              src={hotelRoom4}
              alt=''
              className='w-14'
            />
            <p className='font-semibold text-sm'>Superior room - 1 double bed or 2 twin beds</p>
          </div>
          <div className='flex space-x-12 items-center'>
            <p className="text-blackGreen font-semibold text-xl tracking-wider text-end">$350<span className="text-xs">/night</span></p>
            <button className=' bg-mintGreen px-7 text-xs p-3 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HotelListing
