import React from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import { IoAirplane, IoBed } from 'react-icons/io5';
import { Link, Outlet } from "react-router-dom";


const TicketsBookings = () => {
  return (
    <div className=' mx-3 md:mx-20'>
      <div className='flex justify-between mt-5'>
        <h1 className=' text-xl font-bold font-monts text-blackGreen'>Tickets/Bookings</h1>
        <button className='flex items-center gap-1 font-medium font-monts'>Upcoming <IoChevronDownSharp /></button>
      </div>

      <div className='flex mx-6 shadow-sm shadow-mintGreen font-semibold font-monts'>
        <Link to='/account/ticketBookings/flightTickets' className="w-1/2 flex px-2 py-4 text-blackGreen text-sm border-b-4 border-emerald-300">
          <IoAirplane className="mr-1 text-2xl" />Flights
        </Link>
        <Link to='/account/ticketBookings/stayTicket' className="w-1/2 ml-10 flex py-4 text-blackGreen text-sm">
          <IoBed className="mr-1 text-2xl" />Stays
        </Link>
      </div>

      <Outlet />
    </div>
  )
}

export default TicketsBookings;