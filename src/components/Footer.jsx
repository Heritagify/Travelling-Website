import logo from "../assets/footLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Vector from "./Vector";

const Footer = () => {
  return (
    <div className="">
      {/* --------Float------ */}
      <div className=" absolute bg-emerald-900 md:bg-lightMint lg:h-56 -mt-28 md:w-4/5 mb-44 rounded-xl px-2 md:px-0 mx-4 md:mx-20 lg:mx-28 flex justify-between">
        <div className="md:w-3/5 pl-2 space-y-1 pb-3 md:pb-0 md:space-y-0">
          <h1 className="text-mintGreen md:text-blackGreen font-monts font-bold text-2xl md:text-4xl py-2 md:w-20">
            Subscribe Newsletter
          </h1>
          <h3 className="font-monts font-bold text-xl text-blackGreen">
            The Travel
          </h3>
          <p className="text-base font-medium font-monts text-gray-300 md:text-blackGreen">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className="py-2 space-x-2 md:space-x-0">
            <input
              className="bg-white p-3 lg:w-3/4 outline-none"
              placeholder="Your email address"
            />
            <button className="bg-blackGreen align-middle p-3 px-4 text-white text-sm rounded-lg outline-none cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        {/* VECTOR______ */}
        <Vector />
      </div>
      {/* ----------Float Ends--------------- */}

      <div className=" bg-emerald-200 mt-40 pt-32 md:pt-44 pb-10">
        <div className="mt-30">
          <div className=" md:justify-center space-y-5 lg:space-y-0 grid md:grid-cols-2 lg:grid-cols-6 lg:space-x-3 mx-6 md:mx-6 lg:mx-20 text-blackGreen">
            <div className="space-y-5">
              <img
                src={logo}
                alt="logo"
                className="w-44 md:w-52 lg:w-28 py-2 rounded-lg"
              />
              <div className="flex text-blackGreen space-x-4 md:space-x-1 text-4xl lg:text-xl">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <AiFillInstagram />
                <IoLogoWhatsapp />
              </div>
            </div>
            {/* .........1.... */}
            <div className="space-y-1">
              <h1 className="font-bold text-xl">Our Destinations</h1>
              <p className=" font-monts">Canada</p>
              <p className="font-monts text-sm">Alaska</p>
              <p className="font-monts text-sm">France</p>
              <p className="font-monts text-sm">Iceland</p>
            </div>
            {/* .........2.... */}
            <div className="space-y-1 ">
              <h1 className="font-bold text-2xl lg:text-lg">Our Acvtivities</h1>
              <p className="text-lg font-medium lg:text-sm  font-monts">
                Northern lights
              </p>
              <p className="font-monts text-sm ">Cruising & Sailing</p>
              <p className="font-monts text-sm">Multi-activities</p>
              <p className="font-monts text-sm">Kayaing</p>
            </div>
            {/* .........3.... */}
            <div className="space-y-1 ">
              <h1 className="font-bold text-2xl lg:text-lg">Travel Blogs</h1>
              <p className="text-sm  font-monts">Bali Travel Guide</p>
              <p className="font-monts text-sm">Sri lanks Travel Guide</p>
              <p className="font-monts text-sm">Peru Travel Guide</p>
              <p className="font-monts text-sm">Bali travel guide</p>
            </div>
            {/* .........4.... */}
            <div className=" space-y-1 ">
              <h1 className="font-bold text-2xl lg:text-lg">About Us</h1>
              <p className="text-sm  font-monts">Our Story</p>
              <p className="font-monts text-sm">Work with us</p>
            </div>
            {/* .........5.... */}
            <div className="space-y-1 ">
              <h1 className="font-bold text-2xl lg:text-lg">Contact Us</h1>
              <p className="text-sm  font-monts">Our Story</p>
              <p className="font-monts text-sm">Work with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
