import React from "react";
import "./filterTableContent.css";

export const FilterTableContent = ({ handleFilter, filter }) => {
  const handleClicked = (clicked) => {
    if (clicked === filter) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  };
  return (
    <div className="filterTableContent">
      <ul className="list-group">
        <li className={handleClicked("All")}>
          <button
            onClick={() => {
              handleFilter("All");
            }}
          >
            All
          </button>
        </li>
        <li className={handleClicked("Action")}>
          <button
            onClick={() => {
              handleFilter("Action");
            }}
          >
            Action
          </button>
        </li>
        <li className={handleClicked("Adventure")}>
          <button
            onClick={() => {
              handleFilter("Adventure");
            }}
          >
            Adventure
          </button>
        </li>
        <li className={handleClicked("Amazing")}>
          <button
            onClick={() => {
              handleFilter("Amazing");
            }}
          >
            Amazing
          </button>
        </li>
        <li className={handleClicked("Comedy")}>
          <button
            onClick={() => {
              handleFilter("Comedy");
            }}
          >
            Comedy
          </button>
        </li>
      </ul>
    </div>
  );
};
