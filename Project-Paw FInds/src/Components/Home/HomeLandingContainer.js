import React from "react";
import dog1 from './images/dog1.png'
import footPrint from "./images/footPrint.png";
import "./HomeLandingContainer.css";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
            <p>Happiness is  </p>
            </div>
            a Warm
            <br />
            Puppy !
            </p>
          <p className="home-second-para">
            {props.description}
          </p>
        </div>
        <div className="adopt-btn">
          <Link to='./pets'><button className="Home-button" onClick={scrollToTop}><p>Adopt a Pet</p><img src={footPrint} alt="footprint" /></button></Link>
        </div>
      </div>
      <div className="homeContainer-right">
        <img src={dog1} alt='petting a dog'/>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
