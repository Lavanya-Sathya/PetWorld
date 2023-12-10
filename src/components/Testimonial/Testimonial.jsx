import React from "react";
import test1 from "../../assets/images/test1.jpg";
import test2 from "../../assets/images/test2.jpg";
import test3 from "../../assets/images/test3.jpg";
import test4 from "../../assets/images/test4.jpg";
import test5 from "../../assets/images/test5.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="container mb-4">
        <h2 className="text-center pb-5 heading">Testimonial</h2>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row justify-content-center gap-1">
                <div className="col-md-4">
                  <img src={test1} className="img-fluid rounded" alt="img1" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title py-2">Rekha Rani</h5>
                    <h6 className="text-muted">12/07/2023</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="row justify-content-center gap-1">
                <div className="col-md-4">
                  <img src={test2} className="img-fluid rounded" alt="img1" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title py-2">Ravi</h5>
                    <h6 className="text-muted">12/08/2023</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="row justify-content-center gap-1">
                <div className="col-md-4">
                  <img src={test3} className="img-fluid rounded" alt="img1" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title py-2">Neha</h5>
                    <h6 className="text-muted">24/08/2023</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row justify-content-center gap-1">
                <div className="col-md-4">
                  <img src={test4} className="img-fluid rounded" alt="img1" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title py-2">Divya</h5>
                    <h6 className="text-muted">24/09/2023</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center gap-1">
                <div className="col-md-4">
                  <img src={test5} className="img-fluid rounded" alt="img1" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title py-2">Medha</h5>
                    <h6 className="text-muted">24/10/2023</h6>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            style={{ color: "black" }}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <i class="bi bi-chevron-left text-dark fs-5"></i>
            </span>
            <span className="visually-hidden text-dark">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <i class="bi bi-chevron-right text-dark fs-5"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid my-4 p-0">
        <div className="custom-dark p-5 text-center">
          <h4>Make an appointment with us today</h4>
          <button className="btn btn-light mt-2">Book an Appointment</button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
