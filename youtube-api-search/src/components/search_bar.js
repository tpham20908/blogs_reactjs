import React from "react";

const SearchBar = ({onInputChange}) => {
  return (
    <div className="search-bar">
      <input onChange={e => onInputChange(e.target.value)} />
    </div>
  )
}

export default SearchBar;