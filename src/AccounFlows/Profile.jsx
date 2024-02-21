import React, { useState } from 'react';
import { IoPencilOutline } from "react-icons/io5";

const Profile = ({ user, onProfilePictureChange }) => {
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
      // Pass the updated profile picture to the parent component
      onProfilePictureChange(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <img
          src={profilePicture}
          alt={`Profile picture of ${user.name}`}
          className="w-32 h-32 rounded-full mr-2 border-2 border-red-500"
        />
        <label
          htmlFor="profilePictureInput"
          className="absolute bottom-1 right-3 p-2 bg-red-500 rounded-full cursor-pointer"
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
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{user.name}</h2>
      </div>
    </div>
  );
};

export default Profile;
