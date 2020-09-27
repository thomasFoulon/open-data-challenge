import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './SelectableCountry.css';

export default function SelectableCountry({
  country,
  selected,
  onChange
}) {
  let className = 'selectableCountry';
  let selectedIcon = null;
  if (selected) {
    className += ' selected';
    selectedIcon = (<FontAwesomeIcon className="checkedIcon" icon={faCheck} size="lg" />);
  }
  return (
    <button
      className={className}
      type="button"
      onClick={() => onChange()}
    >
      <p>{country.name}</p>
      {selectedIcon}
    </button>
  );
}