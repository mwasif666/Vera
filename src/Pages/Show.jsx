import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";


const Show = () => {
  return (
    <div className="slider-container">
      <div className="container-fluid text-slide2">
        <div className="row">
          <div className="col-md-7 p-0">
            <div className="image-up">
              <img src="/assets/images/team/up.png" alt="" />
            </div>
          </div>
          <div className="col-md-5 p-0 team-up">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h2>Discover Our Services</h2>
              {/* <button>Menu</button> */}
              <Link to="/Services"> 
            <button className="ctaButton">Menu</button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
