import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, setUser } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/user-login");
    }
    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers:{Authorization : `Bearer ${token}`}
      }).then(response => {
        // console.log(response);
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
          // console.log("res");
          navigate("/home");
        }
      }).catch((err) => {
        console.log(err);
        // console.log("catch");
        localStorage.removeItem('token');
        navigate("/user-login");
      });
  }, [navigate, isLoading]);
  // console.log("out");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log("last");

  return <>{children}</>;
};

export default ProtectedRoute;
