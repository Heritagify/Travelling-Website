import { useEffect } from 'react';

const TripOption = () => {
  useEffect(() => {
    // Remove default dropdown arrow and apply custom styling
    const selectElement = document.getElementById('travelType');
    if (selectElement) {
      selectElement.addEventListener('mousedown', function () {
        this.size = 2;
      });

      selectElement.addEventListener('change', function () {
        this.blur();
      });

      selectElement.addEventListener('blur', function () {
        this.size = 1;
      });
    }
  }, []);

  return (
    <div>
      <fieldset className="border border-gray-500 p-2 rounded-md">
        <legend className="text-sm text-gray-500">Passenger - Class</legend>

        <div className="flex items-center">
          <select
            id="travelType"
            name="travelType"
            className="text-gray-600 text-sm lg:text-base outline-none appearance-none w-60"
            required
          >
            <option value="1Economy">1 Passenger - Economy</option>
            <option value="2Economy">2 Passenger - Economy</option>
            <option value="3Economy">3 Passenger - Economy</option>
            <option value="4Economy">4 Passenger - Economy</option>
            <option value="5Economy">5 Passenger - Economy</option>
            <option value="2Business">1 passenger - Business</option>
            <option value="2Business">2 passenger - Business</option>
            <option value="3Business">3 passenger - Business</option>
            <option value="4Business">4 passenger - Business</option>
            <option value="5Business">5 passenger - Business</option>
            <option value="1FirstClass">1 Passenger - First Class</option>
            <option value="1FirstClass">2 Passenger - First Class</option>
            <option value="1FirstClass">3 Passenger - First Class</option>
            <option value="1FirstClass">4 Passenger - First Class</option>
            <option value="1FirstClass">5 Passenger - First Class</option>
          </select>
        </div>
      </fieldset>
    </div>
  );
};

export default TripOption;
