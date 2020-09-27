import React from 'react';

import './SearchBar.css';

export default function SearchBar({ onChange }) {
  return (
    <div className="SearchBar">
      <div className="SearchIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#657789"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className="SearchInput">
        <input placeholder="Rechercher un pays..." onChange={onChange} />
      </div>
    </div>
  );
}
