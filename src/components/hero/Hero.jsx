import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-img">
          <img
            src="https://urban-clothingg.netlify.app/assets/heroo-img.avif"
            className="responsive-img"
            alt="hero-screen"
          />
          <div className="hero-text">
            <h1 className="hero-heading heading1 l-height">
              Color burst collection
            </h1>
            <p className="hero-description  l-height">
              Vibrant and refreshing styles to liven up your wardrobe.
            </p>
            <button className="action-btn">Shop now</button>
          </div>
        </div>
      </section>
    </div>
  );
};
