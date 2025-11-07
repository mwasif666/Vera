import React from "react";
import "./Premium.css";

const Membership = () => {
  return (
    <>
    
     <section className="membership-intro container py-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6">
          <img
            src="https://content.jdmagicbox.com/v2/comp/bangalore/x1/080pxx80.xx80.230311021135.n7x1/catalogue/ethnix-premium-unisex-salon-brookefield-bangalore-beauty-parlours-0oyntpvdle.jpg"
            alt="Premium Membership"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>

        {/* Right Column - Content */}
        <div className="col-md-6">
          <div className="intro-content ps-md-4 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">Premium Memberships</h2>
            <p className="text-muted mb-4">
              Designed for those who value balance, consistency, and care —
              our Premium Memberships bring you a holistic wellness experience
              that combines fitness, relaxation, and rejuvenation.
            </p>
            <p className="text-muted mb-4">
              Choose from flexible monthly plans that fit your lifestyle —
              each offering curated classes, spa treatments, and exclusive
              access to The Alley by Vera.
            </p>
            {/* <a href="#packages" className="btn btn-dark rounded-pill px-4 py-2">
              Explore Packages
            </a> */}
          </div>
        </div>
      </div>
    </section>

{/* Intro End */}
    <section className="membership-section container text-center my-5">
      <h4 className="subheadingPremium">Premium Memberships</h4>
      <div className="row justify-content-center mt-4">
        {/* Essential Plan */}
        <div className="col-md-4 col-sm-12 border-end">
          <h5 className="plan-title">Essential</h5>
         <div className="content">
             <p className="plan-price">AED 1,800 / month</p>
          <ul className="plan-details">
            <li>Four group classes (yoga / barre / pilates)</li>
            <li>One massage or tech treatment</li>
            <li>2 Sauna access</li>
            <li>10% off spa treatments and F&B at The Alley by Vera</li>
          </ul>
          <button className="packageBookNow" >Book Now</button>
         </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4 col-sm-12 border-end">
          <h5 className="plan-title">Premium</h5>
          <div className="content">
            <p className="plan-price">AED 3,000 / month</p>
          <ul className="plan-details">
            <li>Eight group classes (yoga / barre / pilates)</li>
            <li>Two spa or tech treatments</li>
            <li>Unlimited sauna access</li>
            <li>One sound healing session</li>
            <li>15% off spa treatments, F&B at The Alley by Vera and all retail items</li>
          </ul>

          <button className="packageBookNow" >Book Now</button>
          </div>
        </div>

        {/* All Access Plan */}
        <div className="col-md-4 col-sm-12">
          <h5 className="plan-title">All Access</h5>
          <div className="content">
            <p className="plan-price">AED 5,000 / month</p>
          <ul className="plan-details">
            <li>Unlimited classes (yoga / barre / pilates)</li>
            <li>Four treatments per month</li>
            <li>Full access to Gharieni tech</li>
            <li>Priority booking</li>
            <li>20% off spa treatments, F&B at The Alley by Vera and all retail items</li>
            <li>Two free guest passes per month</li>
          </ul>

          <button className="packageBookNow" >Book Now</button>
          </div>
        </div>
      </div>
    </section>
{/* Premium End */}





    </>
  );
};

export default Membership;
