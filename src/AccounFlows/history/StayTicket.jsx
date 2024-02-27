import React from 'react';
import Cvk from "../../assets/cvk.png";
import { IoTime } from "react-icons/io5";
import { MdSensorDoor } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

function StayTicket({ data }) {
  return (
    <div className="flex justify-between items-center px-6 rounded-lg shadow-gray-400 border shadow-md mt-7 mx-6">
      <div className='flex items-center space-x-7'>
        <img src={data.image} className=' shadow-sm shadow-gray-900 p-2 w-20 h-16'/>
        <div className="ml-4">
          <div className='flex gap-2 items-center'>
            <div>
              <h4 className='font-monts text-xs text-blackGreen font-medium'>{data.origin}</h4>
              <p className='font-bold text-sm text-blackGreen font-monts'>{data.arrivalTime}</p>
            </div>
            <span className='flex items-center font-monts text-xl'>—</span>
            <div>
              <h4 className='font-monts text-xs text-blackGreen font-medium'>{data.leave}</h4>
              <p className='font-bold text-blackGreen text-sm font-monts'>{data.departureDate}</p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 border-gray-200 border-l-2 py-1 pl-6'>
          <div className='space-y-2'>
            <div className='flex gap-1 items-center'>
            <IoTime className='text-mintGreen text-xl'/>
              <div className=''>
                <h4 className='font-monts text-xs text-blackGreen font-medium'>Check-In time</h4>
                <p className='font-semibold text-sm text-blackGreen font-monts'>{data.checkIn}</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <IoTime className='text-mintGreen text-xl'/>
              <div className=''>
                <h4 className='font-monts text-blackGreen text-xs font-medium'>check-In out</h4>
                <p className='font-semibold text-blackGreen text-sm font-monts'>{data.checkOut}</p>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex gap-1 items-center'>
              <MdSensorDoor className='text-mintGreen text-xl'/>
              <div>
                <h4 className='font-monts text-blackGreen font-medium text-xs'>Room no.</h4>
                <p className='font-semibold text-blackGreen text-sm font-monts'>{data.roomNo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 items-center'>
        <button className='font-semibold font-monts rounded-md text-xs text-blackGreen bg-mintGreen hover:bg-blackGreen hover:text-mintGreen items-center p-3 px-4'>Download Ticket</button>
        <button className='border border-mintGreen p-3 items-center rounded-md hover:bg-lightMint'>
          <FaChevronRight className='text-blackGreen'/>
        </button>
      </div>
    </div>
  );
}

function TicketBooking() {
  const ticketsData = [
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

export default StayTicket;
