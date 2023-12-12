import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(sessionStorage.getItem("Token"));

  useEffect(() => {
    if (!userId) {
      // alert("you have logged out successfully");
      navigate("/");
    }
  }, [userId]);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: "white", borderBottom: "2px solid #3a5a40" }}
    >
      <div className="container-fluid  ">
        <Link className="navbar-brand" to="/">
          PetWorld
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-link linkHeader"
              to="/"
            >
              Home
            </NavLink>
            <NavLink className="nav-link linkHeader" to="#">
              About
            </NavLink>
            <NavLink className="nav-link linkHeader" to="#">
              Service
            </NavLink>
            {/* <NavLink className="nav-link linkHeader" to="#">
              Gallery
            </NavLink> */}
            <NavLink className="nav-link linkHeader" to="#">
              Testimonial
            </NavLink>
            <NavLink className="nav-link linkHeader" to="#">
              Appointment
            </NavLink>
            <NavLink className="nav-link linkHeader" to="#">
              Contact
            </NavLink>
            {userId ? (
              <NavLink className="nav-link linkHeader" to="/user">
                Profile
              </NavLink>
            ) : (
              <NavLink className="nav-link linkHeader" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
