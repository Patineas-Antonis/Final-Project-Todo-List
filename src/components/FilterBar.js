import React, { useState } from "react";

function FilterBar({ handleSearchChange, handleFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdownChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    handleFilterChange(filter);
  };

  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearchChange(term);
  };

  return (
    <div className="filter-bar">
      <select value={selectedFilter} onChange={handleDropdownChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default FilterBar;
