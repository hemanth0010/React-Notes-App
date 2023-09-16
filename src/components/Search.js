import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search({ handleSearchNote }) {
  function handleChange(event) {
    handleSearchNote(event.target.value);
  }

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={handleChange}
        type="text"
        placeholder="type to search"
      ></input>
    </div>
  );
}

export default Search;
