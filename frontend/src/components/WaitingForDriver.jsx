import React from "react";
import { FaShieldAlt, FaShareAlt, FaPhone } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

const WaitingForDriver = ({ setDriverFound }) => {
  return (
    <div className="w-full mx-auto bg-gray-900 text-white px-5 rounded-lg shadow-lg">
      {/* Close Button */}
      <div className="flex justify-center mb-5">
        <SlArrowDown
          className="text-white text-2xl cursor-pointer"
          onClick={() => setDriverFound(false)}
        />
      </div>

      {/* Driver Info */}
      <div className="flex items-center gap-3 mb-5 ">
        <img
          src="https://via.placeholder.com/50"
          alt="Driver"
          className="w-12 h-12 rounded-full border"
        />
        <div className="flex-1">
          <h2 className="font-bold text-xl">KA15AK00-0</h2>
          <p className="text-gray-400">White Suzuki S-Presso LXI</p>
        </div>
        <span className="text-yellow-400 font-semibold">⭐ 4.9</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around bg-gray-800 p-3 rounded-lg mb-5">
        <button className="flex flex-col items-center text-gray-300">
          <FaShieldAlt className="text-xl mb-1" /> Safety
        </button>
        <button className="flex flex-col items-center text-gray-300">
          <FaShareAlt className="text-xl mb-1" /> Share my trip
        </button>
        <button className="flex flex-col items-center text-gray-300">
          <FaPhone className="text-xl mb-1" /> Call driver
        </button>
      </div>

      {/* Location */}
      <div className="p-3 bg-gray-800 rounded-lg">
        <h3 className="font-bold text-lg">562/11-A</h3>
        <p className="text-gray-400">Kaikondrahalli, Bengaluru, Karnataka</p>
      </div>
      <button className="w-full mt-5 py-3 bg-green-700 text-white font-semibold text-lg rounded-lg transition hover:bg-green-600 active:bg-green-500">
  Confirm Payment
</button>

    </div>
  );
};

export default WaitingForDriver;
