import { useState } from 'react';
import visa from "./assets/VISA-logo.png"
import mastercard from "./assets/mastercard.png"
import verve from "./assets/vervelogo.png"

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardLogo, setCardLogo] = useState('');

  const detectCardType = (input) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
    const vervePattern = /^506[0-9]{10}$/;

    if (visaPattern.test(input)) {
      return { type: 'Visa', logo: visa };
    } else if (mastercardPattern.test(input)) {
      return { type: 'MasterCard', logo: mastercard };
    } else if (vervePattern.test(input)) {
      return { type: 'Verve', logo: verve };
    } else {
      return { type: 'Unknown', logo: '' };
    }
  };

  const handleCardNumberChange = (event) => {
    const input = event.target.value;
    setCardNumber(input);
    const { type, logo } = detectCardType(input);
    setCardType(type);
    setCardLogo(logo);
  };

  return (
    <div className='border-4 border-red-500 flex'>
      <label>Card Number:</label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />

      {cardType && (
        <div className='flex justify-between'>
          <p>
            Card Type: <strong>{cardType}</strong>
          </p>
          {cardLogo && <img src={cardLogo} alt={`${cardType} Logo`} className='w-28' />}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
