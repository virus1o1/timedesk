import React from 'react';
import './ButtonStyles.css';

function Button({ label, checkbox }) {
  return (
    <button className="custom-button d-flex">
      <input type="checkbox" className="me-3 custom-checkbox" />
      <span className="btn-text fw-semibold">{label}</span>
    </button>
  );
}

export default Button;
