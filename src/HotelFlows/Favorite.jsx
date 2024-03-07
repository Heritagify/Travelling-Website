import React, { useState} from 'react'
import AccountsNav from "../components/Headers/AccountsNav"
import profilePicture from "../assets/user.png";
import bosphorus from "../../src/assets/bosphorus.png";


const Favourite = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });


  return (
    <div className='bg-gray-100'>
      <AccountsNav user={user} />
      <div className='pt-24'>
        <h1 className='text-3xl mx-20 font-bold font-monts text-blackGreen'>Favourites</h1>
        <ul className='flex justify-between  mt-5 mx-32 bg-white shadow-sm shadow-gray-200 text-blackGreen rounded-lg'>
          <li className='w-full font-monts p-2 font-semibold text-md'>Flights</li>
          <span className='text-gray-100 font-lighter text-4xl'>|</span>
          <li className='w-full font-monts p-3 font-semibold text-md'>Places</li>
        </ul>
          {/* ----------1_-------- */}
        <div className='flex border-2 border-red-600 mx-32 rounded-lg'>
          <img
            src={bosphorus}
            alt='an hotel'
              className="w-72"
            />
        </div>
      </div>
    </div>
  )
}

export default Favourite;
