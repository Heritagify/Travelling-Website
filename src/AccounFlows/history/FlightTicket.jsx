import React from 'react';
import Emirate from "../../assets/emirates-airline.png"
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GiGate } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

function FlightTicket({ data }) {
  return (
    <div className="flex justify-between items-center px-6 rounded-lg shadow-gray-300 border shadow-sm mt-7 mx-6">
      <div className='flex items-center space-x-6'>
        <img src={data.image} className=' shadow-sm shadow-gray-400 p-2 w-16 h-14'/>
        <div className="ml-4">
          <div className='flex gap-2 items-center'>
            <div>
              <h4 className='font-monts text-xs text-blackGreen font-medium'>{data.origin}</h4>
              <p className='font-bold text-sm text-blackGreen font-monts'>{data.departureTime}</p>
            </div>
            <span className='flex items-center font-monts text-xl'>—</span>
            <div>
              <h4 className='font-monts text-xs text-blackGreen font-medium'>{data.destination}</h4>
              <p className='font-bold text-sm text-blackGreen font-monts'>{data.arrivalTime}</p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 border-gray-200 border-l-2 py-2 pl-5'>
          <div className='space-y-2'>
            <div className='flex gap-1 items-center'>
              <FaCalendarAlt className='text-mintGreen text-xl'/>
              <div className=''>
                <h4 className='font-monts text-xs text-blackGreen font-medium'>Date</h4>
                <p className='font-semibold text-sm text-blackGreen font-monts'>{data.date}</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <IoTime className='text-mintGreen text-xl'/>
              <div className=''>
                <h4 className='font-monts text-blackGreen text-xs font-medium'>Flight time</h4>
                <p className='font-semibold text-blackGreen text-sm font-monts'>{data.flightTime}</p>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex gap-1 items-center'>
              <GiGate className='text-mintGreen text-xl'/>
              <div>
                <h4 className='font-monts text-blackGreen font-medium text-xs'>Gate</h4>
                <p className='font-semibold text-sm text-blackGreen font-monts'>{data.gate}</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <MdOutlineAirlineSeatReclineExtra className='text-mintGreen text-xl'/>
              <div>
                <h4 className='font-monts text-blackGreen font-medium text-xs'>Seat no.</h4>
                <p className='font-semibold text-sm text-blackGreen font-monts'>{data.seatNo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center'>
        <button className='font-semibold font-monts rounded-md text-sm text-blackGreen bg-mintGreen items-center p-3 px-4'>Download Ticket</button>
        <button className='border border-mintGreen p-3 items-center rounded-md'>
          <FaChevronRight className='text-blackGreen'/>
        </button>
      </div>
    </div>
  );
}

function TicketBooking() {
  const ticketsData = [
    {
      image: Emirate,
      origin: 'Newark(EWR)',
      departureTime: '12:00 pm',
      destination: 'Newark(EWR)',
      arrivalTime: '6:00 pm',
      date: '12-11-24',
      flightTime: 'Newark(EKR)',
      gate: 'A12',
      seatNo: '224'
    },
    // Add more ticket data objects here for each card
  ];

  return (
    <div>
      {ticketsData.map((ticket, index) => (
        <TicketCard key={index} data={ticket} />
      ))}
    </div>
  );
}

export default FlightTicket;
