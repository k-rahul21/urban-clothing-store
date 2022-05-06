import React from "react";
import "./categories.css";

export const Categories = () => {
  return (
    <section className="category-section">
      <div className="category-header">
        <h1 className="heading2">Category</h1>
        <div className="category-cta">
          <a href="#">
            <i className="fa-solid fa-circle-arrow-left onhover" />
          </a>
          <a href="#">
            <i className="fa-solid fa-circle-arrow-right onhover" />
          </a>
        </div>
      </div>
      <div className="category-list">
        <div className="shoe-category category-item">
          <img
            src="https://urban-clothingg.netlify.app/assets/shoes-cover.avif"
            alt="cover image"
          />
          <a
            href="/pages/products.html"
            className="font-bold shadow-card category-name"
          >
            Shoes
          </a>
        </div>
        <div className="jacket-category category-item">
          <img src="https://urban-clothingg.netlify.app/assets/jackets-cover.avif" />
          <a
            href="/pages/products.html"
            className="font-bold shadow-card category-name"
          >
            Jackets
          </a>
        </div>
        <div className="accessories-category category-item">
          <img
            src="https://urban-clothingg.netlify.app/assets/accessories-cover.avif"
            alt="cover image"
          />
          <a
            href="/pages/products.html"
            className="font-bold shadow-card category-name"
          >
            Accessories
          </a>
        </div>
      </div>
    </section>
  );
};
