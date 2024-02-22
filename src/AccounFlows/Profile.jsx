import React, { useState} from 'react';
import { IoPencilOutline } from "react-icons/io5";
import defaultProfilePicture from "../../src/assets/user.png"; // Import the default profile picture

const Profile = ({ user, profilePicture, onProfilePictureChange }) => {
  const [currentProfilePicture, setCurrentProfilePicture] = useState(profilePicture || defaultProfilePicture); // Use default profile picture if profilePicture is not available

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentProfilePicture(reader.result);
      // Pass the updated profile picture to the parent component
      onProfilePictureChange(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={currentProfilePicture}
          alt={`Profile picture of ${user.name}`}
          className="w-32 h-32 rounded-full mr-2 border-4 border-mintGreen"
        />
        <label
          htmlFor="profilePictureInput"
          className="absolute bottom-1 right-3 p-2 bg-mintGreen rounded-full cursor-pointer"
        >
          <IoPencilOutline />
        </label>
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
          className="hidden"
          onChange={handleProfilePictureChange}
        />
      </div>
      <div className="ml-4 text-center mt-3">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
