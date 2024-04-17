import React from 'react';
import Emirate from "../../src/assets/emirates-airline.png"
import FlightTicket from './FlightTicket';

const FlightTicketPage = () => {
    const flightTicketData = [
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


  return (
    <div className="mx-20">
      {flightTicketData.map((ticket, index) => (
        <FlightTicket key={index} data={ticket} />
      ))}
    </div>
  );
};

export default FlightTicketPage;