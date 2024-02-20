import React from 'react'
import { IoPencilOutline } from "react-icons/io5";
<IoPencilOutline />



const Profile = () => {
  return (
    <div>
       <img
          src={user.profilePicture}
          alt={`Profile picture of ${user.name}`}
          className="w-10 h-10 rounded-full mr-2"
        />
    </div>
  )
}

export default Profile
