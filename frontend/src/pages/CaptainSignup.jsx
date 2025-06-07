import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });
  const [vehicle, setVehicle] = useState({
    plate: "",
    type: "",
    capacity: "",
    color: "",
  });
  const navigate = useNavigate();
  const { captainData, setCaptainData } = useCaptain();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCaptain = { fullname, email, password, vehicle };
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/captain/register`,
        newCaptain
      );
      if (response.status == 201) {
        const data = response.data;
        // console.log(data);
        setCaptainData(data.captain);
        // console.log(captainData);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
      setEmail("");
      setPassword("");
      setFullname({
        firstname: "",
        lastname: "",
      });
      setVehicle({
        plate: "",
        type: "",
        capacity: "",
        color: "",
      });
      // console.log(response);
      // console.log(data);
      // console.log(user);
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstname" || name === "lastname") {
      setFullname((prev) => ({ ...prev, [name]: value }));
    } else {
      setVehicle((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black p-5">
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-5">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Captain Sign Up 🚖
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-sm font-medium mb-1">What's your name?</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Firstname"
                className="w-1/2 bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                required
                name="firstname"
                value={fullname.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Lastname"
                className="w-1/2 bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                required
                name="lastname"
                value={fullname.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
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
          <div>
            <h3>Vehicle Information</h3>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <div>
                {/* <h3 className="text-sm font-medium mb-1">Plate Number</h3> */}
                <input
                  type="text"
                  placeholder="Plate Number"
                  className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  name="plate"
                  value={vehicle.plate}
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* <h3 className="text-sm font-medium mb-1">Vehicle Type</h3> */}
                <select
                  className="w-full bg-gray-800 text-white rounded p-[0.6rem] outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  name="type"
                  value={vehicle.type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select vehicle type
                  </option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                {/* <h3 className="text-sm font-medium mb-1">Capacity</h3> */}
                <input
                  type="number"
                  placeholder="Capacity"
                  className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  name="capacity"
                  value={vehicle.capacity}
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* <h3 className="text-sm font-medium mb-1">Color</h3> */}
                <input
                  type="text"
                  placeholder="Vehicle Color"
                  className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                  name="color"
                  value={vehicle.color}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded transition">
            Create captain account
          </button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400">
            Already a captain?{" "}
            <Link to="/captain-login" className="text-blue-400 hover:underline">
              Login here
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

export default CaptainSignup;
