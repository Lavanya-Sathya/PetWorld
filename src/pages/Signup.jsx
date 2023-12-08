import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container my-5 w-md-50">
      <h2 className="text-center pt-5">SIGNUP</h2>
      <div className=" row ">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Confrim Password"
            />
          </div>
          <div className="mt-4 text-center">
            <button className="btn btnCarousel1 py-2 px-5">Submit</button>
          </div>
          <p className="text-center my-3">
            Already has account? Please <Link to="/login">Login here</Link>
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Signup;
