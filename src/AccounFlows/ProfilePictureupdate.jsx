import React, { useState } from 'react';
import Profile from './Profile';
import AccountsNav from '../components/Headers/AccountsNav'; // Assuming you renamed Navbar to AccountsNav

const ProfilePictureUpdate = ({ user }) => {
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleProfilePictureChange = (newProfilePicture) => {
    // Update the profile picture state
    setProfilePicture(newProfilePicture);
  };

  return (
    <div>
      <AccountsNav profilePicture={profilePicture} />
      <Profile
        user={user}
        profilePicture={profilePicture}
        onProfilePictureChange={handleProfilePictureChange}
      />
    </div>
  );
};

export default ProfilePictureUpdate;
