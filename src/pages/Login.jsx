import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in Successfully");
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            sessionStorage.setItem("Token", JSON.stringify(uid));
          }
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container my-5 w-md-50">
      <h2 className="text-center pt-5 heading">LOGIN</h2>
      <div className=" row ">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4 text-center">
            <button
              className="btn btnCarousel1 py-2 px-5"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <p className="text-center my-3">
            New User? Please <Link to="/signup">SignUp here</Link>
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Login;
