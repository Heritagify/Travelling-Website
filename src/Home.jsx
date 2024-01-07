import { IoAirplane} from "react-icons/io5";
import logo from './assets/Group.svg'

const Home = () => {
  return (
    <>
      <div className="bg-cover h-[450px] bg-center" style={{ backgroundImage: 'url("/src/assets/lp1.png")' }}>
      <nav className="flex text-white justify">
          <h1 className="flex">
              <IoAirplane className="text-white text-2xl"/>Find Flight
          </h1>
          <h1 className="flex">
              <IoAirplane className="text-white text-2xl"/>Find Stays
          </h1>
    <img src="{logo}"/>
      </nav>

    </div>
    </>
  )
}

export default Home
