import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { RiUserLocationFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

const ConfirmRidePopup = ({ setIsConfirmRide, IsConfirmRide }) => {
  return (
    <div className="flex items-end justify-center w-full h-screen">
      <div
        className={`w-full max-w-md bg-gray-900 text-white ${
          IsConfirmRide ? "h-screen" : ""
        } p-6 sm:p-8 shadow-xl`}
      >
        {/* Heading */}
        <div className="w-full flex items-center justify-center mb-5 gap-4">
          <h1 className="text-xl font-bold">Confirm this ride to start</h1>
          <SlArrowDown
            className={`text-white text-xl md:text-2xl cursor-pointer self-center`}
            onClick={() => {
              setIsConfirmRide(false);
            }}
          />
        </div>

        {/* Location & Fare Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-green-400 overflow-hidden">
              <img
                className=" object-fit w-10 h-10 "
                src="https://imgs.search.brave.com/SZsEonl90MsvQ8TwfVcWSjyjzER8Gkc5sQf8TyYtXhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/dXRlLWxhZHktcGlu/ay1vdXRmaXQtc3Vu/Z2xhc3Nlcy1ob2xk/aW5nLWJvb2tfMTk3/NTMxLTE1MDA5Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
                alt=""
              />
            </div>
            <div className="flex justify-between w-64">
                <h1>Neha Sharma</h1>
                <h3>2.5 km</h3>
            </div>
          </div>
          {/* Pickup */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <RiUserLocationFill className="text-green-500 text-2xl md:text-3xl" />
            <div>
              <h3 className="font-bold text-base sm:text-lg">562/11A</h3>
              <p className="text-sm text-gray-300">Dimapur, Nagaland</p>
            </div>
          </div>

          {/* Drop */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <ImLocation2 className="text-blue-500 text-2xl md:text-3xl" />
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                Ward 5, Purana Bazaar
              </h3>
              <p className="text-sm text-gray-300">Dimapur, Nagaland</p>
            </div>
          </div>

          {/* Fare */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <RiMoneyRupeeCircleFill className="text-yellow-500 text-2xl md:text-3xl" />
            <div>
              <h3 className="font-bold text-base sm:text-lg">₹123</h3>
              <p className="text-sm text-gray-300">Cash</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
          <button
            onClick={() => {
              // Handle confirm
            }}
            className="w-full py-3 bg-green-700 text-white font-semibold text-base rounded-lg transition hover:bg-green-600 active:bg-green-500 mb-3 sm:mb-0"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setIsConfirmRide(false);
            }}
            className="w-full py-3 bg-red-600 text-white font-semibold text-base rounded-lg transition hover:bg-red-500 active:bg-red-400"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
