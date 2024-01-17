const TripOption = () => {
  return (
    <div>
        <fieldset className="border border-gray-500 p-2 rounded-md lg:w-52">
          <legend className="text-sm text-gray-500 ml-1">Trip</legend>

          <div className="">
            <select
              id="travelType"
              name="travelType"
              className="my- text-gray-600"
              required
            >
              <option value="depart">Depart</option>
              <option value="return">Return</option>
            </select>
          </div>
        </fieldset>
    </div>
  );
};

export default TripOption;
