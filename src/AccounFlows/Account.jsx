import { useState } from "react";
import AccountsNav from "../components/Headers/AccountsNav"
import profilePicture from "../assets/user.png"
import ProfilePicture from "./Profile";
import Profile from './Profile'
import CoverPhoto from '../assets/CoverPhoto.png'
import { IoCloudUploadSharp } from "react-icons/io5";


const Account = () => {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });

  const [coverPhoto, setCoverPhoto] = useState('path_to_default_cover_photo.jpg');

  // Function to handle cover photo change
  const handleCoverPhotoChange = () => {
    const newCoverPhoto = 'path_to_new_cover_photo.jpg';
    setCoverPhoto(newCoverPhoto);
  };

  return (
    <div>
      < AccountsNav user= {user} />
     <div className="h-56 rounded-lg mx-14 my-7 relative bg-cover bg-center" style={{ backgroundImage: `url(${CoverPhoto})` }}>
     <button className="absolute flex gap-1 items-center bottom-4 right-4 px-3 py-2 bg-mintGreen text-xs text-blackGreen rounded-lg hover:bg-blue-600" onClick={handleCoverPhotoChange}>
        <IoCloudUploadSharp />Upload new cover
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center -mb-20">
        <Profile user={user} />
      </div>
    </div>
    </div>
  )
}

export default Account
