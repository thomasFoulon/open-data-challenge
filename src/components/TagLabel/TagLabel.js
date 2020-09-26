import React from 'react';

import './TagLabel.css';

function TagLabel({ text, color }) {
  return (
    <div className={`TagLabel TagLabel--${color}`}>
      <span className="TagLabel__sharp"># </span>
      {text}
    </div>
  );
}

export default TagLabel;
