import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const placeholderText = 'Select Departure and Return';

  return (
    <fieldset className="border border-gray-500 p-2 rounded-md">
      <legend className="text-sm text-gray-500 ml-1">Depart - Return</legend>

      <div className="flex items-center">
        <DatePicker
          selected={startDate}
          onChange={(dates) => handleDateChange(dates)}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          startDateId="start_date"
          endDateId="end_date"
          dateFormat="MMM d, yyyy"
          placeholderText={placeholderText}
          className="text-md text-gray-500 w-72 outline-none"
        />
      </div>
    </fieldset>
  );
};

export default DateSelector;
