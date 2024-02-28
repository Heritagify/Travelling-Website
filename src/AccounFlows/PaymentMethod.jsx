import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";


const PaymentMethod = () => {
  return (
    <div className='mx-24 my-3'>
        <h1 className=' text-2xl font-bold font-monts text-blackGreen'>Tickets/Bookings</h1>
        <div className='flex'>
          <div className='h-48 w-72 bg-mintGreen rounded-2xl'>
            <div className='flex justify-between m-4'>
              <div className=''>
                <p>**** **** **** *****</p>
                <p>1234</p>
              </div>
              <IoTrashBinSharp />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentMethod
