import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { fullname, email, password };
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/register`,
        newUser
      );
      if (response.status == 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token',data.token);
        navigate("/home");
      }
      setEmail("");
      setPassword("");
      setFullname({
        firstname: "",
        lastname: "",
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
    setFullname((prev) => ({ ...prev, [name]: value }));
  };

  return (
    
    <div className="w-full h-screen flex items-center justify-center bg-black p-5">
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-5">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create an Account 👤
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
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                type="text"
                placeholder="Lastname"
                className="w-1/2 bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
                name="lastname"
                value={fullname.lastname}
                onChange={(e) => {
                  handleChange(e);
                }}
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
              // name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Enter your password</h3>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 text-white rounded p-2 outline-none focus:ring-2 focus:ring-gray-500"
              required
              // name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded transition">
            Create User
          </button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <p className=" text-gray-400">
            Already have an account ?{" "}
            <Link to="/user-login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
          <p className="text-center text-gray-400 mt-4">
            Want to join as a Captain?{" "}
            <Link
              to="/captain-signup"
              className="text-blue-400 hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
