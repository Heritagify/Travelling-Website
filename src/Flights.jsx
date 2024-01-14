import FlightNav from "./components/FlightNav";
import Footer from "./components/Footer";
import SwapInput from './components/SwapInput.jsx';
import DateSelector from './components/Dateselector.jsx';
import TripOption from './components/TripOption.jsx';
import Passenger from './components/Passenger.jsx';
import { IoAirplane } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";

const Flights = () => {
  return (
    <div>
            {/* Hero Section */}
      <div className="rounded-3xl relative p-3 pt-1 bg-cover h-[550px] bg-center bg-gray-900 mx-3 mt-3" style={{ backgroundImage: 'url("/src/assets/flighthero.png")' }}>
        <div className="rounded-3xl absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Navigation */}
        
        <FlightNav className="bg-white"/>


        {/* Search Section */}
        <div className='relative rounded-lg px-1 pt-2 pb-2 mx-5 mt-32 shadow-md shadow-blue-400 bg-white'>
          <div className='flex text-blackGreen'>
            <button className='flex py-2 px-4 '><IoAirplane className="text-2xl" />Flights</button>
            <button className='flex py-2 px-4 border-l-2 '><IoBed className="text-2xl" />Stays</button>
          </div>
          <div className='lg:flex my-4 space-x-5 mx-3'>
            <SwapInput />
            <TripOption />
            <DateSelector />
            <Passenger />
          </div>
          <div className='flex justify-end items-center space-x-4 font-medium text-md'>
            <p>+ Add Promo code</p>
            <button className='flex gap-1 items-center rounded-md bg-teal-300 text-sm py-3 px-4 font-medium'>
              <FaPaperPlane />Show Flights
            </button>
          </div>
        </div>
      </div>

      {/* Sections for Flights and Hotels */}
      <div className='md:flex md:space-x-4 space-y-5 md:space-y-0 md:justify-center my-14'>
        {/* Flights Section */}
        <div className="sm:px-10 rounded-3xl bg-cover md:w-full md:max-w-[31rem] h-[29rem] bg-center bg-gray-900" style={{ backgroundImage: 'url("/src/assets/flights.png")' }}>
  <div className='md:mt-72 pt-72 md:pt-8 text-center'>
    <h1 className='text-white text-5xl sm:text-4xl tracking-wide font-bold font-montserrat'>Flights</h1>
    <p className='text-white text-center font-normal text-sm leading-5 my-2'>Search Flights & Places. Hire to our most popular destinations.</p>
    <div className='mx-auto'>
      <button
        className='flex gap-1 items-center rounded-md bg-teal-300 text-sm py-2 px-4 sm:px-6 lg:px-4 font-medium mx-auto'>
        <FaPaperPlane />Show Flights
      </button>
    </div>
  </div>
</div>
 </div>
      <Footer/>
 </div>
  )
}

export default Flights
