import React from 'react';

const RoomItem = ({ room }) => {
  return (
    <div className='flex justify-between font-monts text-blackGreen border-b-2 py-2 items-center mx-3 md:mx-10 lg:mx-20'>
      <div className='flex space-x-3 items-center'>
        <img
          src={room.image}
          alt='Room'
          className='w-20 md:w-14'
        />
        <p className='font-semibold text-sm'>{room.name}</p>
      </div>
      <div className='md:flex space-x-5 md:space-x-12 items-center'>
        <p className="text-blackGreen font-semibold text-xl tracking-wider text-end">${room.price}<span className="text-xs">/night</span></p>
        <button className='bg-mintGreen px-9 md:px-7 text-xs p-3 font-semibold rounded-md hover:bg-blackGreen hover:text-mintGreen'>Book Now</button>
      </div>
    </div>
  );
};

export default RoomItem;
