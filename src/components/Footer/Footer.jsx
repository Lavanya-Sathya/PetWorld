import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid custom-dark p-0">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="m-md-5 m-2 mt-4">
              <h5>QuickLinks</h5>
              <div className="d-flex flex-column ">
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/" className="nav-link">
                  Sign Up
                </Link>
                <Link to="/" className="nav-link">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-md-5 m-2">
              <h5>PetWorld</h5>
              <div className="d-flex flex-column ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/" className="nav-link">
                  About
                </Link>
                <Link to="/" className="nav-link">
                  Service
                </Link>
                <Link to="/" className="nav-link">
                  Gallery
                </Link>
                <Link to="/" className="nav-link">
                  Testimonial
                </Link>
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="m-md-5 m-2">
              <h5>Services</h5>
              <div className="d-flex flex-column ">
                <Link to="/" className="nav-link">
                  Pet Grooming
                </Link>
                <Link to="/" className="nav-link">
                  Dog Training
                </Link>
                <Link to="/" className="nav-link">
                  Dog Walking
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-md-5 m-2">
              <h5>Pocily</h5>
              <div className="d-flex flex-column ">
                <Link to="/" className="nav-link">
                  Privacy Policy
                </Link>
                <Link to="/" className="nav-link">
                  Refund Policy
                </Link>
                <Link to="/" className="nav-link">
                  Cancellation Pocily
                </Link>
                <Link to="/" className="nav-link">
                  Terms & Condition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark d-flex justify-content-between p-4 mt-3">
        <div>&copy; India</div>
        <div className="">PetWorld Pvt Ltd 2023</div>
      </div>
    </div>
  );
};

export default Footer;
