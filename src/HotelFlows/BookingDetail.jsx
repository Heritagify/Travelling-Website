import React, { useState } from 'react';
import AccountsNav from '../components/Headers/AccountsNav';
import profilePicture from "../assets/user.png";


const BookingDetail = () => {
  // Assume you have user information stored in state
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });

  return (
    <div>
      {/* Include AccountsNav and pass the user prop */}
      <AccountsNav user={user} />
      {/* Other content of BookingDetail component */}
    </div>
  );
};

export default BookingDetail;
