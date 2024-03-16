import FlightNav from "./components/FlightNav";
import Footer from "./components/Footer";
import SwapInput from './components/SwapInput.jsx';
import DateSelector from './components/Dateselector.jsx';
import TripOption from './components/TripOption.jsx';
import Passenger from './components/Passenger.jsx';
import { FaPaperPlane } from "react-icons/fa6";
import bgmap from "./assets/bgMap.png"

// ---------Images-------
import lanka1 from "./assets/lanka1.png"
import lanka2 from "./assets/lanka2.png"
import lanka3 from "./assets/lanka3.png"
import lanka4 from "./assets/lanka4.png"

const Flights = () => {
  return (
    <div className="bg-gray-200">
        {/* Navigation */}
        <FlightNav />
            {/* Hero Section */}
      <div className="p-3 pt-1 mb-52 md:bg-cover h-[550px] bg-center" style={{ backgroundImage: 'url("/src/assets/flighthero.png")' }}>
        <div className="rounded-3xl absolute inset-0 bg-black bg-opacity-5"></div>



        {/* Search Section */}
        <div className='rounded-lg px-1 pt-2 pb-6 mx-4 lg:mx-24 mt-[30rem] shadow shadow-blackGreen bg-white'>
          <div className='flex text-blackGreen font-semibold font-monts p-2'>
            <h1>Where are you flying?</h1>
          </div>
          <div className='lg:flex my-4 space-y-2 md:space-y-0 md:space-x-5 mx-3'>
            <SwapInput />
            <TripOption />
            <DateSelector />
            <Passenger />
          </div>
          <div className='flex justify-end items-center space-x-4 mx-4 font-medium text-md'>
            <p>+ Add Promo code</p>
            <button className='flex gap-1 items-center rounded-md bg-teal-300 text-sm py-3 px-4 font-medium'>
              <FaPaperPlane />Show Flights
            </button>
          </div>
        </div>
      </div>

      <div className="mx-24 flex justify-between">
        <div className="">
          <h1 className="text-blackGreen font-monts font-bold text-2xl">Let`s go places together</h1>
          <p className="text-lg">Discover the latest offers and news and start planning your next trip with us.</p>
        </div>
        <div className="py-4">
          <button className="border rounded-lg p-3 font-monts font-medium text-sm">See All</button>
        </div>
      </div>

      <div>
        <img src={bgmap}/>
      </div>

      <div className="mx-24 mt-16 flex justify-between mb-10">
        <div className="w-3/4">
          <h1 className="text-blackGreen font-monts font-bold mb-2 text-3xl">Fall into travel</h1>
          <p className="text-lg">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
        </div>
        <div className="py-4">
          <button className="border rounded-lg p-3 font-monts font-medium text-base">See All</button>
        </div>
      </div>
      
        <div className="block md:flex md:shrink-0 mx-24 h-96 space-x-4">

            <div className="flex items-end h-full p-2 py-3 text-white font-monts md:bg-cover w-3/5 bg-center rounded-xl" style={{ backgroundImage: 'url("/src/assets/melbourne.png")' }}>
              <div className="w-full px-2">
                <div className="flex justify-between mb-1">
                  <div className="">
                  <h1 className=" font-semibold text-2xl">Melbourne</h1>
                    <p className="text-sm">An amazing journey</p>
                  </div>
                  <h1 className="p-3 font-semibold text-2xl">$ 700</h1>
                </div>
                <button className="py-3 text-black font-medium bg-teal-300 rounded-lg w-full">Book Flight</button>
              </div>

            </div>

          <div className="flex items-end h-full p-2 py-3 text-white font-monts md:bg-cover w-3/5 bg-center rounded-xl" style={{ backgroundImage: 'url("/src/assets/paris2.png")' }}>

          <div className="w-full px-2">
                <div className="flex justify-between mb-1">
                  <div className="">
                  <h1 className=" font-semibold text-2xl">Paris</h1>
                    <p className="text-sm">A paris Adventure</p>
                  </div>
                  <h1 className="p-3 font-semibold text-2xl">$ 600</h1>
                </div>
                <button className="py-3 text-black font-medium bg-teal-300 rounded-lg w-full">Book Flight</button>
              </div>
            
          </div>

          <div className="flex items-end h-full p-2 py-3 text-white font-monts md:bg-cover w-3/5 bg-center rounded-xl" style={{ backgroundImage: 'url("/src/assets/lond.png")' }}>

            <div className="w-full px-1">
                <div className="flex justify-between mb-1">
                  <div>
                    <h1 className=" font-semibold text-2xl">London</h1>
                    <p className="text-sm">London eye adventure</p>
                  </div>
                  <h1 className="p-2 font-semibold text-2xl">$ 350</h1>
                </div>
                <button className="py-3 text-black font-medium bg-teal-300 rounded-lg w-full">Book Flight</button>
              </div>

            </div>
          <div className="flex items-end h-full p-2 py-3 text-white font-monts md:bg-cover w-3/5 bg-center rounded-xl" style={{ backgroundImage: 'url("/src/assets/columbia.png")' }}>

  <div className="w-full px-2">
                <div className="flex justify-between mb-1">
                  <div className="">
                  <h1 className=" font-semibold text-2xl">Columbia</h1>
                    <p className="text-sm">Amazing streets</p>
                  </div>
                  <h1 className="p-3 font-semibold text-2xl">$ 700</h1>
                </div>
                <button className="py-3 text-black font-medium bg-teal-300 rounded-lg w-full">Book Flight</button>
              </div>

          </div>
          
        </div>

        <div className="mx-24 mt-10 flex justify-between mb-4">
        <div className="w-3/4">
          <h1 className="text-blackGreen font-monts font-bold mb-2 text-3xl">Fall into travel</h1>
          <p className="text-lg">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
        </div>
        <div className="py-4">
          <button className="border rounded-lg p-3 font-monts font-medium text-base">See All</button>
        </div>
      </div>

      <div className="">
          <div className="flex mx-28 space-x-8 pb-10">
                  <div className="h-96 w-2/5 p-6 flex flex-col justify-between rounded-lg bg-teal-300 text-blackGreen ">
                    <div>
                      <div className="flex justify-between mb-9">
                        <h1 className="text-4xl w-44 leading-12 font-bold font-monts">Backpacking Sri Lanka</h1>
                        <div>
                          <div className="bg-white rounded-lg p-1 px-4 justify-center">From<span className="font-semibold block">$ 700</span></div>
                        </div>
                      </div>
                      <p className="text-sm font-monts">
                        Traveling is a unique experience as it is the best way to unplug from the pushes and pulls of daily life.
                        It helps us to forget about our problems, frustrations, and fears at home.
                        During our journey, we experience life in different ways.
                        We explore new places, cultures, cuisines, traditions, and ways of living.
                      </p>
                    </div>
                  <button className="w-full bg-gray-100 py-2 font-semibold rounded-md">Book Flight</button>
                </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={lanka1} className="w-72" />
          <img src={lanka2} className="w-72" />
          <img src={lanka3} className="w-72" />
          <img src={lanka4} className="w-72" />
        </div>
          </div>
      </div>

      <Footer/>
 </div>
  )
}

export default Flights
