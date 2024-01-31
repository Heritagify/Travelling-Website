import { IoAirplane, IoBed } from 'react-icons/io5';
import { Link } from 'react-router-dom'; // If you're using React Router

const AccountsNav = ({ user }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="flex text-white text-2xl mb-4">
        <IoAirplane className="mr-2" />
        Find Flight
      </h1>
      <h1 className="flex text-white hover:bg-mintGreen hover:p-2 text-2xl mb-4">
        <IoBed className="mr-2" />
        Find Stays
      </h1>
        
        
        <div className="text-white text-xl font-bold">
          <Link to="/">Your Logo</Link>
        </div>
        {user && (
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

export default AccountsNav;
