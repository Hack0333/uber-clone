import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { captainData, setCaptainData } = useCaptain();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const captainDetail = {
        email,
        password
      }
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/captain/login`,captainDetail);
      // console.log(response);
      if(response.status === 201){
        const {data} = response;
        setCaptainData(data.captain);
        // console.log(captainData);
        localStorage.setItem('token',data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black p-5">
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-5">
        <h2 className="text-2xl font-semibold text-center mb-4">Captain Login 🚖</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-sm font-medium mb-1">What's your E-mail?</h3>
            <input
              type="email"
              placeholder="abc@example.com"
              className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Enter your password</h3>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded transition">
            Login
          </button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link to="/captain-signup" className="text-blue-400 hover:underline">
              Sign up here
            </Link>
          </p>
          <p className="text-center text-gray-400 mt-4">
            Want to join as a User?{" "}
            <Link to="/user-signup" className="text-blue-400 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;