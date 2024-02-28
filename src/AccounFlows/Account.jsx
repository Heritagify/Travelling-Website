import { useState } from "react";
import AccountsNav from "../components/Headers/AccountsNav";
import profilePicture from "../assets/user.png";
import Profile from './Profile';
import CoverPhoto from '../assets/CoverPhoto.png';
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { RiSecurePaymentLine } from "react-icons/ri";
import UserAccount from "./UserAcoount";
import TicketBooking from "./history/TicketsBookings"
import Footer from "../components/Footer";
import PaymentMethod from "./PaymentMethod";

const Account = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
    email: 'swiftytech@gmail.com',
  });

  const [coverPhoto, setCoverPhoto] = useState(CoverPhoto);

    // Function to handle profile picture change
    const handleProfilePictureChange = (newProfilePicture) => {
      setUser(prevUser => ({ ...prevUser, profilePicture: newProfilePicture }));
    };

  // Function to handle cover photo change
  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // Set the cover photo to the uploaded image
      setCoverPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <AccountsNav user={user} />
      <div className="h-56 mt-20 rounded-lg mx-14 my-5 relative bg-cover bg-center" style={{ backgroundImage: `url(${coverPhoto})` }}>
        <input
          type="file"
          id="coverPhotoInput"
          accept="image/*"
          className="hidden"
          onChange={handleCoverPhotoChange}
          style={{ display: 'none' }} // hide the default input appearance
        />
        <label
          htmlFor="coverPhotoInput"
          className="absolute flex items-center bottom-4 right-4 px-3 py-2 bg-mintGreen text-xs text-blackGreen rounded-lg hover:bg-blackGreen hover:text-mintGreen cursor-pointer"
          style={{ zIndex: 1 }} // Ensure label covers the entire parent container
        >
          <IoCloudUploadSharp style={{ marginRight: '0.5rem' }} />Upload new cover
        </label>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center -mb-36 border-">
        <Profile user={user} onProfilePictureChange={handleProfilePictureChange} />
        </div>
      </div>
      <div className="pt-36"> {/* Add padding to the top */}
        <div className="flex items-center justify-between shadow-sm shadow-gray-300 mx-14">
            <div className="w-full flex items-center gap-1 p-2 text-blackGreen font-semibold font-monts hover:bg-mintGreen hover:rounded-xl cursor-pointer"><span className="text-gray-100 text-5xl mr-2 font-light">|</span><MdAccountCircle className="text-2xl text-emerald-800"/>Account</div>
            <div className="w-full flex items-center gap-1 p-2 text-blackGreen font-semibold font-monts hover:bg-mintGreen hover:rounded-xl cursor-pointer"><span className="text-gray-300 text-5xl mr-2 font-light">|</span><GoHistory className="text-2xl text-emerald-800"/>History</div>
            <div className="w-full flex items-center gap-1 p-2 text-blackGreen font-semibold font-monts hover:bg-mintGreen hover:rounded-xl cursor-pointer"><span className="text-gray-300 text-5xl mr-2 font-light">|</span><RiSecurePaymentLine className="text-2xl text-emerald-800"/>Payment Methods</div>
        </div>
        <div className="">
          {/* <UserAccount/> */}
          {/* <TicketBooking /> */}
          <PaymentMethod />
        </div>
      </div>
      {/* ------------FOOTER------------ */}
      <div className="mt-48">
        <Footer/>
      </div>
    </div>
  );
};

export default Account;
