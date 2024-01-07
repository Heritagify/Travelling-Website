import logo from './assets/Group.svg'
import { IoAirplane} from "react-icons/io5";
import { IoBed } from "react-icons/io5";


const Home = () => {
  return (
    <div className="relative mx-5 mt-5 ">
      <div className="rounded-3xl p-3 pt-1 bg-cover h-[450px] bg-center bg-gray-900" style={{ backgroundImage: 'url("/src/assets/lp1.png")' }}>
      <div className="rounded-3xl absolute inset-0 bg-black bg-opacity-30"></div>

      <nav className="relative z-10 flex text-white justify-between p-2 items-center">
          <div className="flex space-x-5">
            <h1 className="flex space-x-3">
                <IoAirplane className="text-white text-2xl"/>Find Flight
            </h1>
            <h1 className="flex space-x-4">
                <IoBed className="text-white text-2xl"/>Find Stays
            </h1>
          </div>
           <img src={logo} className=""/>
           <div className="flex font-bold space-x-5 items-center">
             <p className="">LOGIN</p>
             <button className="text-black bg-white rounded-md p-2">Sign Up</button>
           </div>
      </nav>

    </div>
    </div>
  )
}

export default Home
