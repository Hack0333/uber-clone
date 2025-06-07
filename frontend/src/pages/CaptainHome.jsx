import React, { useRef, useState } from 'react';
import Menu from "../components/Menu";
import { IoHomeSharp } from "react-icons/io5";
import uberText from "../assets/uber-text-white.webp";
import uberMap from "../assets/uber-map.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsRidePopUp,setIsRidePopUp] = useState(true);
  const [IsConfirmRide,setIsConfirmRide] = useState(false);
  const ridePopupRef = useRef(null);
  const menuRef = useRef(null);
  const confirmRideRef = useRef(null);

  useGSAP(() => {
    gsap.to(menuRef.current, {
      duration: 0.5,
      opacity: isMenuOpen ? 1 : 0,
      right: isMenuOpen ? 0 : -300,
      ease: "power3.out",
    });
  }, [isMenuOpen]);

  useGSAP(() => {
    if (IsRidePopUp) {
      gsap.to(ridePopupRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (ridePopupRef.current) {
      gsap.to(ridePopupRef.current, {
        translateY: "100%",
      });
    }
  }, [IsRidePopUp]);

  useGSAP(() => {
    if (IsConfirmRide) {
      gsap.to(confirmRideRef.current, {
        translateY: 0,
        duration: 0.5,
      });
    } else if (confirmRideRef.current) {
      gsap.to(confirmRideRef.current, {
        translateY: "100%",
      });
    }
  }, [IsConfirmRide]);

  return (
    <div className="relative w-full h-screen flex justify-center overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-5 py-3 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-3">
          <IoHomeSharp className="text-3xl bg-white text-black rounded-full p-1 cursor-pointer" />
          <img src={uberText} alt="Uber Logo" className="w-32 md:w-40" />
        </div>
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white text-lg font-medium"
          >
            Menu
          </button>
        )}
      </div>

      {/* Slide-in Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-[-300px] w-64 h-full p-4 z-30 bg-gray-900 shadow-xl opacity-0"
      >
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Map */}
      <img
        src={uberMap}
        alt="Uber Map"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Panel */}
     {/* CaptainDetails - Sticky Bottom */}
<div className="absolute bottom-0 w-full flex justify-center z-20">
  <CaptainDetails />
</div>

{/* RidePopUp - Floating Panel */}
<div ref={ridePopupRef} className="absolute bottom-0 w-full flex justify-center z-20">
  <RidePopUp setIsRidePopUp={setIsRidePopUp} setIsConfirmRide={setIsConfirmRide}/>
</div>

<div ref={confirmRideRef} className="w-full flex justify-center z-20 h-screen">
  <ConfirmRidePopup setIsConfirmRide={setIsConfirmRide} IsConfirmRide={IsConfirmRide}/>
</div>

    </div>
  );
};

export default CaptainHome;
