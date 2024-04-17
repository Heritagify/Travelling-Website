import React from 'react';
import Cvk from "../../src/assets/cvk.png";
import StayTicket from './StayTicket';

const StayTicketPage = () => {
    const stayTicketData = [
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
    <div className="md:mx-20">
      {stayTicketData.map((ticket, index) => (
        <StayTicket key={index} data={ticket} />
      ))}
    </div>
  );
};

export default StayTicketPage;