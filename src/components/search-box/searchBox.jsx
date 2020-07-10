import React from "react";
import "./searchBox.css";

export const SearchBox = ({ placeholder, handleChange  }) => (
  <input
    className="search"
    type="search"
    onChange={handleChange}
    placeholder={placeholder}
  />
);

