import React from 'react'
import AccountNav from "../components/Headers/AccountsNav"
import Footer from '../components/Footer';

import airbus from '../assets/Airbus.png'
import pilot from '../assets/pilot.png'
import passage from '../assets/passage.png'
import planeWindow from '../assets/planeWindow.png'
import passenger from '../assets/passengers.png'
import planeSeat from '../assets/planeSeat.png'
import attendant from '../assets/attendant.png'
import businessClass from '../assets//businessClass.jpeg'
import economy from '../assets/economy.jpeg'
import firstClass from '../assets/firstClass.jpeg'
import hostess from '../assets/hostess.jpeg'
import windowView from '../assets/windowView.jpeg'
import ticket from "../assets/ticket.jpeg";
import emirate from "../assets/emirates-airline.png"


// Icons---------
import { MdOutlineChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from 'react-icons/io';
import { IoShareSocial, IoRestaurant, IoWifi } from "react-icons/io5";
import { BiSolidAlarm } from "react-icons/bi";
import { FaHeart } from 'react-icons/fa';
import { IoFastFood } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";
import { MdAirlineSeatReclineExtra } from "react-icons/md";




const FlightDetail = () => {
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
        <div className='mx-20'>
            <img
                src={airbus}
                alt='airbus'
                className='h-72 w-full rounded-lg shadow-md'
            />
            <div className='flex justify-between my-5'>
                <h1 className='font-monts text-blackGreen font-semibold'>Basic Economy Features</h1>
                <div className='flex gap-3'>
                    <h1 className='flex gap-1'>
                        <input
                            type='checkbox'
                        /> Economy
                    </h1>
                    <h1 className='flex gap-1'>
                        <input
                            type='checkbox'
                        /> First Class
                    </h1>
                    <h1 className='flex gap-1'>
                        <input
                            type='checkbox'
                        /> Business Class
                    </h1>
                </div>
            </div>
            <div className='flex justify-between'>
                <img
                    src={pilot}
                    alt='pilot getting set'
                    className='w-20 h-20'
                />
                <img
                    src={passage}
                    alt='plane passage'
                    className='w-20 h-20'
                />
                <img
                    src={planeWindow}
                    alt='A plane window'
                    className='w-20 h-20'
                />
                <img
                    src={passenger}
                    alt='Passenger'
                    className='w-20 h-20'
                />
                <img
                    src={planeSeat}
                    alt='Passenger'
                    className='w-20 h-20'
                />
                <img
                    src={hostess}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={ticket}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={businessClass}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={attendant}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={economy}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={firstClass}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
                <img
                    src={windowView}
                    alt='Passenger'
                    className='w-20 h-20 rounded-lg'
                />
            </div>
            <div className='bg-lightMint my-5 p-3 rounded-lg space-y-2'>
                <h1 className='font-monts text-blackGreen font-bold'>Emirates Airlines Policies</h1>
                <div className='flex justify-between text-sm font-monts text-blackGreen font-medium'>
                    <p className='flex items-center gap-3'><BiSolidAlarm/>Pre-flight cleaning, installation of cabin HEPA filters.</p>
                    <p className='flex items-center gap-3'><BiSolidAlarm/>Pre-flight health screening questions.</p>
                </div>
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
        </div>
        </div>
    </div>
  )
}

export default FlightDetail
