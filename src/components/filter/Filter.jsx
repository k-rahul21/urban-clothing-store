import { React } from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h4>FILTERS</h4>
        <button className="action-btn">clear</button>
      </div>
      <h5 className="section-heading">Price range(Rs.)</h5>
      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min={2000}
          max={4000}
          step={1000}
          defaultValue={3000}
        />
        <div className="slider-range-value">
          <p className="slider-low">2000</p>
          <p className="slider-mid">3000</p>
          <p className="slider-high">4000</p>
        </div>
      </div>
      <h5 className="section-heading">Sort price by</h5>
      <ul className="list-non-bullet">
        <li>
          <input type="radio" name="price-tag" id="price-range-1" /> Low to high
        </li>
        <li>
          <input type="radio" name="price-tag" id="price-range-2" /> High to low
        </li>
      </ul>
      <h5 className="section-heading">Ratings ⭐</h5>
      <ul className="list-non-bullet">
        <li>
          <input type="radio" name="rating" id="rating" /> 4.5 &amp; above
        </li>
        <li>
          <input type="radio" name="rating" id="rating" /> 4 &amp; above
        </li>
        <li>
          <input type="radio" name="rating" id="rating" /> 3 &amp; above
        </li>
        <li>
          <input type="radio" name="rating" id="rating" /> 2 &amp; above
        </li>
        <li>
          <input type="radio" name="rating" id="rating" /> 1 &amp; above
        </li>
      </ul>
      <h5 className="section-heading">CATEGORIES</h5>
      <ul className="list-non-bullet">
        <li>
          <input type="checkbox" name="category-1" id="category-1" /> Shoe
        </li>
        <li>
          <input type="checkbox" name="category-1" id="category-2" /> Jacket
        </li>
        <li>
          <input type="checkbox" name="category-1" id="category-3" />
          Accessories
        </li>
      </ul>
      <h5 className="section-heading">BRANDS</h5>
      <ul className="list-non-bullet">
        <li>
          <input type="checkbox" name="category-1" id="category-1" /> H&amp;M
        </li>
        <li>
          <input type="checkbox" name="category-1" id="category-2" /> ZARA
        </li>
        <li>
          <input type="checkbox" name="category-1" id="category-3" />
          Westside
        </li>
      </ul>
    </div>
  );
};

export default Filter;
