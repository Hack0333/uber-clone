import React from "react";
import { SlArrowDown } from "react-icons/sl";
import uberCar from "../assets/uber-car.webp";
import uberCar1 from "../assets/uber-car1.webp";
import uberMoto from "../assets/uber-moto.webp";
import uberAuto from "../assets/uber-auto.webp";
import { FaUser } from "react-icons/fa";

const RidesPanel = ({ setVehiclePanel, vehiclePanel, setConfirmRide ,setSelectedRideImage}) => {

  const handleSelectRide = (image) => {
    setSelectedRideImage(image);
    setConfirmRide(true);
    setVehiclePanel(false);
  };
  
  return (
    <div>
      <div className="flex flex-col justify-between mb-4 gap-3">
      <SlArrowDown
          className={`${
            vehiclePanel ? "block" : "hidden"
          } text-white text-xl md:text-2xl cursor-pointer self-center`}
          onClick={() => {
            setVehiclePanel(false);
          }}
        />
        <h4 className="font-semibold text-2xl mb-4">Choose a vehicle</h4>
      </div>
      <div
        onClick={() =>handleSelectRide(uberCar1)}
        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border-2 border-gray-700 active:border-white mb-2"
      >
        <img
          className="h-14 w-24 md:h-16 object-cover"
          src={uberCar1}
          alt="UberCar"
        />
        <div className="flex-1 ml-4 gap-2">
          <h4 className="font-bold text-medium md:text-lg flex items-center gap-1">
            UberGo <FaUser /> 3
          </h4>
          <h5 className="font-medium text-sm md:text-base">2 mins away</h5>
          <p className="text-sm md:text-base text-gray-300">
            Affordable, car rides
          </p>
        </div>
        <h2 className="font-medium text-lg md:text-2xl">₹103.20</h2>
      </div>
      <div
       onClick={() =>handleSelectRide(uberMoto)}
        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border-2 border-gray-700 mb-2 active:border-white"
      >
        <img
          className="h-14 w-24 md:h-16 object-cover"
          src={uberMoto}
          alt="UberCar"
        />
        <div className="flex-1 ml-4 gap-2">
          <h4 className="font-bold text-medium md:text-lg flex items-center gap-1">
            UberGo <FaUser /> 1
          </h4>
          <h5 className="font-medium text-sm md:text-base">2 mins away</h5>
          <p className="text-sm md:text-base text-gray-300">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="font-medium text-lg md:text-2xl">₹63.20</h2>
      </div>
      <div
        onClick={() =>handleSelectRide(uberAuto)}
        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border-2 border-gray-700 mb-2 active:border-white"
      >
        <img
          className="h-14 w-24 md:h-16 object-cover"
          src={uberAuto}
          alt="UberCar"
        />
        <div className="flex-1 ml-4 gap-2">
          <h4 className="font-bold text-medium md:text-lg flex items-center gap-1">
            UberGo <FaUser /> 2
          </h4>
          <h5 className="font-medium text-sm md:text-base">2 mins away</h5>
          <p className="text-sm md:text-base text-gray-300">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="font-medium text-lg md:text-2xl">₹100.20</h2>
      </div>
    </div>
  );
};

export default RidesPanel;
