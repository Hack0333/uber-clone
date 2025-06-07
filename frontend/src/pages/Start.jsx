import React from "react";
import { Link } from "react-router-dom";
import uberText from "../assets/uber-text-white.webp";

const Start = () => {
  return (
    <div className="w-full h-screen bg-[url('./assets/uber.jpg')] bg-cover flex flex-col items-center justify-between p-5">
      <div className="absolute top-5 left-5">
        <img
          src={uberText}
          alt="uber text"
          className="w-32 md:w-40 drop-shadow-2xl"
        />
      </div>
      <div className="w-full flex justify-center mt-auto">
        <Link
          to="/user-signup"
          className="w-full flex items-center justify-center bg-gray-900 text-zinc-400 text-3xl sm:text-4xl rounded px-5 py-3 hover:bg-gray-800 hover:text-white transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
