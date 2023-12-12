import React from "react";
import img1 from "../assets/images/puppy_bg1.jpg";
import img2 from "../assets/images/puppy_bg2.jpg";
import img3 from "../assets/images/puppy_bg3.jpg";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <style jsx>{`
        .carousel-item > img {
          max-height: 700px;
        }
      `}</style>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active parallax-section"
            style={{ backgroundImage: `url(${img3})`, height: "600px" }}
          >
            <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-center">
              <h1>Pet Home Grooming Service</h1>
              <p>
                A professional groomer will groom your pet in the comfort of
                your home.
              </p>
              <button className=" btn btnCarousel1">
                Book a Professional Groomer
              </button>
            </div>
          </div>
          <div
            className="carousel-item parallax-section"
            style={{ backgroundImage: `url(${img2})`, height: "600px" }}
          >
            <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-center">
              <h1>Spa and Wellness Services</h1>
              <p>Pamper, Relax, Wag: A Spa Day Tailored for Pets.</p>
              <button className=" btn btnCarousel1">Book a Session</button>
            </div>
          </div>
          <div
            className="carousel-item parallax-section"
            style={{ backgroundImage: `url(${img1})`, height: "600px" }}
          >
            <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-center">
              <h1>Services</h1>
              <p>We provide all Kind of services for your pet</p>
              <button className=" btn btnCarousel1">
                Explore our Services
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About />
      <Service />
      <Testimonial />

      {/* Contact Section */}
      <div className="container my-5">
        <h2 className="text-center heading ">Contact Us</h2>
        <div className="row py-3 gap-5">
          <div className="col-md-2">
            <h5 className="subHeading">VISIT OUR SPA</h5>
            <p className="heading fw-bold">PetWorld</p>
            <p>
              #12 7th main road 18th cross Bengaluru 56XXXX, Karnataka, India
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="subHeading">FOR APPOINTMENTS</h5>
            <p>
              Admin <br />
              <strong>Email: </strong> admin@gmail.com <br />
              <strong>Mob no: </strong> +91 XXXXX-XXXXX <br />
              <strong>Off no: </strong> 080 XXXXXX
              <br />
            </p>
            <p>
              <strong> Spa Timings</strong>
              <br />
              Monday to Sunday : 8 am to 8 pm
            </p>
          </div>
          <div className="col-md-5">
            <h5 className="text-center subHeading">SEND US A MESSAGE</h5>
            <div className="mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mt-3">
              <textarea
                name="text"
                id="text"
                cols="10"
                rows="2"
                placeholder="Write your query"
                className="form-control"
              ></textarea>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btnCarousel1 py-2 px-5">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
