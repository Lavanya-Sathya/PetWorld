import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(sessionStorage.getItem("Token"));
  const handleLogOut = () => {
    sessionStorage.removeItem("Token");
    alert("Logged Out Successfully");
    navigate("/");
  };
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
              Contact
            </NavLink>
            <NavLink className="nav-link linkHeader" to="#">
              Appointment
            </NavLink>
            {userId ? (
              <>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="/user"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link class="dropdown-item" to="/user">
                        UserName
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" onClick={handleLogOut}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
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
