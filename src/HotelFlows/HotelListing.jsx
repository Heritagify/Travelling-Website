import React from 'react'
import AccountNav from "../components/Headers/AccountsNav"
import RoomItem from '../HotelFlows/RoomItems'
import Footer from '../components/Footer';

// Icons---------
import { MdOutlineChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from 'react-icons/io';
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';
import { BsStars } from "react-icons/bs";
import { MdPool } from "react-icons/md";
import { GiWineBottle } from "react-icons/gi";
import { MdSpa } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { MdRoomService } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";







// images
import bosphorus from '../../src/assets/bosphorus.png';
import hotelRoom1 from "../../src/assets/hotelRoom1.png"
import hotelRoom2 from "../../src/assets/hotelRoom2.png"
import hotelRoom3 from "../../src/assets/hotelRoom3.png"
import hotelRoom4 from "../../src/assets/hotelRoom4.png"


const rooms = [
  {
    image: hotelRoom1,
    name: 'Superior room - 1 double bed or 2 twin beds',
    price: 240,
  },
  {
    image: hotelRoom2,
    name: 'Superior room - 1 double bed or 2 twin beds',
    price: 280,
  },
  {
    image: hotelRoom3,
    name: 'Superior room - 1 double bed or 2 twin beds',
    price: 300,
  },
  {
    image: hotelRoom4,
    name: 'Superior room - 1 double bed or 2 twin beds',
    price: 350,
  },
];

const HotelListing = () => {
  return (
    <div className='bg-gray-300 md:bg-gray-100 pt-20'>
      <AccountNav />
      <div className=''>
        <p className='flex items-center mx-4 md:mx-20 space-x-2 md:space-x-1 font-monts text-sm md:text-sm font-semibold md:font-medium'>
          <span className='text-red-400'>Turkey</span> <MdOutlineChevronRight />
          <span className='text-red-400'>Istanbul </span> <MdOutlineChevronRight />
          CVK Park Bosporus Hotel Istanbul
        </p>
        <div className='md:flex justify-between mx-2 md:mx-20 my-5 bg-blackGreen text-mintGreen md:text-blackGreen md:bg-gray-100 p-4 md:p-0 rounded-lg md:rounded-none'>
          <div className='space-y-2'>
            <div className='md:flex gap-3'>
              <h1 className='font-semibold text-xl font-monts'>CVK Park Bolder Hotel Istanbul</h1>
              <div className='flex gap-2 items-center'>
                <div className="flex text-xs text-red-400">
                  <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                </div>
                <p className="text-sm font-medium">5 star hotel</p>
              </div>
            </div>
            <span className='flex font-medium items-center text-sm gap-1'><FaLocationDot />Mokola main way Cad. No8, Istanbul 322237</span>
            <div className="flex md:text-blackGreen items-center space-x-3 md:space-x-1 py-2 md:py-0">
              <p className="border border-mintGreen rounded-md px-3 md:px-2 py-2 md:py-1 md:text-xs font-medium font-monts">4.2</p>
              <p className="md:text-xs font-semibold">Very good</p>
              <p className="md:text-xs">371 reviews</p>
            </div>
          </div>
            <div className='flex md:block space-y-2 gap-2 items-center'>
              <p className="text-red-400 font-semibold text-2xl md:text-3xl tracking-wider text-end">$240<span className="text-xs">/night</span></p>
              <div className='flex items-center space-x-2 md:space-x-2'>
                <button className='border border-mintGreen p-3 md:p-2 rounded-lg hover:bg-mintGreen hover:text-blackGreen md:hover:bg-blackGreen md:hover:text-mintGreen'><FaHeart /></button>
                <button className='border border-mintGreen p-3 md:p-2 rounded-lg hover:bg-mintGreen hover:text-blackGreen md:hover:bg-blackGreen md:hover:text-mintGreen'><IoShareSocial/></button>
                <button className='border-2 md:border-none md:bg-mintGreen px-7 text-sm p-2 font-semibold rounded-md hover:bg-mintGreen hover:text-blackGreen md:hover:bg-blackGreen md:hover:text-mintGreen'>Book Now</button>
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

      <div className='space-y-2 border-b-2 border-gray-300 pb-10'>
        <h1 className='text-3xl md:text-2xl text-center text-blackGreen font-semibold'>Available rooms</h1>
        {rooms.map((room, index) => (
          <RoomItem key={index} room={room} />
        ))}
      </div>
      
      <div className='mx-4 md:mx-24 pt-8'>
      <h2 className='text-3xl md:text-2xl text-blackGreen font-semibold'>Amenities</h2>
      <div className='md:grid grid-cols-2 text-blackGreen md:space-y-0 text-lg md:text-sm font-monts font-semibold'>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-24 md:hover:px-16 md:mr-44'><MdPool />Outdoor pool</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'><MdPool />Indoor pool</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'> <MdFitnessCenter />Fitness Center</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'> <GiWineBottle />Bar/Lounge</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'> <MdSpa />Spa and Wellness center</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'><IoWifi />Free Wifi</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'><IoRestaurant />Restaurant</button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'> <GiCoffeeCup />Tea/ coffee machine </button>
        <button className='flex gap-1 hover:bg-blackGreen hover:text-mintGreen items-center p-1 py-2 rounded-xl hover:px-8 md:hover:px-16 md:mr-44'> <MdRoomService />Room Service</button>
        <button className='flex gap-1 font-medium text-red-500 p-1 py-2'>+24 more.....</button>

      </div>

      </div>

      <Footer/>
    </div>
  )
}

export default HotelListing
