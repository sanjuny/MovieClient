import React, { useState } from "react";

function Search({ movies, onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    const searchText = String(e.target.value);
    setSearchText(searchText.trim());
    onSearch(searchText.toLowerCase());
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-normal mb-2">
        Search
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={searchText}
        placeholder="Search Movie name"
        onChange={handleSearchTextChange}
      />
    </div>
  );
}

export default Search;
