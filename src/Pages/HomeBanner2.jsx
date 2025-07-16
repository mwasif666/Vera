import React, { useState, useEffect, useRef } from "react";
import "../Components/HomeVideo.css";

const HomeBanner2 = () => {
  return (
    <div className="video-container home-container">
      {/* Video that fades in */}
      <div className="background-wrapper">
        <div className="video-overlay">
          <img src="./assets/images/logo/logo2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
