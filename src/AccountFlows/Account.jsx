import { useState } from "react";
import AccountsNav from "../components/AccountsNav"
import profilePicture from "../assets/user.png"

const Account = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: profilePicture,
  });


  return (
    <div>
      < AccountsNav user= {user} />
    </div>
  )
}

export default Account
