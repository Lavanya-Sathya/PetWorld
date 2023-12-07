import React from "react";
import img1 from "../assets/images/puppy_bg1.jpg";
import img2 from "../assets/images/puppy_bg2.jpg";
import img3 from "../assets/images/puppy_bg3.jpg";
import About from "../components/About/About";

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
          <div className="carousel-item active">
            <img src={img3} className="img-fluid d-block w-100" alt="img3" />
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
          <div className="carousel-item">
            <img src={img2} className="img-fluid d-block w-100" alt="img2" />
            <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-center">
              <h1>Spa and Wellness Services</h1>
              <p>Pamper, Relax, Wag: A Spa Day Tailored for Pets.</p>
              <button className=" btn btnCarousel1">Book a Session</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="img-fluid d-block w-100" alt="img1" />
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
    </>
  );
};

export default Home;
