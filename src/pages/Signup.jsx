import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userDetails) => {
        alert("Signed up successfully");
        const userId = userDetails.user.uid;
        addDoc(collection(db, "users"), {
          uid: userId,
          email: email,
          username: username,
        });
        navigate("/login");
        setEmail("");
        setPass("");
        setUsername("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(error.message);
      });
  };
  return (
    <div className="container my-5 w-md-50">
      <h2 className="text-center pt-5 heading">SIGNUP</h2>
      <div className=" row ">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
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
            <button
              className="btn btnCarousel1 py-2 px-5"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
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
