import React from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import { IoAirplane, IoBed } from 'react-icons/io5';
import Emirate from "../../assets/emirates-airline.png"
import Cvk from "../../assets/cvk.png";

// import FlightTicket from './FlightTicket';
import StayTicket from './StayTicket';

const TicketsBookings = () => {
  const flightTicketData = [  // Define flight ticket data here
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
];
  const stayTicketData = [  // Define flight ticket data here
    {
        image: Cvk,
      origin: 'Check-In',
      arrivalTime: 'Thur, Dec 6',
      leave: 'Check Out',
      departureDate: 'Fri, Dec 11 ',
      checkIn: '12:00 pm',
      checkOut: '11:30 am',
      roomNo: 'On arrival'
    },
    {
        image: Cvk,
      origin: 'Check-In',
      arrivalTime: 'Thur, Dec 6',
      leave: 'Check Out',
      departureDate: 'Fri, Dec 11 ',
      checkIn: '12:00 pm',
      checkOut: '11:30 am',
      roomNo: 'On arrival'
    },
    {
        image: Cvk,
      origin: 'Check-In',
      arrivalTime: 'Thur, Dec 6',
      leave: 'Check Out',
      departureDate: 'Fri, Dec 11 ',
      checkIn: '12:00 pm',
      checkOut: '11:30 am',
      roomNo: 'On arrival'
    },
];

  return (
    <div className='mx-14 '>
      <div className='flex justify-between mt-3'>
        <h1 className=' text-2xl font-semibold font-monts text-blackGreen'>Tickets/Bookings</h1>
        <button className='flex items-center gap-1 font-medium font-monts'>Upcoming <IoChevronDownSharp /></button>
      </div>

      <div className='flex mx-6 shadow-sm shadow-mintGreen font-semibold font-monts'>
        <div className="w-1/2 flex py-4 text-blackGreen text-lg border-b-4 border-emerald-300">
          <IoAirplane className="mr-1 text-2xl" />Flights
        </div>
        <div className="w-1/2 ml-10 flex py-4 text-blackGreen text-lg">
          <IoBed className="mr-1 text-2xl" />Stays
        </div>
      </div>

      {/* {flightTicketData.map((ticket, index) => (
        <FlightTicket key={index} data={ticket} />
      ))} */}
      {stayTicketData.map((ticket, index) => (
        <StayTicket key={index} data={ticket} />
      ))}
    </div>
  )
}

export default TicketsBookings;
