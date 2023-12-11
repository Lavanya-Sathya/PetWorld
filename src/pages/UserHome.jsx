import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../components/Firebase/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const UserHome = () => {
  const navigate = useNavigate();

  // To store current user information
  const [user, setUser] = useState(null);
  const userId = JSON.parse(sessionStorage.getItem("Token"));
  useEffect(() => {
    // authorization not provided to home page if the token is expired
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
    // Fetch the current user data from the firebase
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "users"), where("uid", "==", userId)),
          (querySnapshot) => {
            // const postsArray = [];
            querySnapshot.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());
              setUser({ id: doc.id, data: doc.data() });
            });
            // console.log(user);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  // logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      alert("Logged Out Successfully");
      navigate("/");
    }
  };

  const [breed, setBreed] = useState(null);
  const [gender, setGender] = useState(null);
  const [size, setSize] = useState(null);
  const [aggressive, setAggressive] = useState(null);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleAppointment = () => {
    try {
      if (
        breed === null ||
        gender === null ||
        size === null ||
        aggressive === null ||
        date === null ||
        time === null
      ) {
        alert("Please fill all the fields");
      } else {
        addDoc(collection(db, "pets"), {
          uid: userId,
          breed: breed,
          gender: gender,
          size: size,
          aggressive: aggressive,
          service: service,
          date: date,
          time: time,
        });
        alert("You have booked your appointment successfully");
      }
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
      alert(error.message);
    }
  };
  return (
    <div className="container my-5">
      <h2 className="text-center pt-5 heading">
        Welcome {user?.data?.username}
      </h2>
      <div className="w-100 pb-5 d-flex justify-content-ceneter">
        <button
          className="btn btnCarousel1 w-40 "
          style={{ margin: "auto" }}
          onClick={(e) => handleLogOut(e)}
        >
          Log Out
        </button>
      </div>
      <h4>Add your Pet Details</h4>
      <div className="mt-2">
        <div className="mt-4">
          <label htmlFor="breed" className="form-label text-muted fs-6 fw-bold">
            Breed of your pet ?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter your pet's breed..."
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="gender"
            className="form-label text-muted fs-6 fw-bold"
          >
            Gender of your pet ?
          </label>
          <select
            name=""
            id="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" className="optHover">
              Select Gender
            </option>

            <option value="Female" className="optHover">
              Female
            </option>
            <option value="Male" className="optHover">
              Male
            </option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="size" className="form-label text-muted fs-6 fw-bold">
            Size of your pet ?
          </label>
          <select
            name=""
            id="size"
            className="form-select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="aggressive"
            className="form-label text-muted fs-6 fw-bold"
          >
            How aggressive is your pet ?
          </label>
          <select
            name=""
            id="aggressive"
            className="form-select"
            value={aggressive}
            onChange={(e) => setAggressive(e.target.value)}
          >
            <option value="">Select </option>
            <option value="Small">Low</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="service"
            className="form-label text-muted fs-6 fw-bold"
          >
            Select Service ?
          </label>
          <select
            name=""
            id="service"
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select </option>
            <option value="SpaBath">Spa Bath</option>
            <option value="BasicGrooming">Bath + Basic Grooming</option>
            <option value="FullService">Full Service</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="dateTime"
            className="form-label text-muted fs-6 fw-bold"
          >
            Select the Slot
          </label>
          <div className="d-flex gap-4">
            <input
              type="date"
              className="form-control"
              id="dateTime"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="form-control"
              id="dateTime"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btnCarousel1" onClick={handleAppointment}>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
