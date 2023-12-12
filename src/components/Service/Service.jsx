import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
const Service = () => {
  const [service, setService] = useState(null);
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "services")),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setService(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchServiceData();
  }, []);
  return (
    <div className="container mb-4" id="service-section">
      <h2 className="text-center heading">Our Services</h2>
      <div className="row my-5 justify-content-center">
        {service &&
          service.map((serviceData) => (
            <div className="col-lg-4 col-md-6 mb-5" key={serviceData.id}>
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between border-bottom pb-3">
                    <h4>{serviceData.data.serviceHeading}</h4>
                    <div className="card-title-sub d-flex flex-column">
                      <h5 className="text-decoration-line-through text-danger align-self-end">
                        ₹{serviceData.data.price}
                      </h5>
                      <h3>₹{serviceData.data.discountPrice}</h3>
                    </div>
                  </div>
                  <p className="card-text py-3 d-flex flex-column gap-2 cardTextSevice">
                    {serviceData.data.serviceItems.map((feature, index) => (
                      <div key={index} className="fs-5 d-flex gap-3">
                        <i className="bi bi-check-lg fw-bold  text-success"></i>
                        {feature}
                      </div>
                    ))}
                  </p>
                  <div className="text-center">
                    <Link to="#" className="btn btnCarousel1 mb-3 mt-2 px-5">
                      Book a Groomer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* <div className="col-lg-4 col-md-6 mb-5">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex justify-content-between border-bottom pb-3">
                <h4>Spa Bath</h4>
                <div className="card-title-sub d-flex flex-column">
                  <h5 className="text-decoration-line-through text-danger align-self-end">
                    ₹1318
                  </h5>
                  <h3>₹1099</h3>
                </div>
              </div>
              <p className="card-text py-3 d-flex flex-column gap-2">
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Bath
                  With Shampoo & Conditioner
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Blow
                  Dry
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i>Full body
                  Trimming/Zero Haircut
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Ear
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Eyes
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i>Body Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i>Sanitary
                  Trim
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i> Nail
                  Clipping
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i>Teeth
                  Cleaning/Mouth Spray
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Paw
                  Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>
                  Combing/Brushing
                </div>
              </p>
              <div className="text-center">
                <Link to="#" className="btn btnCarousel1 py-2 px-5">
                  Book a Groomer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex justify-content-between border-bottom pb-3">
                <h4>Bath + Basic Grooming</h4>
                <div className="card-title-sub d-flex flex-column">
                  <h5 className="text-decoration-line-through text-danger align-self-end">
                    ₹1918
                  </h5>
                  <h3>₹1599</h3>
                </div>
              </div>
              <p className="card-text py-3 d-flex flex-column gap-2">
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Bath
                  With Shampoo & Conditioner
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Blow
                  Dry
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i> Full body
                  Trimming/Zero Haircut
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Ear
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Eyes
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-x-lg fw-bold text-danger"></i>Body Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>
                  Sanitary Trim
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Nail
                  Clipping
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>Teeth
                  Cleaning/Mouth Spray
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Paw
                  Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>
                  Combing/Brushing
                </div>
              </p>
              <div className="text-center">
                <Link to="#" className="btn btnCarousel1 py-2 px-5">
                  Book a Groomer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex justify-content-between border-bottom pb-3">
                <h4>Full Service</h4>
                <div className="card-title-sub d-flex flex-column">
                  <h5 className="text-decoration-line-through text-danger align-self-end">
                    ₹2518
                  </h5>
                  <h3>₹2099</h3>
                </div>
              </div>
              <p className="card-text py-3 d-flex flex-column gap-2">
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Bath
                  With Shampoo & Conditioner
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Blow
                  Dry
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Full
                  body Trimming/Zero Haircut
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Ear
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Eyes
                  Cleaning
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>Body
                  Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>
                  Sanitary Trim
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Nail
                  Clipping
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>Teeth
                  Cleaning/Mouth Spray
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i> Paw
                  Massage
                </div>
                <div className="fs-5  d-flex gap-3">
                  <i className="bi bi-check-lg fw-bold  text-success"></i>
                  Combing/Brushing
                </div>
              </p>
              <div className="text-center">
                <Link to="#" className="btn btnCarousel1 py-2 px-5">
                  Book a Groomer
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
