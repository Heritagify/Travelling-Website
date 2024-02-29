import React, { useState } from 'react';
import { IoTrashBinSharp, IoClose } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcJcb } from 'react-icons/fa';
import * as Yup from 'yup';
import visaLogo from '../assets/VISA-logo.png'; 

const PaymentMethod = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([

    // _____________Code FOR THE DEFAULT CARD__________------------
    {
      number: '**** **** **** *****',
      lastFourDigits: '1234',
      nameOnCard: 'HERITAGE GREEN',
      validThru: '02/28',
      brand: 'visa',
    }
  ]);
  const [cardType, setCardType] = useState(null);
  const [validationError, setValidationError] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setValidationError('');
  };

  const handleAddCard = (newCard) => {
    // ---------------HOW I ADDED THE NEW CODES TO THE STATE-------------
    setCards([...cards, {
      ...newCard,
      brand: cardType,
    }]);
    closeModal();
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Card number is required'),
    expiryDate: Yup.string().required('Expiry date is required'),
    cvc: Yup.string().required('CVC is required'),
    nameOnCard: Yup.string().required('Name on card is required'),
  });

  const handleFormSubmit = async (formData) => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      handleAddCard({
        number: formData.cardNumber,
        lastFourDigits: formData.cardNumber.slice(-4),
        nameOnCard: formData.nameOnCard,
        validThru: formData.expiryDate,
        brand: cardType,
      });
    } catch (error) {
      setValidationError(error.errors.join('\n'));
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // -----(REMOVING NON-NUMERIC ITEMS)--------
    if (/^4/.test(input)) {
      setCardType('visa');
    }
    else if (/^5[1-5]/.test(input)) {
      setCardType('mastercard');
    }
    else if (/^3[47]/.test(input)) {
      setCardType('amex');
    }
    else if (/^6(?:011|5)/.test(input)) {
      setCardType('discover');
    }
    else if (/^506(1|2|3|4)/.test(input)) {
      setCardType('verve');
    }
    else {
      setCardType(null);
    }
  };

  return (
    <div className='mx-24 my-3'>
      <h1 className='text-2xl font-semibold font-monts text-blackGreen'>Payment methods</h1>
      <div className='flex gap-3 mt-4 mx-3'>
        {cards.map((card, index) => (
          <div key={index} className='h-48 w-80 bg-mintGreen text-blackGreen rounded-2xl space-y-12'>
            <div className='flex justify-between m-3'>
              <div className='font-bold font-monts'>
                <p>{'**** **** **** ' + card.lastFourDigits}</p>
              </div>
              {index !== 0 && ( // Render trash icon for added cards
                <IoTrashBinSharp onClick={() => handleDeleteCard(index)} className='text-red-900'/>
              )}
            </div>
            <div className=''>
              <p className='font-bold text-sm ml-3 tracking-widest uppercase font-monts'>{card.nameOnCard}</p>
            </div>
            <div className='flex justify-between mx-4 items-center'>
              <div className='text-xs font-monts font-semibold'>
                <p>Valid thru</p>
                <p>{card.validThru}</p>
              </div>
              {/* Conditionally render the logo */}
              {index === 0 ? ( // If it's the default card
                <img src={visaLogo} alt="VISA Logo" className='w-8 bg-black rounded-lg p-1' />
              ) : ( // If it's a newly added card
                card.brand === 'visa' ? <FaCcVisa /> : card.brand === 'mastercard' ? <FaCcMastercard /> : card.brand === 'amex' ? <FaCcAmex /> : card.brand === 'discover' ? <FaCcDiscover /> : <FaCcJcb />
              )}
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
          <div className='bg-mintGreen rounded-lg px-5 py-4 w-1/3'>
            <div className="flex justify-end">
              <IoClose className="text-xl text-gray-500 cursor-pointer" onClick={closeModal} />
            </div>
            <h2 className='text-center text-monts text-blackGreen text-xl font-semibold mb-4'>Add a new card</h2>
            {validationError && <p className="text-red-500 mb-2 text-xs">{validationError}</p>}
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleFormSubmit(Object.fromEntries(formData));
            }}
            className='flex flex-col gap-4'>
              <fieldset className='border border-green-800 rounded-md'>
                <legend className='mx-2 text-xs font-medium font-monts text-blackGreen'>Card number</legend>
                <div className="flex items-center">
                  <input
                    type='text'
                    name='cardNumber'
                    placeholder='1234 4444 5567 8906'
                    onChange={handleCardNumberChange}
                    className='w-full input text- font-medium focus:outline-none p-1 px-2 bg-transparent text-blackGreen placeholder-gray-500 placeholder:text-xs'
                  />
                  {cardType && (
                    <div className="ml-2">
                      {cardType === 'visa' && <span className="text-blue-500"><FaCcVisa /></span>}
                      {cardType === 'mastercard' && <span className="text-red-500"><FaCcMastercard /></span>}
                      {cardType === 'amex' && <span className="text-yellow-500"><FaCcAmex /></span>}
                      {cardType === 'discover' && <span className="text-green-500"><FaCcDiscover /></span>}
                      {cardType === 'verve' && <span className="text-purple-500"><FaCcJcb /></span>}
                    </div>
                  )}
                </div>
              </fieldset>
              <div className='flex justify-between gap-3'>
                <fieldset className='w-1/2 border border-green-800 rounded-md'>
                  <legend className='mx-2 text-xs font-medium font-monts text-blackGreen'>Expiry date</legend>
                  <input
                    type='text'
                    name='expiryDate'
                    placeholder='01/28'
                    className='w-full input text- font-medium focus:outline-none p-1 px-2 bg-transparent text-blackGreen placeholder-gray-500 placeholder:text-xs'
                  />
                </fieldset>
                <fieldset className='w-1/2 border border-green-800 rounded-md'>
                  <legend className='mx-2 text-xs font-medium font-monts text-blackGreen'>CVC</legend>
                  <input
                    type='text'
                    name='cvc'
                    placeholder='123'
                    className='w-full input text-sm italic focus:outline-none p-1 px-2 bg-transparent text-blackGreen'
                  />
                </fieldset>
              </div>
              <fieldset className='border border-green-800 rounded-md'>
                <legend className='mx-2 text-xs font-medium font-monts text-blackGreen'>Name on card</legend>
                <input
                  type='text'
                  name='nameOnCard'
                  placeholder='John Doe'
                  className='w-full input text- font-medium focus:outline-none p-1 px-2 bg-transparent text-blackGreen placeholder-gray-500 placeholder:text-xs'
                />
              </fieldset>
              <button type='submit' className='bg-blackGreen text-lightMint py-2 rounded-lg cursor-pointer my-2'>Add Card</button>
            </form>
            <p className='text-xs text-gray-500 py-4'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your
            card for this payment and future payments in accordance with their terms.
            You can always cancel your subscription.
          </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
