import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = async() => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      console.log("Logged out:", response.data.message);
      navigate('/user-login');
    } catch (error) {
      console.error("Logout Failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="bg-green-900 w-60 p-4 rounded-bl-lg shadow-lg text-white">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-2 text-white text-lg font-bold"
      >
        ✕
      </button>
      <div className="mt-8 space-y-3">
        <div>👤 {user?.fullname?.firstname || "Guest"}</div>
        <div>💰 Wallet</div>
        <div>🚗 Rides</div>
        <div>⚙️ Settings</div>
        <button
          onClick={handleLogOut}
          className="mt-4 bg-gray-800 w-full py-2 rounded-2xl hover:bg-zinc-300 hover:text-black active:bg-gray-800 active:text-white transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Menu;
