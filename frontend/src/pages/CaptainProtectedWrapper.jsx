import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const {isLoading,setIsLoading,setCaptainData} = useCaptain();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/captain-login");
    }
    axios.get(`${import.meta.env.VITE_API_URL}/captain/profile`,{
      headers:{
        Authorization : `Bearer ${token}`
      }
    }).then(response => {
      if(response.status === 201){
        setCaptainData(response.data.captain);
        setIsLoading(false);
        navigate('/captain-home');
      }
    }).catch(err => {
      console.log(err);
      localStorage.removeItem('token');
      navigate('/captain-login');
    })


  }, [navigate,isLoading]);

  if(isLoading){
    return <div>Loading...</div>
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
