import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoTrashBinSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import visa from "../assets/VISA-logo.png";

const PaymentMethod = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    closeModal(); // Close the modal after submission
  };

  return (
    <div className='mx-24 my-3'>
      <h1 className='text-2xl font-semibold font-monts text-blackGreen'>Payment methods</h1>
      <div className='flex gap-6 mt-4 mx-4'>
        <div className='h-40 w-72 bg-mintGreen text-blackGreen rounded-2xl space-y-14'>
          <div className='flex justify-between m-4'>
            <div className='font-bold font-monts'>
              <p>**** **** **** *****</p>
              <p>1234</p>
            </div>
            <IoTrashBinSharp />
          </div>
          <div className='flex justify-between mx-4 items-center'>
            <div className='text-xs font-monts font-semibold'>
              <p>Valid thru</p>
              <p>02/28</p>
            </div>
            <img src={visa} alt="Visa Logo" className='w-8 bg-black rounded-lg p-1'/>
          </div>
        </div>

        <div className='flex flex-col justify-center font-monts items-center border-2 border-dashed border-mintGreen h-40 w-72 rounded-2xl '>
          <CiCirclePlus className='text-5xl text-mintGreen' onClick={openModal} />
          <p className='text-xs font-semibold'>Add a new card</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Card Modal"
      >
        <h2>Add a New Card</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form fields for adding a new card */}
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" required />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <button type="submit">Add Card</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default PaymentMethod;
