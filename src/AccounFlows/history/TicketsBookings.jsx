import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoAirplane, IoBed } from "react-icons/io5";
import FlightTicket from "./FlightTicket";
import StayTicket from "./StayTicket";
import Emirate from "../../assets/emirates-airline.png";
import Cvk from "../../assets/cvk.png";

const Flights = ({ data }) => (
  <div>
    {data.map((ticket, index) => (
      <FlightTicket key={index} data={ticket} />
    ))}
  </div>
);

const Stays = ({ data }) => (
  <div>
    {data.map((ticket, index) => (
      <StayTicket key={index} data={ticket} />
    ))}
  </div>
);

const TicketsBookings = () => {
  const [selectedTab, setSelectedTab] = useState("flights");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const flightTicketData = [
    {
      image: Emirate,
      origin: "Newark(EWR)",
      departureTime: "12:00 pm",
      destination: "Newark(EWR)",
      arrivalTime: "6:00 pm",
      date: "12-11-24",
      flightTime: "Newark(EKR)",
      gate: "A12",
      seatNo: "224",
    },
    // More flight ticket data
  ];

  const stayTicketData = [
    {
      image: Cvk,
      origin: "Check-In",
      arrivalTime: "Thur, Dec 6",
      leave: "Check Out",
      departureDate: "Fri, Dec 11",
      checkIn: "12:00 pm",
      checkOut: "11:30 am",
      roomNo: "On arrival",
    },
    // More stay ticket data
  ];

  return (
    <div className="mx-20">
      <div className="flex justify-between mt-5">
        <h1 className="text-2xl font-bold font-monts text-blackGreen">
          Tickets/Bookings
        </h1>
        <div className="flex items-center gap-1 font-medium font-monts">
          <Link
            to="/account/ticketbooking/flights"
            onClick={() => handleTabChange("flights")}
            className={`mr-4 ${
              selectedTab === "flights" ? "text-emerald-500" : "text-blackGreen"
            }`}
          >
            Flights
          </Link>
          <Link
            to="/account/ticketbooking/stays"
            onClick={() => handleTabChange("stays")}
            className={`mr-4 ${
              selectedTab === "stays" ? "text-emerald-500" : "text-blackGreen"
            }`}
          >
            Stays
          </Link>
        </div>
      </div>

      <div className="flex mx-6 shadow-sm shadow-mintGreen font-semibold font-monts">
        <div className="w-1/2 flex py-4 text-blackGreen text-lg border-b-4 border-emerald-300">
          <IoAirplane className="mr-1 text-2xl" />
          Flights
        </div>
        <div className="w-1/2 ml-10 flex py-4 text-blackGreen text-lg">
          <IoBed className="mr-1 text-2xl" />
          Stays
        </div>
      </div>

      {/* Outlet for nested routes */}
      <div>
        <Flights data={flightTicketData} />
        <Stays data={stayTicketData} />
      </div>
    </div>
  );
};

export default TicketsBookings;
