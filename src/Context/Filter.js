import React, { useState } from "react";

const SearchBarWithFiltering = () => {
  // State to track the user's input
  const [searchQuery, setSearchQuery] = useState("");

  // State to store the filtered suggestions
  const [suggestions, setSuggestions] = useState([]);

  // List of vegetables
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

  // Function to handle input changes
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query

    // Filter vegetable names based on the input
    if (query) {
      const filteredVegetables = vegetableList.filter((vegetable) =>
        vegetable.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredVegetables); // Update suggestions
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      {/* Search bar */}
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

      {/* Suggestion dropdown */}
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
              onClick={() => console.log(`Selected: ${vegetable}`)}
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

export default SearchBarWithFiltering;
