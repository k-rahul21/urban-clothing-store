import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";

export const Categories = () => {
  return (
    <section className="category-section">
      <div className="category-header">
        <h1 className="heading2">Category</h1>
        <div className="category-cta">
          <Link to="/home">
            <i className="fa-solid fa-circle-arrow-left onhover" />
          </Link>
          <Link to="/home">
            <i className="fa-solid fa-circle-arrow-right onhover" />
          </Link>
        </div>
      </div>
      <div className="category-list">
        <div className="shoe-category category-item">
          <img
            src="https://urban-clothingg.netlify.app/assets/shoes-cover.avif"
            alt="category cover"
          />
          <Link to="/home" className="font-bold shadow-card category-name">
            Shoes
          </Link>
        </div>
        <div className="jacket-category category-item">
          <img
            src="https://urban-clothingg.netlify.app/assets/jackets-cover.avif"
            alt="category cover"
          />
          <Link to="/home" className="font-bold shadow-card category-name">
            Jackets
          </Link>
        </div>
        <div className="accessories-category category-item">
          <img
            src="https://urban-clothingg.netlify.app/assets/accessories-cover.avif"
            alt="category cover"
          />
          <Link to="/home" className="font-bold shadow-card category-name">
            Accessories
          </Link>
        </div>
      </div>
    </section>
  );
};
