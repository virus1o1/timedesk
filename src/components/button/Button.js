import React, { useState } from 'react';
import './ButtonStyles.css';

function Button({ label, checkbox }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (checkbox) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <button className="custom-button d-flex" onClick={handleClick}>
      {checkbox && (
        <input
          type="checkbox"
          className="me-3 custom-checkbox"
          checked={isChecked}
          readOnly
        />
      )}
      <span className="btn-text fw-semibold">{label}</span>
    </button>
  );
}

export default Button;
