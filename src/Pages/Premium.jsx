import React from "react";
import "./Premium.css";

const Membership = () => {
  return (
    <>
    


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
         </div>
          <button className="packageBookNow" >Book Now</button>
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

          </div>
          <button className="packageBookNow" >Book Now</button>
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

          </div>
          <button className="packageBookNow" >Book Now</button>
        </div>
      </div>
    </section>
{/* Premium End */}





    </>
  );
};

export default Membership;
