import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../components/Firebase/Firebase";
import userImg from "./../assets/images/img.jpg";
import petImagesAlt from "./../assets/images/petImagesAlt.jpg";
import {
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const UserHome = () => {
  // dog Api
  const api = "https://dog.ceo/api/breeds/list/all";
  const navigate = useNavigate();

  // To store current user information
  const [user, setUser] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [appointment, setAppointment] = useState(null);
  let [counter, setCounter] = useState(1);

  const [dog, setDog] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  const [breed, setBreed] = useState(null);
  const [gender, setGender] = useState(null);
  const [size, setSize] = useState(null);
  const [aggressive, setAggressive] = useState(null);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

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
    const fetchAppointmentData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "pets"), where("uid", "==", userId)),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setAppointment(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchAppointmentData();
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setDog(Object.keys(data.message)))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);
  // fetch dog image
  useEffect(() => {
    if (breed) {
      const apiImage = `https://dog.ceo/api/breed/${breed}/images/random`;

      fetch(apiImage)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setDogImage(data.message)) // Assuming 'data.message' contains the image URL
        .catch((error) =>
          console.error("There was a problem with the fetch operation:", error)
        );
    }
  }, [breed]);

  // logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      navigate("/");
    }
  };

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
      <div className="w-100 py-5 d-flex justify-content-ceneter gap-5">
        <h2 className="text-center heading">Welcome {user?.data?.username}</h2>
        <h2>
          <i
            className="bi bi-box-arrow-right"
            onClick={(e) => handleLogOut(e)}
            style={{ cursor: "pointer" }}
          ></i>
        </h2>
        {/* <button
          className="btn btnCarousel1 w-40 "
          style={{ margin: "auto" }}
          onClick={(e) => handleLogOut(e)}
        >
          Log Out
        </button> */}
      </div>
      <div className="mb-5">
        <h4 className="heading"> Personal Details</h4>
        <div className=" row gap-5 ">
          <div className="col-md-6 order-md-2">
            <p className="text-muted fs-6 fw-bold">
              Name: {user?.data?.username}
            </p>
            <p className="text-muted fs-6 fw-bold">
              Email: {user?.data?.email}
            </p>
            <label
              htmlFor="name"
              className="form-label text-muted fs-6 fw-bold"
            >
              Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Mobile Number..."
              value={mobileNo}
              onChange={(e) => setMobileNo(e)}
            />
            <div className="mt-4 ">
              <button className="btn btnCarousel1" onClick={handleAppointment}>
                Update
              </button>
            </div>
          </div>
          {/* <div className="imgSec col-md-4 d-flex justify-content-center">
            <img
              src={userImg}
              alt="userImage"
              className="img-fluid"
              style={{ borderRadius: "15rem" }}
            />
          </div> */}
        </div>
      </div>
      <div className="my-4">
        <h4 className="heading">Your Appointments</h4>
        {/* {console.log("Appointments:", appointment)} */}
        {appointment !== "" && appointment?.length > 0 ? (
          appointment.map((app) => (
            <div className="container" key={app.id}>
              <div className="my-3 fs-5">
                <span className="px-4">{counter++}.</span>
                <span className="px-2">{app.data.breed}</span>
                <span className="px-2"> {app.data.service}</span>
                <span className="px-2">
                  {app.data.date} - {app.data.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>Your appointments will be shown here</div>
        )}
      </div>
      <h4 className="heading">Add your Pet Details</h4>
      <div className="mt-2">
        <div className="row gap-5">
          <div className="col-md-5">
            <div className="mt-4">
              <label
                htmlFor="breed"
                className="form-label text-muted fs-6 fw-bold"
              >
                Breed of your pet ?
              </label>
              <select
                name=""
                id=""
                className="form-select"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="" className="optHover">
                  Select Breed
                </option>
                {dog &&
                  dog.map((breeds) => (
                    <option key={breeds} value={breeds} className="optHover">
                      {breeds}
                    </option>
                  ))}
              </select>
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
              <label
                htmlFor="size"
                className="form-label text-muted fs-6 fw-bold"
              >
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
          </div>
          <div className="col-md-5">
            {breed ? (
              <>
                <img
                  src={dogImage}
                  alt="We don't have image for this pet, you can upload your pet image"
                  className="img-fluid my-3 rounded"
                  style={{
                    width: "100%",
                    maxHeight: "20rem",
                    objectFit: "contain",
                  }}
                />
              </>
            ) : (
              <>
                <img
                  src={petImagesAlt}
                  alt="pet"
                  className="img-fluid my-3 rounded"
                  style={{
                    width: "100%",
                    maxHeight: "20rem",
                    objectFit: "contain",
                  }}
                />
              </>
            )}
          </div>
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

            <select
              name=""
              id="dateTime"
              className="form-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select time Slot</option>
              <option value="9:00AM">9:00 AM</option>
              <option value="10:00AM">10:00 AM</option>
              <option value="11.00AM">11:00 AM</option>
              <option value="12.00PM">12:00 PM</option>
              <option value="1.00AM">1:00 PM</option>
              <option value="2.00AM">2:00 PM</option>
              <option value="3.00AM">3:00 PM</option>
              <option value="4.00AM">4:00 PM</option>
              <option value="5.00AM">5:00 PM</option>
              <option value="6.00AM">6:00 PM</option>
              <option value="7.00AM">7:00 PM</option>
            </select>
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
