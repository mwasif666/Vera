import React from "react";
import "./ClassPackages.css";

const ClassPackages = () => {
  return (
    <>

<section className="membership-intro container py-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/f1d93e54-a9a9-4d57-b99e-49a0a5457fb2/bion-premium-hair-salon.jpg"
            alt="Premium Membership"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>

        {/* Right Column - Content */}
        <div className="col-md-6">
          <div className="intro-content ps-md-4 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">Class Packages</h2>
            <p className="text-muted mb-4">
              Find your rhythm and build consistency with our Class Packages — whether you’re just starting your wellness journey or deepening your daily practice. From yoga and barre to reformer pilates and sound healing, each session is designed to help you move, breathe, and reconnect.
            </p>
            <p className="text-muted mb-4">
              Choose a flexible pack that fits your routine, or drop in for a single class — because wellness should work around you.
            </p>
            {/* <a href="#packages" className="btn btn-dark rounded-pill px-4 py-2">
              Explore Packages
            </a> */}
          </div>
        </div>
      </div>
    </section>


    {/* intro End */}
      <section className="class-section">
      <p className="section-subtitle">Mind • Body • Balance</p>
      <h2 className="section-title">Class Packages</h2>

      {/* Drop-In Options */}
      <div className="package-block">
        <h3 className="package-heading">Drop-In Options</h3>
        <ul className="package-list">
          <li>Introductory Class (first visit only) <span>= AED 120</span></li>
          <li>Single Class* <span>= AED 160</span></li>
          <li>Private Reformer Pilates <span>= AED 400</span></li>
          <li>Sound Healing Class <span>= AED 250</span></li>
        </ul>
        
      </div>

      {/* Class Packages */}
      <div className="package-block">
        {/* <h3 className="package-heading">Class Packages</h3> */}
        <div className="package-grid">
          <div className="package-card">
            <h4>Five Class Pack</h4>
            <div className="content">
              <p>AED 800</p>
            <span>Valid for one month</span>
            </div>
          <button className="packageBookNow" >Book Now</button>

          </div>
          <div className="package-card">
            <h4>Ten Class Pack</h4>
            <div className="content"><p>AED 1,500</p>
            <span>Valid for two months</span></div>
          <button className="packageBookNow" >Book Now</button>

          </div>
          <div className="package-card">
            <h4>20-Class Pack</h4>
           <div className="content">
             <p>AED 2,800</p>
            <span>Valid for three months</span>
           </div>
          <button className="packageBookNow" >Book Now</button>

          </div>
          <div className="package-card">
             <h4>Unlimited Monthly Pass</h4>
           <div className="content">
            <p>AED 2,200</p>
            <span>Valid for 30 calendar days from the first use</span>
           </div>
          <button className="packageBookNow" >Book Now</button>

          </div>
        </div>
      </div>

      <p className="package-note">
        *Packages are valid for Yoga, Barre and Group Reformer Pilates Classes. 
        Private Reformer Pilates Sessions and Sound Healing can be added separately 
        or booked via the credit system.
      </p>
    </section>
</>
  );
};

export default ClassPackages;
