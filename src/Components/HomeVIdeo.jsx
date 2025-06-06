import React, { useState, useEffect, useRef } from "react";
import "./HomeVideo.css";

const HomeVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = "./assets/images/Banners/1.mp4";
  const thumbnailSrc = "./assets/images/Banners/Thumbnail.png";

  useEffect(() => {
    // Preload the video
    const video = document.createElement("video");
    video.src = videoSrc;

    const timer = setTimeout(() => {
      setShowVideo(true);
      // When showing video, ensure it starts from beginning
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented:", e));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="video-container">
      {/* Thumbnail that fades out when video starts */}
      <div className="video-thumbnail" style={{ opacity: showVideo ? 0 : 1 }}>
        <img src={thumbnailSrc} alt="Video thumbnail" />
        <div className="thumbnail-overlay">
          <img src="./assets/images/logo/logo.png" alt="" />
          <p className="video-description">Transformative Hair Service</p>
        </div>
      </div>

      {/* Video that fades in */}
      <div className="video-wrapper" style={{ opacity: showVideo ? 1 : 0 }}>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <img src="./assets/images/logo/logo.png" alt="" />
          <p className="video-description">Transformative Hair Service</p>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
