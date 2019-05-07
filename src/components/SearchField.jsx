import React from 'react';

const SearchField = ({ onSearchTermChange }) => {
  return (
    <input
      type='text'
      placeholder='search ancients'
      onChange={e => onSearchTermChange(e.target.value)}
    />
  );
};

export default SearchField;
