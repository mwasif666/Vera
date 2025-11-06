import React from "react";
import "./CreditPass.css";

const CreditPass = () => {
  return (
    <section className="creditpass-section container text-center my-5">
      <h4 className="subheading">Credit Based Wellness Pass</h4>

      <div className="row justify-content-center mt-4">
        {/* Starter 10 */}
        <div className="col-md-4 col-sm-12 border-end">
          <h5 className="plan-title">Starter 10</h5>
          <p className="plan-price">AED 1,200</p>
          <p className="plan-duration">10 credits — valid for 1 month</p>
          <button className="packageBookNow" >Book Now</button>

        </div>

        {/* Flex 25 */}
        <div className="col-md-4 col-sm-12 border-end">
          <h5 className="plan-title">Flex 25</h5>
          <p className="plan-price">AED 2,750</p>
          <p className="plan-duration">25 credits — valid for 2 months</p>
          <button className="packageBookNow" >Book Now</button>

        </div>

        {/* Elite 50 */}
        <div className="col-md-4 col-sm-12">
          <h5 className="plan-title">Elite 50</h5>
          <p className="plan-price">AED 5,200</p>
          <p className="plan-duration">50 credits — valid for 3 months</p>
          <button className="packageBookNow" >Book Now</button>

        </div>
      </div>

      {/* Credit Usage Guide */}
      <div className="usage-guide mt-5">
        <h6 className="guide-title">Credit Usage Guide</h6>
        <ul className="guide-list">
          <li>Group classes (Yoga / Barre / Pilates) = 1 credit</li>
          <li>Private Reformer Session = 4 credits</li>
          <li>Massage / Tech Treatments = 4 credits</li>
          <li>Sound Healing = 3 credits</li>
          <li>Signature Ritual (90–120 minutes) = 6 credits</li>
        </ul>
      </div>
    </section>
  );
};

export default CreditPass;
