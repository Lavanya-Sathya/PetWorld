import React from "react";
import bg2 from "../../assets/images/bg2.jpg";
const About = () => {
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center heading my-5">About</h2>
        <p>
          Welcome to PetWorld, where our passion for pets meets exceptional care
          and service! At PetWorld, we understand that pets are not just
          animals; they are cherished members of your family, bringing joy,
          companionship, and unconditional love. Our commitment is to create a
          haven where pets receive the highest standard of care, grooming, and
          attention they deserve. With a team of experienced and compassionate
          pet enthusiasts, PetWorld is dedicated to providing a nurturing
          environment for your furry friends.
        </p>
        {/* <p>
          At the heart of PetWorld is a belief in the well-being and happiness
          of every pet. Our state-of-the-art facilities offer a range of
          services, from expert grooming and spa treatments to health check-ups
          and specialized care. We take pride in tailoring our services to meet
          the unique needs of each pet, ensuring they leave our salon not just
          looking their best but feeling their best. Whether it's a relaxing spa
          day, a fun-filled daycare adventure, or essential health services,
          PetWorld is your pet's home away from home. Join us in creating a
          world where pets thrive, tails wag, and pet parents find peace of mind
          knowing their beloved companions are in caring hands.
        </p> */}
      </div>
      <div
        className="container-fluid my-5 p-0 parallax-section"
        style={{
          backgroundImage: `url(${bg2})`,
          height: "500px",
          color: "#f5f5f5",
        }}
      >
        <div className="container p-5">
          <div className="row py-5 my-4 justify-content-center">
            <div className="col-md-4 ">
              <h5>
                <i className="bi bi-gear-fill"></i> CUSTOMIZED GROOMING
              </h5>
              <p className="displaySign">
                Tailored Pet Grooming Services Designed to Meet Your Furry
                Friend's Unique Needs.
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <i className="bi bi-person-fill-check"></i> EXPERT GROOMERS
              </h5>
              <p className="displaySign">
                Our Skilled Groomers Provide Professional Advice for Your Pet's
                Pampering Needs.
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <i className="bi bi-award"></i> STATE-OF-THE-ART SALON
              </h5>
              <p className="displaySign">
                Pawfect Grooming Spaces with Top-notch Facilities and Customized
                Pet-Specific Treatment Areas.
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <i className="bi bi-people-fill"></i> HAPPY PET OWNERS
              </h5>
              <p className="displaySign">
                Join Our Proud Pet Parents – Our Grooming Services Bring Smiles
                to Every Furry Face.
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <i className="bi bi-columns-gap"></i> CUTTING-EDGE PET CARE
              </h5>
              <p className="displaySign">
                Leading the Pack with State-of-the-Art Technologies and
                Equipment for Unmatched Pet Grooming.
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <i className="bi bi-brightness-high-fill"></i> STRESS-FREE
                EXPERIENCE
              </h5>
              <p className="displaySign">
                Experience the Tranquility – Our Pet Salon Offers Stress-Free
                Grooming for Every Purr and Woof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
