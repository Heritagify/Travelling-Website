import React from 'react'
import { IoPencilOutline } from "react-icons/io5";
<IoPencilOutline />



const Profile = ({ user }) => {
  return (
    <div>
    {/* <h1>PROFILEEEEEEEEEEEEEEEEEEEEEEEE</h1> */}
       <img
          src={user.profilePicture}
          alt={`Profile picture of ${user.name}`}
          className="w-32 h-32 rounded-full mr-2"
        />
    </div>
  )
}

export default Profile
