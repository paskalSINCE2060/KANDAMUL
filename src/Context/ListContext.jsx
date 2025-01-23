import React, { useState } from "react";

const SearchBarWithSuggestions = () => {
  // State to store the search input
  const [searchQuery, setSearchQuery] = useState("");

  // State to store the filtered list of suggestions
  const [suggestions, setSuggestions] = useState([]);

  // List of vegetable names
  const vegetableList = [
    "Leafy Greens",
    "Root Vegetables",
    "Organic Produce",
    "Herbs & Spices",
    "Exotic Vegetables",
    "Seasonal Vegetables",
    "Micro Greens",
    "Gourmet Vegetables",
  ];

  // Function to handle changes in the search input
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query state

    // Filter the vegetable list based on the query
    if (query) {
      const filteredSuggestions = vegetableList.filter((vegetable) =>
        vegetable.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // Update suggestions state
    } else {
      setSuggestions([]); // Clear suggestions if query is empty
    }
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search for vegetables..."
        value={searchQuery}
        onChange={handleSearchInput}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Display suggestions */}
      {suggestions.length > 0 && (
        <ul
          style={{
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "white",
            listStyle: "none",
            padding: "10px",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((vegetable, index) => (
            <li
              key={index}
              onClick={() => console.log(`Clicked: ${vegetable}`)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            >
              {vegetable}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithSuggestions;
