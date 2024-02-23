import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import { IoAirplane, IoBed } from 'react-icons/io5';
import Emirate from "../../assets/emirates-airline.png"
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GiGate } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const TicketsBookings = () => {
  return (
    <div className='mx-14'>
      <div className='flex justify-between mt-3'>
        <h1 className=' text-2xl font-semibold font-monts text-blackGreen'>Tickets/Bookings</h1>
        <button className='flex items-center gap-1 font-medium font-monts'>Upcomimg <IoChevronDownSharp /></button>
      </div>

          <div className='flex mx-6 shadow-lg  font-semibold font-monts'>
              <div className="w-1/2 flex py-4 text-blackGreen text-lg border-b-4 border-emerald-300">
                <IoAirplane className="mr-1 text-2xl" />Flight
              </div>
              <div className="w-1/2 ml-10 flex py-4 text-blackGreen text-lg">
                <IoBed className="mr-1 text-2xl" />Stays
              </div>
          </div>

          <div className="flex items-center border-red-500 border-4 shadow-sm">
            <img src={Emirate} className='border shadow-sm shadow-gray-600 p-1 w-12 h-12'/>

            <div className="ml-4">
              <div className='flex gap-1 items-center'>
                <div>
                  <h4 className='font-monts text-sm text-blackGreen font-medium'>Newark(EWR)</h4>
                  <p className='font-bold text-blackGreen font-monts'>12:00 pm</p>
                </div>
                <span className='flex items-center font-monts text-xl'>—</span>
                <div>
                  <h4 className='font-monts text-sm text-blackGreen font-medium'>Newark(EWR)</h4>
                  <p className='font-bold text-blackGreen font-monts'>6:00 pm</p>
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
            {/* 11111111111111 */}
              <div>
                <div className='flex gap-1 border-2 border-green-900 items-center'>
                  <FaCalendarAlt className='text-mintGreen text-4xl rounded-md p-1'/>
                  <div className=''>
                    <h4 className='font-monts text-sm text-blackGreen font-medium'>Date</h4>
                    <p className='font-semibold text-blackGreen font-monts'>12-11-24</p>
                  </div>
                </div>
                <div className='flex gap-1 border-2 border-green-900 items-center'>
                  <IoTime className='text-mintGreen text-4xl rounded-md p-1'/>
                  <div className=''>
                    <h4 className='font-monts text-blackGreen text-sm font-medium'>Flight time</h4>
                    <p className='font-semibold text-blackGreen text- font-monts'>Newark(EKR)</p>
                  </div>
                </div>
              </div>

              {/* 22222222222222 */}
              <div className='border-4 border-purple-700'>
                <div className='flex gap-2 border-2 border-green-900 items-center'>
                  <GiGate className='text-mintGreen bg-gray-200 text-5xl rounded-md p-2'/>
                  <div className=''>
                    <h4 className='font-monts text-blackGreen font-medium text-lg'>Gate</h4>
                    <p className='font-bold text-blackGreen text-xl font-monts'>A12</p>
                  </div>
                </div>
                <div className='flex gap-2 border-2 border-green-900 items-center'>
                  <MdOutlineAirlineSeatReclineExtra className='text-mintGreen bg-gray-200 text-5xl rounded-md p-2'/>
                  <div className=''>
                    <h4 className='font-monts text-blackGreen font-medium text-lg'>Seat no.</h4>
                    <p className='font-bold text-blackGreen text-xl font-monts'>224</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex space-x-2 items-center border-yellow-900 border'>
              <button className='rounded-sm bg-mintGreen items-center p-3'>Download Ticket</button>
              <button className='border border-mintGreen p-4 items-center rounded-md'>
                <FaChevronRight />
              </button>
            </div>
          </div>
    </div>
  )
}

export default TicketsBookings
