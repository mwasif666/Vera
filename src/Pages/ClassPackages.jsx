import React from "react";
import "./ClassPackages.css";

const ClassPackages = () => {
  return (
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
  );
};

export default ClassPackages;
