import { React } from "react";
import { useProductFilter } from "../../context/product-filter-context";
import "./Filter.css";

const Filter = () => {
  const { filterState, filterDispatch } = useProductFilter();
  const { sortBy, rating, priceRange } = filterState;
  return (
    <div className="filter-section">
      <div className="filter-header">
        <h4>FILTERS</h4>
        <button
          className="action-btn"
          onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
        >
          clear
        </button>
      </div>
      <h5 className="section-heading">Price range(Rs. {priceRange})</h5>
      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min={0}
          max={9000}
          step={3000}
          defaultValue={priceRange}
          checked={filterState.priceRange}
          onChange={(event) =>
            filterDispatch({
              type: "PRICE_RANGE_FILTER",
              payload: { priceRange: event.target.value },
            })
          }
        />
        <div className="slider-range-value">
          <p className="slider-low">0</p>
          <p className="slider-low">3000</p>
          <p className="slider-mid">6000</p>
          <p className="slider-high">9000</p>
        </div>
      </div>
      <h5 className="section-heading">Sort price by</h5>
      <ul className="list-non-bullet">
        <li>
          <input
            type="radio"
            name="price-tag"
            id="price-range-1"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({
                type: "LOW_TO_HIGH",
                payload: { sortBy: "LOW_TO_HIGH" },
              })
            }
          />{" "}
          Low to high
        </li>
        <li>
          <input
            type="radio"
            name="price-tag"
            id="price-range-2"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({
                type: "HIGH_TO_LOW",
                payload: { sortBy: "HIGH_TO_LOW" },
              })
            }
          />{" "}
          High to low
        </li>
      </ul>
      <h5 className="section-heading">Ratings ⭐</h5>
      <ul className="list-non-bullet">
        <li>
          <input
            type="radio"
            name="rating"
            id="rating"
            defaultValue={rating}
            checked={rating === "4.5"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: { rating: "4.5" } })
            }
          />
          4.5 &amp; above
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            id="rating"
            defaultValue={rating}
            checked={rating === "4"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: { rating: "4" } })
            }
          />
          4 &amp; above
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            id="rating"
            defaultValue={rating}
            checked={rating === "3"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: { rating: "3" } })
            }
          />
          3 &amp; above
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            id="rating"
            defaultValue={rating}
            checked={rating === "2"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: { rating: "2" } })
            }
          />
          2 &amp; above
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            id="rating"
            defaultValue={rating}
            checked={rating === "1"}
            onChange={() =>
              filterDispatch({ type: "RATING", payload: { rating: "1" } })
            }
          />
          1 &amp; above
        </li>
      </ul>
      <h5 className="section-heading">CATEGORIES</h5>
      <ul className="list-non-bullet">
        <li>
          <input
            type="checkbox"
            name="category-1"
            id="category-1"
            checked={filterState.categories.includes("shoes")}
            onChange={(e) =>
              filterDispatch({
                type: "CATEGORIES",
                payload: {
                  categoryName: "shoes",
                  isSelected: e.target.checked,
                },
              })
            }
          />
          Shoes
        </li>
        <li>
          <input
            type="checkbox"
            name="category-2"
            id="category-2"
            checked={filterState.categories.includes("jackets")}
            onChange={(e) =>
              filterDispatch({
                type: "CATEGORIES",
                payload: {
                  categoryName: "jackets",
                  isSelected: e.target.checked,
                },
              })
            }
          />
          Jacket
        </li>
        <li>
          <input
            type="checkbox"
            name="category-2"
            id="category-3"
            checked={filterState.categories.includes("accessories")}
            onChange={(e) =>
              filterDispatch({
                type: "CATEGORIES",
                payload: {
                  categoryName: "accessories",
                  isSelected: e.target.checked,
                },
              })
            }
          />
          Accessories
        </li>
      </ul>
      <h5 className="section-heading">BRANDS</h5>
      <ul className="list-non-bullet">
        <li>
          <input
            type="checkbox"
            name="brand-1"
            id="brand-1"
            checked={filterState.brands.includes("H&M")}
            onChange={(e) =>
              filterDispatch({
                type: "BRANDS",
                payload: { brand: "H&M", isSelected: e.target.checked },
              })
            }
          />{" "}
          H&amp;M
        </li>
        <li>
          <input
            type="checkbox"
            name="brand-2"
            id="brand-2"
            checked={filterState.brands.includes("Zara")}
            onChange={(e) =>
              filterDispatch({
                type: "BRANDS",
                payload: { brand: "Zara", isSelected: e.target.checked },
              })
            }
          />{" "}
          ZARA
        </li>
        <li>
          <input
            type="checkbox"
            name="brand-3"
            id="brand-3"
            checked={filterState.brands.includes("Westside")}
            onChange={(e) =>
              filterDispatch({
                type: "BRANDS",
                payload: { brand: "Westside", isSelected: e.target.checked },
              })
            }
          />
          Westside
        </li>
      </ul>
    </div>
  );
};

export default Filter;
