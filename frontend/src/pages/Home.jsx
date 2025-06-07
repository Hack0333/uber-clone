import React, { useRef, useState } from "react";
import uberText from "../assets/uber-text-white.webp";
import uberMap from "../assets/uber-map.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SlArrowDown } from "react-icons/sl";
import LocationPanel from "../components/LocationPanel";
import RidesPanel from "../components/RidesPanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/waitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
import Menu from "../components/Menu";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [addressVisible, setAddressVisible] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [selectedRideImage, setSelectedRideImage] = useState(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [DriverFound, setDriverFound] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const confirmRideRef = useRef(null);
  const vehicleDetailsRef = useRef(null);
  const addressRef = useRef(null);
  const mainRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const driverFoundRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        right: 0,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        right: -300,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    if (addressVisible) {
      gsap.to(addressRef.current, {
        opacity: 1,
        height: "70%",
        display: "block",
        duration: 0.5,
        stagger: 1,
      });
    } else if (addressRef.current) {
      gsap.to(addressRef.current, { opacity: 0, height: 0, display: "none" });
    }
  }, [addressVisible]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehicleDetailsRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (vehicleDetailsRef.current) {
      gsap.to(vehicleDetailsRef.current, {
        translateY: "100%",
        duration: 0.5,
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (confirmRideRef.current) {
      gsap.to(confirmRideRef.current, {
        translateY: "100%",
      });
    }
  }, [confirmRide]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (vehicleFoundRef.current) {
      gsap.to(vehicleFoundRef.current, {
        translateY: "100%",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (DriverFound) {
      gsap.to(driverFoundRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (driverFoundRef.current) {
      gsap.to(driverFoundRef.current, {
        translateY: "100%",
      });
    }
  }, [DriverFound]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  // console.log(vehicle);
  return (
    <div className="relative w-full h-screen flex justify-center overflow-hidden">
      {/* Uber Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center z-20">
        <div className=" flex items-center ml-5">
        <Link to='/home'><IoHomeSharp className=" text-2xl w-12 bg-white rounded-full cursor-pointer"/></Link>
          <img
            src={uberText}
            alt="Uber Logo"
            className="w-24 md:w-32 lg:w-40 px-3 py-4"
          />
        </div>
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-black text-2xl font-semibold cursor-pointer px-5 py-4 "
          >
            Menu
          </button>
        )}
      </div>
      <div
        ref={menuRef}
        className="fixed right-[-300px] w-64 p-4 z-20 bg-gray-900 rounded-bl-lg shadow-lg opacity-0"
      >
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Map Background */}
      <img
        src={uberMap}
        alt="Uber Map"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Booking Section */}
      <div
        ref={mainRef}
        className={`${
          addressVisible ? "top-0 fixed h-screen" : "bottom-0"
        } z-20 bg-gray-900 text-white w-full absolute rounded-t-2xl shadow-lg flex flex-col gap-5 items-center p-5 md:w-3/4 lg:w-2/3 xl:w-1/2`}
      >
        <div className="w-full h-[30%]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Find your trip
            </h3>
            <SlArrowDown
              className={`${
                addressVisible ? "block" : "hidden"
              } text-white text-xl md:text-2xl cursor-pointer`}
              onClick={() => {
                setAddressVisible(false);
                setVehiclePanel(false);
              }}
            />
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              onClick={() => setAddressVisible(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full p-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-gray-500 mb-3"
            />
            <input
              type="text"
              onClick={() => setAddressVisible(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination location"
              className="w-full p-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-gray-500 mb-3"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition">
              Request Ride
            </button>
          </form>
        </div>

        {/* Location Display Section */}
        <div
          ref={addressRef}
          className="w-full bg-gray-800 p-4 rounded-lg overflow-y-auto"
        >
          <LocationPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            addressVisible={addressVisible}
            setAddressVisible={setAddressVisible}
          />
        </div>
      </div>

      {/* Ride Details Section */}
      <div
        ref={vehicleDetailsRef}
        className="fixed bottom-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-5 py-10 bg-gray-900 text-white rounded-t-2xl shadow-lg z-30 self-center translate-y-full"
      >
        <RidesPanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRide={setConfirmRide}
          setSelectedRideImage={setSelectedRideImage}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed bottom-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-5 py-10 bg-gray-900 text-white rounded-t-2xl shadow-lg z-30 self-center translate-y-full"
      >
        <ConfirmRide
          setConfirmRide={setConfirmRide}
          setVehiclePanel={setVehiclePanel}
          selectedRideImage={selectedRideImage}
          setVehicleFound={setVehicleFound}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={driverFoundRef}
        className="fixed bottom-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-5 py-10 bg-gray-900 text-white rounded-t-2xl shadow-lg z-30 self-center translate-y-full"
      >
        <WaitingForDriver setDriverFound={setDriverFound} />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-5 py-10 bg-gray-900 text-white rounded-t-2xl shadow-lg z-30 self-center translate-y-full"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          vehicleFound={vehicleFound}
          selectedRideImage={selectedRideImage}
          setDriverFound={setDriverFound}
        />
      </div>
    </div>
  );
};

export default Home;
