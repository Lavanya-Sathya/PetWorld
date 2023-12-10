import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // authorization not provided to home page if the token is expired
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
  }, []);
  return <div className="container">UserHome</div>;
};

export default UserHome;
