import React from 'react';
import { RiUserLocationFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

const RidePopUp = ({setIsRidePopUp,setIsConfirmRide}) => {
    
  return (
    <div className="flex items-end justify-center w-full">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
        {/* Heading */}
        <div className="w-full flex items-center justify-center mb-5">
          <h1 className="text-xl font-bold">New Ride Available!</h1>
        </div>

        {/* Location & Fare Info */}
        <div className="space-y-4">
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
              <h3 className="font-bold text-base sm:text-lg">Ward 5, Purana Bazaar</h3>
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
                setIsConfirmRide(true)
            }}
            className="w-full py-3 bg-green-700 text-white font-semibold text-base rounded-lg transition hover:bg-green-600 active:bg-green-500 mb-3 sm:mb-0"
          >
            Confirm
          </button>
          <button
            onClick={() => {
                setIsRidePopUp(false)
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

export default RidePopUp;
