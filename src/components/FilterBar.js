// FilterBar.js

/**
 * Component for filtering todos by search term and completion status.
 * @param {Object} props - The component props.
 * @param {Function} props.handleSearchChange - Function to handle search term change.
 * @param {Function} props.handleFilterChange - Function to handle filter change.
 * @param {boolean} props.darkMode - Flag indicating whether dark mode is enabled.
 * @returns {JSX.Element} - JSX element representing the FilterBar component.
 */
import React, { useState } from "react";

function FilterBar({ handleSearchChange, handleFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Handles dropdown filter change
  const handleDropdownChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    handleFilterChange(filter);
  };

  // Handles search input change
  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearchChange(term);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInputChange}
        style={{
          width: "450px",
          height: "38px",
          top: "399px",
          left: "153px",
          padding: "8px 16px",
          borderRadius: "5px",
          border: "1px solid #6C63FF",
          background: "#fff",
        }}
      />
      <select
        value={selectedFilter}
        onChange={handleDropdownChange}
        style={{
          width: "70px",
          height: "38px",
          top: "399px",
          left: "753px",
          padding: "8px 16px",
          borderRadius: "5px",
          border: "1px solid #6C63FF",
          background: "#fff",
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default FilterBar;
