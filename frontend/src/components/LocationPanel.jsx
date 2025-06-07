import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationPanel = ({vehiclePanel,setVehiclePanel,addressVisible,setAddressVisible}) => {
  const locations = [
    "350 5th Ave, New York, NY 10118, USA",
    "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    "Westminster, London SW1A 0AA, UK",
    "Bennelong Point, Sydney NSW 2000, Australia",
    "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634, Japan",
    "Potsdamer Platz 1, 10785 Berlin, Germany",
    "233 S Wacker Dr, Chicago, IL 60606, USA",
    "Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE",
    "Gateway of India, Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
    "Marina Bay Sands, 10 Bayfront Ave, Singapore 018956",
    "Victoria Peak, 128 Peak Rd, The Peak, Hong Kong",
    "Av. Paulista, São Paulo - SP, 01311-000, Brazil",
  ];
  return (
    <div>
      {/* <h4 className="text-lg font-medium mb-2">Your Location:</h4> */}
      <div className="flex flex-col gap-4 overflow-y-auto mt-2">
        {locations.map((ele,index)=>(
          <div key={index} onClick={() => {
            setAddressVisible(false);
            setVehiclePanel(true);
          }} className="flex justify-between items-center gap-3 active:border-1 rounded-xl">
          <MdLocationOn className="w-7 h-7 text-red-400" />
          <p className="text-white-300  w-[90%] rounded-lg px-2 py-1 leading-tight bg-gray-600">
            {ele}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPanel;
