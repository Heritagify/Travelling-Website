import { IoAirplane, IoBed } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from "../assets/footLogo.png"
import Favorite from './Favourite';

const AccountsNav = ({ user }) => {
  return (
    <nav className="p-4 shadow-md shadow-gray-200">
      <div className="flex justify-between items-center mx-8">
      <div className='flex justify-between space-x-5'>
          <h1 className="flex text-blackGreen text-lg">
            <IoAirplane className="mr-1 text-2xl" />
            Find Flight
          </h1>
          <h1 className="flex text-blackGreen text-lg border-b-2 border-blackGreen">
            <IoBed className="mr-1 text-2xl" />
            Find Stays
          </h1>
      </div>


          <Link to="/">
            <img src={logo} className='w-28'/>
          </Link>


           <div className='flex items-center space-x-3'>
               <div className='flex space-x-1 items-center'>
                   <Favorite />
                   <p className='text-sm'>Favourites</p>
                   <span className='text-2xl'>|</span>
               </div>
                       {user && (
                         <div className="flex items-center gap-1">
                <img
                  src={user.profilePicture}
                  alt={`Profile picture of ${user.name}`}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="text-blackGreen font-semibold">{user.name}</span>
                         </div>
                       )}
           </div>
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
