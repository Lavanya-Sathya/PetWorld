import React, { useState } from "react";
import loginImg from "./../assets/images/login.jpg";
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
        navigate("/user");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div
      className="container w-md-50"
      style={{ marginTop: "8rem", marginBottom: "5rem" }}
    >
      <div className="row gridSign">
        <div className="col-md-6 p-0 displaySign">
          <img
            src={loginImg}
            alt="img"
            className="img-fluid rounded"
            style={{ minHeight: "20rem", margin: "0px" }}
          />
        </div>
        <div className="col-md-6  px-5">
          <h2 className="text-center pt-5 heading">LOGIN</h2>
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
            Don't have an account <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
