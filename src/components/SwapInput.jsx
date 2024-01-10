import { useState } from 'react';
import { IoSwapHorizontal } from "react-icons/io5";


const SwapInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSwap = () => {
    // Perform the swap logic here
    console.log('Swapping...');
  };

  return (
    <fieldset className="border border-gray-400 rounded-md py-2 w-20">
      <legend className="text-sm text-gray-500 ml-3">From -To</legend>

      <div className="flex items-center">
        <input
          type="text"
          className="outline-none flex-grow px-1 mr-2"
          placeholder="Lahore - Belgium"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="mr-2 hover:bg-emerald-900"
          onClick={handleSwap}
        >
          <IoSwapHorizontal className='text-2xl text-gray-800'/>
        </button>
      </div>
    </fieldset>
  );
};

export default SwapInput;
