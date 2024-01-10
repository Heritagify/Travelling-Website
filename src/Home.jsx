import logo from './assets/Group.svg'
import { IoAirplane} from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";

import SwapInput from './components/SwapInput.jsx'
import DateSelector from './components/Dateselector.jsx';
import TripOption from './components/TripOption.jsx'
import Passenger from './components/Passenger.jsx';
import Places from './Places.jsx';


const Home = () => {
  return (
    <div className=" mx-5 mt-5">
      <div className="border-8 rounded-3xl relative p-3 pt-1 bg-cover h-[550px] bg-center bg-gray-900" style={{ backgroundImage: 'url("/src/assets/lp1.png")' }}>
      <div className="rounded-3xl absolute inset-0 bg-black bg-opacity-30"></div>

      <nav className="relative z-10 flex text-white justify-between p-2 items-center">
          <div className="flex space-x-5">
            <h1 className="flex space-x-3">
                <IoAirplane className="text-white text-2xl"/>Find Flight
            </h1>
            <h1 className="flex space-x-4">
                <IoBed className="text-white text-2xl"/>Find Stays
            </h1>
          </div>
           <img src={logo} className=""/>
           <div className="flex font-bold space-x-5 items-center">
             <p className="">LOGIN</p>
             <button className="text-black bg-white rounded-md p-1">Sign Up</button>
           </div>
      </nav>
      <div className='relative text-white text-center mt-32 tracking-wide  leading-loose'>
        <h1 className='font-bold text-4xl font'>Helping Others</h1>
        <h1 className='font-bold font-trade-gothic text-7xl my-2'>LIVE & TRAVEL</h1>
        <p className='text-2xl'>Special offers to suit your plan</p>
      </div>

      <div className='relative rounded-lg px-1 pt-2 pb-2 mx-28 mt-32 shadow-md shadow-blue-400 bg-white'>
        <div className='flex text-emerald-900'>
          <button className='flex py-2 px-4 '><IoAirplane className="text-2xl"/>Flights</button>
          <button className='flex py-2 px-4 border-l-2 '><IoBed className=" text-2xl"/>Stays</button>
        </div>
          <div className='flex my-4 space-x-5 mx-3'>
            <SwapInput />
            <TripOption/>
            <DateSelector/>
            <Passenger/>
          </div>
          <div className='flex justify-end items-center space-x-4 font-medium text-md'>
            <p>+ Add Promo code</p>
            <button className='flex gap-1 items-center rounded-md bg-teal-300 text-sm py-3 px-4 font-medium'><FaPaperPlane />
Show Flights</button>
          </div>
      </div>

    </div>

      <div className='flex justify-between mt-52'>
        <div className='leading-loose'>
          <h1 className='text-3xl'>Plan your perfect trip</h1>
          <p className='text-gray-600'>Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <button className='border-2 px-3 text-gray-700 text-md'>See more places</button>
      </div>
<Places/>
    </div>
  )
}

export default Home
