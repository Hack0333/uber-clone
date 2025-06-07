import React from "react";
import { MdAccessTime } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const CaptainDetails = () => {
  return (
    <div className="flex items-end justify-center">
      <div className="fixed bottom-0 inset-x-0 mx-auto w-full max-w-md bg-gray-900 text-white rounded-t-2xl shadow-2xl p-6 sm:p-8 md:p-10">
        {/* Driver Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://imgs.search.brave.com/s-FdOtiJTvkBr0HYUw4f3vZj06rt6KUs5reDU36P13Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzc1MDA1MS9waG90/by9sYXJnZS1tYW4t/bWFraW5nLWZ1bm55/LXN1cnByaXNlZC1m/YWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cXdrQS04/YnpLU1dTeHNFMXNS/VWNGWWo3QjBPZFFp/N1E4d29lRTBoQnZn/PQ"
            alt="Driver"
            className="w-14 h-14 rounded-full border border-white"
          />
          <div className="flex-1">
            <h2 className="font-bold text-lg sm:text-xl">Honey Singh</h2>
            <p className="text-gray-400 text-sm">white xuv</p>
          </div>
          <div className="text-right text-sm">
            <p className="text-gray-300">Earned</p>
            <span className="text-yellow-400 font-semibold">₹ 234</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between bg-gray-800 p-3 sm:p-4 rounded-xl mb-4">
          <button className="flex flex-col items-center text-xs sm:text-sm text-gray-300">
            <MdAccessTime className="text-xl sm:text-2xl mb-1" />
            Online Hours
          </button>
          <button className="flex flex-col items-center text-xs sm:text-sm text-gray-300">
            <FaCarSide className="text-xl sm:text-2xl mb-1" />
            Total Rides
          </button>
          <button className="flex flex-col items-center text-xs sm:text-sm text-gray-300">
            <BsTelephoneFill className="text-lg sm:text-xl mb-1" />
            Call User
          </button>
        </div>

        {/* Address Info */}
        <div className="bg-gray-800 p-3 sm:p-4 rounded-xl">
          <h3 className="font-semibold text-base sm:text-lg">562/11-A</h3>
          <p className="text-gray-400 text-sm">Captain details address</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
