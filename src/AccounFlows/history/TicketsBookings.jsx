import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import { IoAirplane, IoBed } from 'react-icons/io5';

const TicketsBookings = () => {
  return (
    <div className='mx-14'>
      <div className='flex justify-between mt-3'>
        <h1 className=' text-2xl font-semibold font-monts text-blackGreen'>Tickets/Bookings</h1>
        <button className='flex items-center gap-1 font-medium font-monts'>Upcomimg <IoChevronDownSharp /></button>
      </div>
      <div className='flex mx-6 border-4 border-red-500 font-semibold font-monts'>
            <div className="w-1/2 flex py-4 text-blackGreen text-lg border-b-4 border-emerald-300">
              <IoAirplane className="mr-1 text-2xl" />Flight
            </div>
            <div className="w-1/2 ml-10 flex py-4 text-blackGreen text-lg">
              <IoBed className="mr-1 text-2xl" />Stays
            </div>
        </div>
    </div>
  )
}

export default TicketsBookings
