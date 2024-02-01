import { IoAirplane, IoBed } from 'react-icons/io5';
// import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AccountsNav = ({ user }) => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between items-center mx-auto">
      <div className='flex justify-between'>
          <h1 className="flex text-white text-xl">
            <IoAirplane className="mr-2" />
            Find Flight
          </h1>
          <h1 className="flex text-white hover:bg-mintGreen hover:p-2 text-2xl mb-4">
            <IoBed className="mr-2" />
            Find Stays
          </h1>
      </div>
        
        
        <div className="text-white text-xl font-bold">
          <Link to="/">Your Logo</Link>
        </div>        {user && (
          <div className="flex items-center">
            <img
              src={user.profilePicture}
              alt="User Profile"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-white">{user.name}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

AccountsNav.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    }),
  };
  
export default AccountsNav;
