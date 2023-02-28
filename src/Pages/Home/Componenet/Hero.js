import React from "react";
import img1 from "../../../assets/section 2/tv.png";
import video1 from "../../../assets/section 2/tv.mp4"
import img2 from "../../../assets/section 4/image.jpg";
import img3 from "../../../assets/section 5/device.png";
import video2 from "../../../assets/section 5/device.m4v"
import img4 from "../../../assets/section 6/children.png"
import img5 from "../../../assets/section 4/boxshot.png"

import "../../Home/HomeStyle.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="advertise1">
        <div className="ad1">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="pic1">
          <img src={img1} />
          <video src={video1} autoPlay loop muted/>
        </div>
      </div>
      <div className="advertise2">
        <div className="pic2">
          <img src={img2} />
          <div className="box">
            <div className="box-content">
            <img src={img5} />
            <div className="box-text">
            <h4>Stranger Things</h4>
            <p>Downloading...</p>
            </div>
            </div>
            <img src={img5} />
          </div>
        </div>
        <div className="ad2">
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="advertise3">
        <div className="ad3">
          <h2>Watch everywhere.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="pic3">
          <img src={img3} />
          <video src={video2} autoPlay loop muted />
        </div>
      </div>
      <div className="advertise4">
        <div className="pic4">
          <img src={img4} />
        </div>
        <div className="ad4">
          <h2>Create profiles for kids.</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
