import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchCb = () => {
    handleSearch(search);
  };

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search the title'
      />
      <button onClick={handleSearchCb}> Search</button>
    </div>
  );
};

export default SearchBar;
