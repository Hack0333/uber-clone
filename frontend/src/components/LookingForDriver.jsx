import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import { RiUserLocationFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const LookingForDriver = ({setVehicleFound,vehicleFound,selectedRideImage,setDriverFound}) => {
  return (
    <div>
    <div className="flex justify-between items-center flex-col mb-4 gap-3">
      <SlArrowDown
        className={`${
            vehicleFound ? "block" : "hidden"
        } text-white text-xl md:text-2xl cursor-pointer self-center`}
        onClick={() => {
            setVehicleFound(false)
        }}
      />
      <h4 className="font-semibold text-2xl mb-4">Looking For Driver</h4>
    </div>
    <div className="w-full flex items-center justify-center mb-5">
    <img src={selectedRideImage} alt="vehicle-Image" className="h-30 w-40 object-cover"/>
    </div>
      <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
        <RiUserLocationFill className="text-green-500 text-2xl md:text-3xl" />
        <div>
          <h3 className="font-bold text-lg">562/11A</h3>
          <p className="text-sm text-gray-300">Dimapur, Nagaland</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
        <ImLocation2 className="text-blue-500 text-2xl md:text-3xl" />
        <div>
          <h3 className="font-bold text-lg">562/11A</h3>
          <p className="text-sm text-gray-300">Dimapur, Nagaland</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
        <RiMoneyRupeeCircleFill className="text-yellow-500 text-2xl md:text-3xl" />
        <div>
          <h3 className="font-bold text-lg">₹123</h3>
          <p className="text-sm text-gray-300">Cash</p>
        </div>
      </div>
    </div>

    <button
  onClick={() => {
    setVehicleFound(false);
    setDriverFound(true);
  }}
  className="w-full mt-5 py-3 bg-green-700 text-white font-semibold text-lg rounded-lg transition active:bg-green-400 hover:bg-green-600"
>
  Confirm Driver
</button>

  </div>
  )
}

export default LookingForDriver