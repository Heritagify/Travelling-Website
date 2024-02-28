import React, { useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';
import visa from '../assets/VISA-logo.png';

const PaymentMethod = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([
    // Default card
    {
      number: '**** **** **** *****',
      lastFourDigits: '1234',
      validThru: '02/28',
      brand: 'visa',
    }
  ]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddCard = (newCard) => {
    // Add new card to the state
    setCards([...cards, newCard]);
    closeModal();
  };

  return (
    <div className='mx-24 my-3'>
      <h1 className='text-2xl font-semibold font-monts text-blackGreen'>Payment methods</h1>
      <div className='flex gap-6 mt-4 mx-4'>
        {cards.map((card, index) => (
          <div key={index} className='h-40 w-72 bg-mintGreen text-blackGreen rounded-2xl space-y-14'>
            <div className='flex justify-between m-4'>
              <div className='font-bold font-monts'>
                <p>{card.number}</p>
                <p>{card.lastFourDigits}</p>
              </div>
              <IoTrashBinSharp />
            </div>
            <div className='flex justify-between mx-4 items-center'>
              <div className='text-xs font-monts font-semibold'>
                <p>Valid thru</p>
                <p>{card.validThru}</p>
              </div>
              <img src={visa} alt='visa Logo' className='w-8 bg-black rounded-lg p-1' />
            </div>
          </div>
        ))}

        <div className='flex flex-col justify-center font-monts items-center border-2 border-dashed border-mintGreen h-40 w-72 rounded-2xl '>
          <CiCirclePlus className='text-5xl text-mintGreen cursor-pointer' onClick={openModal} />
          <p className='text-xs font-semibold'>Add a new card</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm'>
          <div className=' bg-mintGreen rounded-lg px-5 py-4 w-1/3'>
            <h2 className='text-center text-monts text-blackGreen text-xl font-semibold mb-4'>Add a new card</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              handleAddCard({
                number: formData.get('cardNumber'),
                lastFourDigits: formData.get('lastFourDigits'),
                validThru: formData.get('validThru'),
                brand: 'visa', // You might want to determine the brand dynamically
              });
            }} className='flex flex-col gap-4'>
              <input type='number' name='cardNumber' placeholder='Card Number' className='input text-sm italic focus:outline-none p-1 px-2 rounded-xl' />
              <input type='number' name='lastFourDigits' placeholder='Last Four Digits' className='input italic text-sm focus:outline-none px-2 p-1 rounded-xl' />
              <input type='number' name='validThru' placeholder='Valid Thru' className='input text-sm italic focus:outline-none p-1 px-2 rounded-xl ' />
              <button type='submit' className='bg-blackGreen text-lightMint py-2 rounded-lg cursor-pointer my-2'>Add Card</button>
            </form>
            <button onClick={closeModal} className='btn btn-secondary ml-2'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
